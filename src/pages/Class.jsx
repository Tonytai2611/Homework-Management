import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Chalkboard from "../components/Chalkboard";
import CorkBoard from "../components/CorkBoard";
import HomeworkItem from "../components/HomeworkItem";
import StudentAvatar from "../components/StudentAvatar";
import AdminLogin from "../components/AdminLogin";
import Modal from "../components/Modal";
import { useAuth } from "../auth/AuthProvider";
import { rtdb, rtdbSet, rtdbSubscribe } from "../firebase";
import { deriveClassColor, DEFAULT_CLASS_COLOR } from "../utils/classColors";

const defaultHomework = () => ({
  weekRange: 'This week',
  items: [],
  students: [],
  announcement: '',
  updatedAt: Date.now(),
});

const avatarForName = (name = "Student") => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&bold=true&size=128`;

const ClassPage = ()=>{
  const { classId } = useParams();
  const navigate = useNavigate();
  const fallbackClass = { name: 'Unknown', mascot: '🏫', colorClass: DEFAULT_CLASS_COLOR };

  const [classInfo, setClassInfo] = useState(fallbackClass);
  const [data, setData] = useState(() => defaultHomework());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!rtdb) {
      setClassInfo(fallbackClass);
      setData(defaultHomework());
      setLoading(false);
      setError('RTDB chưa được cấu hình. Đang hiển thị dữ liệu mẫu.');
      return;
    }

    const unsubClass = rtdbSubscribe(`/classes/${classId}`, (val) => {
      const next = val || fallbackClass;
      setClassInfo({
        ...fallbackClass,
        ...next,
        colorClass: deriveClassColor(classId, next?.colorClass, DEFAULT_CLASS_COLOR)
      });
    });

    const unsubHomework = rtdbSubscribe(`/homework/${classId}`, (val) => {
      setData(val ? { ...defaultHomework(), ...val } : defaultHomework());
      setLoading(false);
    });

    return () => {
      unsubClass && unsubClass();
      unsubHomework && unsubHomework();
    };
  }, [classId]);

  const writeHomework = (payload) => {
    if (!rtdb) return;
    rtdbSet(`/homework/${classId}`, payload).catch((err) => {
      console.error('Save homework failed', err);
      setError('Không thể lưu dữ liệu. Kiểm tra kết nối mạng.');
    });
  };

  const updateData = (producer) => {
    setData((prev) => {
      const prevSafe = { ...defaultHomework(), ...prev };
      const base = typeof producer === 'function' ? producer(prevSafe) : producer;
      const payload = { ...defaultHomework(), ...base, updatedAt: Date.now() };
      writeHomework(payload);
      return payload;
    });
  };

  const [showHomeworkModal, setShowHomeworkModal] = useState(false);
  const [homeworkForm, setHomeworkForm] = useState({ title: '', type: 'quiz', link: '' });
  const [editingHomeworkIndex, setEditingHomeworkIndex] = useState(null);
  const [homeworkDeleteModal, setHomeworkDeleteModal] = useState({ open: false, index: null });
  const [isRemovingHomework, setIsRemovingHomework] = useState(false);

  const [showWeekModal, setShowWeekModal] = useState(false);
  const [weekRangeDraft, setWeekRangeDraft] = useState('');

  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);
  const [announcementDraft, setAnnouncementDraft] = useState('');

  const [showClassNameModal, setShowClassNameModal] = useState(false);
  const [classNameDraft, setClassNameDraft] = useState('');

  const [studentNameModal, setStudentNameModal] = useState({ open: false, index: null, value: '' });
  const [studentPointsModal, setStudentPointsModal] = useState({ open: false, index: null, value: '0' });
  const [studentPhotoModal, setStudentPhotoModal] = useState({ open: false, index: null, preview: null });
  const [studentPhotoSeed, setStudentPhotoSeed] = useState('');
  const [studentPhotoFile, setStudentPhotoFile] = useState(null);

  const openHomeworkModal = (idx = null) => {
    if (idx !== null) {
      const item = (data.items || [])[idx] || { title: '', type: 'quiz', link: '' };
      setHomeworkForm({
        title: item.title || '',
        type: item.type || 'quiz',
        link: item.link || ''
      });
    } else {
      setHomeworkForm({ title: '', type: 'quiz', link: '' });
    }
    setEditingHomeworkIndex(idx);
    setShowHomeworkModal(true);
  };

  const closeHomeworkModal = () => {
    setShowHomeworkModal(false);
    setHomeworkForm({ title: '', type: 'quiz', link: '' });
    setEditingHomeworkIndex(null);
  };

  const submitHomeworkForm = (e) => {
    e && e.preventDefault();
    const payload = {
      title: homeworkForm.title.trim(),
      type: homeworkForm.type || 'quiz',
      link: homeworkForm.link || '#',
    };
    if (!payload.title) {
      alert('Please enter a homework title');
      return;
    }
    updateData((d) => {
      const items = [...(d.items || [])];
      if (editingHomeworkIndex !== null) {
        items[editingHomeworkIndex] = payload;
      } else {
        items.push(payload);
      }
      return { ...d, items };
    });
    closeHomeworkModal();
  };

  const openWeekRangeModal = () => {
    setWeekRangeDraft(data.weekRange || '');
    setShowWeekModal(true);
  };

  const submitWeekRange = (e) => {
    e && e.preventDefault();
    const value = weekRangeDraft.trim();
    updateData((d) => ({ ...d, weekRange: value || d.weekRange || 'This week' }));
    setShowWeekModal(false);
  };

  const openAnnouncementModal = () => {
    setAnnouncementDraft(data.announcement || '');
    setShowAnnouncementModal(true);
  };

  const submitAnnouncement = (e) => {
    e && e.preventDefault();
    updateData((d) => ({ ...d, announcement: announcementDraft.trim() }));
    setShowAnnouncementModal(false);
  };

  const requestHomeworkRemoval = (idx) => {
    setHomeworkDeleteModal({ open: true, index: idx });
  };

  const submitHomeworkRemoval = (e) => {
    e && e.preventDefault();
    if (homeworkDeleteModal.index === null) return;
    setIsRemovingHomework(true);
    try {
      updateData((d) => ({
        ...d,
        items: (d.items || []).filter((_, i) => i !== homeworkDeleteModal.index)
      }));
    } finally {
      setIsRemovingHomework(false);
      setHomeworkDeleteModal({ open: false, index: null });
    }
  };

  const addStudent = ()=>{
    // open modal (handled by local state)
    setShowAddStudent(true);
  }

  // Modal state and form for adding a student
  const [showAddStudent, setShowAddStudent] = React.useState(false);
  const [newStudentName, setNewStudentName] = React.useState('');
  const [newStudentEmoji, setNewStudentEmoji] = React.useState('');
  const [newStudentPhoto, setNewStudentPhoto] = React.useState(null);
  const avatarPreview = useMemo(() => {
    if (newStudentPhoto) return newStudentPhoto;
    if (!newStudentName) return null;
    return avatarForName(newStudentName.trim() || "Student");
  }, [newStudentName, newStudentPhoto]);

  const resetStudentForm = () => {
    setShowAddStudent(false);
    setNewStudentName('');
    setNewStudentEmoji('');
    setNewStudentPhoto(null);
  };

  const handleStudentFile = (file) => {
    if (!file) {
      setNewStudentPhoto(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setNewStudentPhoto(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const submitAddStudent = async () => {
    const name = (newStudentName || '').trim();
    if (!name) return alert('Please enter a student name');
    const photo = newStudentPhoto || avatarForName(name);
    updateData(d=>({...d, students: [...(d.students || []), {name, emoji: newStudentEmoji || '🧑‍🎓', points:0, photo}]}));
    resetStudentForm();
  };

  const { isAdmin } = useAuth();

  const editClassName = () => {
    if (!isAdmin) return;
    setClassNameDraft(classInfo.name || '');
    setShowClassNameModal(true);
  };

  const submitClassName = async (e) => {
    e && e.preventDefault();
    if (!isAdmin) return;
    const nextName = (classNameDraft || '').trim();
    if (!nextName) return;
    if (!rtdb) {
      alert('RTDB chưa được cấu hình. Không thể đổi tên lớp.');
      return;
    }
    try {
      await rtdbSet(`/classes/${classId}/name`, nextName);
      setShowClassNameModal(false);
    } catch (err) {
      console.error('Failed to rename class', err);
      alert('Không thể đổi tên lớp. Vui lòng thử lại.');
    }
  };

  const openStudentPointsModal = (idx) => {
    const student = (data.students || [])[idx];
    setStudentPointsModal({ open: true, index: idx, value: String(student?.points ?? 0) });
  };

  const submitStudentPoints = (e) => {
    e && e.preventDefault();
    if (studentPointsModal.index === null) return;
    const newPoints = parseInt(studentPointsModal.value || '0', 10) || 0;
    updateData((d) => {
      const list = (d.students || []).map((s, i) => (i === studentPointsModal.index ? { ...s, points: newPoints } : s));
      return { ...d, students: list };
    });
    setStudentPointsModal({ open: false, index: null, value: '0' });
  };

  const openStudentNameModal = (idx) => {
    const student = (data.students || [])[idx];
    setStudentNameModal({ open: true, index: idx, value: student?.name || '' });
  };

  const submitStudentName = (e) => {
    e && e.preventDefault();
    if (studentNameModal.index === null) return;
    const newName = (studentNameModal.value || '').trim();
    if (!newName) return;
    updateData((d) => {
      const list = (d.students || []).map((s, i) => (i === studentNameModal.index ? { ...s, name: newName } : s));
      return { ...d, students: list };
    });
    setStudentNameModal({ open: false, index: null, value: '' });
  };

  const openStudentPhotoModal = (idx) => {
    const student = (data.students || [])[idx];
    if (!student) return;
    setStudentPhotoModal({ open: true, index: idx, preview: student.photo || avatarForName(student.name) });
    setStudentPhotoSeed(student.name || '');
    setStudentPhotoFile(null);
  };

  const closeStudentPhotoModal = () => {
    setStudentPhotoModal({ open: false, index: null, preview: null });
    setStudentPhotoSeed('');
    setStudentPhotoFile(null);
  };

  const updateStudentPhotoSeed = (value) => {
    setStudentPhotoSeed(value);
    const baseName = value.trim() || ((data.students || [])[studentPhotoModal.index ?? 0]?.name) || 'Student';
    setStudentPhotoFile(null);
    setStudentPhotoModal((prev) => ({ ...prev, preview: avatarForName(baseName) }));
  };

  const handleStudentPhotoFileEdit = (file) => {
    if (!file) {
      setStudentPhotoFile(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target.result;
      setStudentPhotoFile(base64);
      setStudentPhotoModal((prev) => ({ ...prev, preview: base64 }));
    };
    reader.readAsDataURL(file);
  };

  const submitStudentPhoto = (e) => {
    e && e.preventDefault();
    if (studentPhotoModal.index === null) return;
    const student = (data.students || [])[studentPhotoModal.index];
    if (!student) return;
    const photo = studentPhotoFile || avatarForName(studentPhotoSeed.trim() || student.name || 'Student');
    updateData((d) => ({
      ...d,
      students: (d.students || []).map((s, i) => (i === studentPhotoModal.index ? { ...s, photo } : s))
    }));
    closeStudentPhotoModal();
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <header className={`${classInfo.colorClass || 'bg-mint'} shadow-md`}>
        <div className="app-shell container-padding flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate('/')}
              className="flex w-fit items-center gap-2 text-sm font-semibold text-[#0c615c]"
            >
              <span aria-hidden="true">←</span>
              All Classes
            </button>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <span className="text-4xl sm:text-5xl">{classInfo.mascot || '🏫'}</span>
              <div>
                <h1 className="text-2xl font-bold sm:text-3xl">{classInfo.name}</h1>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-700">
                  <span>Admin tools available after login</span>
                  {isAdmin && (
                    <button
                      onClick={editClassName}
                      className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[#0c615c] shadow"
                    >
                      Edit name
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:justify-end">
            <AdminLogin />
          </div>
        </div>
      </header>

      <main className="app-shell container-padding pb-12 pt-6 lg:pt-10">
        {loading ? (
          <div className="py-16 text-center text-gray-500">Đang tải dữ liệu lớp...</div>
        ) : (
          <>
            {error && <div className="mb-4 text-center text-red-500">{error}</div>}
            <div className="grid gap-8 lg:grid-cols-3">
              <section className="space-y-6 lg:col-span-2">
                <Chalkboard title="This Week's Homework" subtitle={data.weekRange} isAdmin={isAdmin} onEditSubtitle={isAdmin ? openWeekRangeModal : undefined}>
                  <div className="space-y-3">
                    {(data.items || []).map((it, idx)=> (
                      <HomeworkItem
                        key={idx}
                        item={it}
                        isAdmin={isAdmin}
                        onEdit={isAdmin ? () => openHomeworkModal(idx) : undefined}
                        onRemove={isAdmin ? () => requestHomeworkRemoval(idx) : undefined}
                      />
                    ))}

                    {data.announcement && (
                      <div className="mt-4 rounded bg-white/10 p-3 text-sm leading-relaxed" title={data.announcement}>📣 {data.announcement}</div>
                    )}
                    {isAdmin && (
                      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                        <button onClick={() => openHomeworkModal()} className="w-full rounded bg-green-400 px-4 py-2 text-white shadow hover:bg-green-500 sm:w-auto">+ Add Homework</button>
                        <button onClick={openAnnouncementModal} className="w-full rounded bg-amber-400 px-4 py-2 text-foreground shadow hover:bg-amber-300 sm:w-auto">Edit Announcement</button>
                      </div>
                    )}
                  </div>
                </Chalkboard>
              </section>

              <aside className="space-y-6">
                <CorkBoard title="Class Dojo ⭐">
                  <div className="mb-3 flex items-center justify-between text-sm font-semibold text-gray-800">
                    <span>Students</span>
                    {isAdmin && (
                      <button onClick={addStudent} className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[#0c615c] shadow">
                        + Add
                      </button>
                    )}
                  </div>
                  {!isAdmin && (
                    <p className="mb-3 text-xs text-gray-600">Log in as admin to manage class roster.</p>
                  )}
                  <div
                    className="grid gap-3"
                    style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}
                  >
                    {(data.students || []).map((s,i)=> (
                      <StudentAvatar
                        key={s.id || i}
                        emoji={s.emoji}
                        name={s.name}
                        points={s.points}
                        photo={s.photo}
                        isAdmin={isAdmin}
                        onEditPoints={isAdmin ? () => openStudentPointsModal(i) : undefined}
                        onEditName={isAdmin ? () => openStudentNameModal(i) : undefined}
                        onEditPhoto={isAdmin ? () => openStudentPhotoModal(i) : undefined}
                      />
                    ))}
                  </div>
                </CorkBoard>

                <div className="rounded-2xl bg-white/90 p-4 shadow">
                  <h3 className="mb-2 text-lg font-semibold">Quick Tips</h3>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                    <li>Complete homework before next class</li>
                    <li>Tap items to open resources</li>
                    <li>Bookmark this page for easy access</li>
                  </ul>
                  <p className="mt-4 text-xs text-gray-500">Need to add a student? Use the button above in the Class Dojo panel.</p>
                </div>
              </aside>
            </div>
          </>
        )}
      </main>
      <Modal open={showHomeworkModal} title={editingHomeworkIndex !== null ? "Edit Homework" : "+ Add Homework"} onClose={closeHomeworkModal}>
        <form className="space-y-4" onSubmit={submitHomeworkForm}>
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              value={homeworkForm.title}
              onChange={(e)=>setHomeworkForm((prev)=>({...prev, title: e.target.value}))}
              className="mt-1 w-full rounded border p-2"
              placeholder="e.g. Quizizz - Listening"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">Type</label>
              <select
                value={homeworkForm.type}
                onChange={(e)=>setHomeworkForm((prev)=>({...prev, type: e.target.value}))}
                className="mt-1 w-full rounded border p-2"
              >
                <option value="quiz">Quiz / Quizizz</option>
                <option value="audio">Audio</option>
                <option value="worksheet">Worksheet</option>
                <option value="link">Link</option>
                <option value="image">Image</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Link / Resource</label>
              <input
                value={homeworkForm.link}
                onChange={(e)=>setHomeworkForm((prev)=>({...prev, link: e.target.value}))}
                className="mt-1 w-full rounded border p-2"
                placeholder="https://..."
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={closeHomeworkModal} className="rounded border px-4 py-2">Cancel</button>
            <button type="submit" className="rounded bg-green-500 px-4 py-2 text-white">
              {editingHomeworkIndex !== null ? 'Save changes' : 'Add homework'}
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        open={homeworkDeleteModal.open}
        title="Remove Homework"
        onClose={() => {
          if (isRemovingHomework) return;
          setHomeworkDeleteModal({ open: false, index: null });
        }}
      >
        <form className="space-y-4" onSubmit={submitHomeworkRemoval}>
          <p className="text-sm text-gray-700">
            Remove "
            {(data.items || [])[homeworkDeleteModal.index ?? -1]?.title || 'this homework'}
            " from the list? This action cannot be undone.
          </p>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => {
                if (isRemovingHomework) return;
                setHomeworkDeleteModal({ open: false, index: null });
              }}
              className="rounded border px-4 py-2"
              disabled={isRemovingHomework}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-red-600 px-4 py-2 text-white"
              disabled={isRemovingHomework}
            >
              {isRemovingHomework ? 'Removing...' : 'Remove'}
            </button>
          </div>
        </form>
      </Modal>

      <Modal open={showWeekModal} title="Edit Week Range" onClose={()=>setShowWeekModal(false)}>
        <form className="space-y-4" onSubmit={submitWeekRange}>
          <div>
            <label className="block text-sm font-medium">Week label</label>
            <input
              value={weekRangeDraft}
              onChange={(e)=>setWeekRangeDraft(e.target.value)}
              className="mt-1 w-full rounded border p-2"
              placeholder="e.g. 2 - 8 Dec"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={()=>setShowWeekModal(false)} className="rounded border px-4 py-2">Cancel</button>
            <button type="submit" className="rounded bg-amber-500 px-4 py-2 text-white">Save</button>
          </div>
        </form>
      </Modal>

      <Modal open={showAnnouncementModal} title="Class Announcement" onClose={()=>setShowAnnouncementModal(false)}>
        <form className="space-y-4" onSubmit={submitAnnouncement}>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              value={announcementDraft}
              onChange={(e)=>setAnnouncementDraft(e.target.value)}
              rows={4}
              className="mt-1 w-full rounded border p-2"
              placeholder="Write reminder or instructions..."
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={()=>setShowAnnouncementModal(false)} className="rounded border px-4 py-2">Cancel</button>
            <button type="submit" className="rounded bg-amber-600 px-4 py-2 text-white">Save</button>
          </div>
        </form>
      </Modal>

      <Modal open={showClassNameModal} title="Rename Class" onClose={()=>setShowClassNameModal(false)}>
        <form className="space-y-4" onSubmit={submitClassName}>
          <div>
            <label className="block text-sm font-medium">Class name</label>
            <input
              value={classNameDraft}
              onChange={(e)=>setClassNameDraft(e.target.value)}
              className="mt-1 w-full rounded border p-2"
              placeholder="e.g. Movers 3"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={()=>setShowClassNameModal(false)} className="rounded border px-4 py-2">Cancel</button>
            <button type="submit" className="rounded bg-[#0c615c] px-4 py-2 text-white">Save</button>
          </div>
        </form>
      </Modal>

      <Modal open={studentNameModal.open} title="Edit Student Name" onClose={()=>setStudentNameModal({ open: false, index: null, value: '' })}>
        <form className="space-y-4" onSubmit={submitStudentName}>
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              value={studentNameModal.value}
              onChange={(e)=>setStudentNameModal((prev)=>({ ...prev, value: e.target.value }))}
              className="mt-1 w-full rounded border p-2"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={()=>setStudentNameModal({ open: false, index: null, value: '' })} className="rounded border px-4 py-2">Cancel</button>
            <button type="submit" className="rounded bg-[#0c615c] px-4 py-2 text-white">Save</button>
          </div>
        </form>
      </Modal>

      <Modal open={studentPointsModal.open} title="Edit Student Points" onClose={()=>setStudentPointsModal({ open: false, index: null, value: '0' })}>
        <form className="space-y-4" onSubmit={submitStudentPoints}>
          <div>
            <label className="block text-sm font-medium">Points</label>
            <input
              type="number"
              value={studentPointsModal.value}
              onChange={(e)=>setStudentPointsModal((prev)=>({ ...prev, value: e.target.value }))}
              className="mt-1 w-full rounded border p-2"
              min={0}
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={()=>setStudentPointsModal({ open: false, index: null, value: '0' })} className="rounded border px-4 py-2">Cancel</button>
            <button type="submit" className="rounded bg-amber-500 px-4 py-2 text-white">Save</button>
          </div>
        </form>
      </Modal>

      <Modal open={studentPhotoModal.open} title="Update Student Photo" onClose={closeStudentPhotoModal}>
        <form className="space-y-4" onSubmit={submitStudentPhoto}>
          <div className="flex flex-col items-center gap-3">
            {studentPhotoModal.preview ? (
              <img src={studentPhotoModal.preview} alt="preview" className="h-28 w-28 rounded-full object-cover shadow" />
            ) : (
              <div className="h-28 w-28 rounded-full bg-gray-200" />
            )}
            <p className="text-xs text-gray-500">Choose a photo or generate one from a name/keyword.</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Upload photo</label>
            <input type="file" accept="image/*" onChange={(e)=>handleStudentPhotoFileEdit(e.target.files && e.target.files[0])} className="mt-1" />
          </div>
          <div>
            <label className="block text-sm font-medium">Or generate from name</label>
            <input
              value={studentPhotoSeed}
              onChange={(e)=>updateStudentPhotoSeed(e.target.value)}
              className="mt-1 w-full rounded border p-2"
              placeholder="e.g. Bella Fox"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={closeStudentPhotoModal} className="rounded border px-4 py-2">Cancel</button>
            <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Save photo</button>
          </div>
        </form>
      </Modal>

      <Modal open={showAddStudent} title="Add Student" onClose={()=>setShowAddStudent(false)}>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input value={newStudentName} onChange={(e)=>setNewStudentName(e.target.value)} className="w-full mt-1 p-2 border rounded" placeholder="Student name" />
          </div>
          <div>
            <label className="block text-sm font-medium">Emoji (optional)</label>
            <input value={newStudentEmoji} onChange={(e)=>setNewStudentEmoji(e.target.value)} className="w-full mt-1 p-2 border rounded" placeholder="e.g. 🧑‍🎓" />
          </div>
          <div>
            <label className="block text-sm font-medium">Photo (optional)</label>
            <input type="file" accept="image/*" onChange={(e)=>handleStudentFile(e.target.files && e.target.files[0])} className="mt-1" />
            <p className="text-xs text-gray-500">Nếu không chọn ảnh, hệ thống sẽ tạo avatar tự động.</p>
            {avatarPreview ? (
              <div className="mt-2">
                <img src={avatarPreview} alt="preview" className="w-28 h-28 rounded-full object-cover border" />
              </div>
            ) : (
              <div className="mt-2 text-xs text-gray-400">Nhập tên để xem avatar.</div>
            )}
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={()=>setShowAddStudent(false)} className="px-4 py-2 rounded border">Cancel</button>
            <button onClick={submitAddStudent} className="px-4 py-2 rounded bg-green-500 text-white">Add Student</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ClassPage;
