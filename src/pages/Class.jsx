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

const ClassPage = () => {
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

  const [studentDeleteModal, setStudentDeleteModal] = useState({ open: false, index: null });
  const [isDeletingStudent, setIsDeletingStudent] = useState(false);

  const requestStudentDelete = (idx) => {
    setStudentDeleteModal({ open: true, index: idx });
  };

  const submitStudentDelete = (e) => {
    e && e.preventDefault();
    if (studentDeleteModal.index === null) return;
    setIsDeletingStudent(true);
    updateData((d) => ({
      ...d,
      students: (d.students || []).filter((_, i) => i !== studentDeleteModal.index)
    }));
    setIsDeletingStudent(false);
    setStudentDeleteModal({ open: false, index: null });
  };

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

  const addStudent = () => {
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
    // Reset file input to prevent photo persistence
    const fileInput = document.getElementById('studentPhotoUpload');
    if (fileInput) fileInput.value = '';
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
    updateData(d => ({ ...d, students: [...(d.students || []), { name, emoji: newStudentEmoji || '🧑‍🎓', points: 0, photo }] }));
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
    // If name changes, also change id and migrate data
    const newId = slugify(nextName);
    if (!newId || newId === classId) {
      // Just update name if id doesn't change
      try {
        await rtdbSet(`/classes/${classId}/name`, nextName);
        setShowClassNameModal(false);
      } catch (err) {
        console.error('Failed to rename class', err);
        alert('Không thể đổi tên lớp. Vui lòng thử lại.');
      }
      return;
    }
    try {
      // 1. Copy class info to new id
      const newClassInfo = { ...classInfo, name: nextName, id: newId };
      await rtdbSet(`/classes/${newId}`, newClassInfo);
      // 2. Copy homework data
      await rtdbSet(`/homework/${newId}`, data);
      // 3. Remove old class and homework
      await rtdbSet(`/classes/${classId}`, null);
      await rtdbSet(`/homework/${classId}`, null);
      setShowClassNameModal(false);
      // 4. Navigate to new link
      navigate(`/class/${newId}`);
    } catch (err) {
      console.error('Failed to migrate class id', err);
      alert('Không thể đổi tên lớp. Vui lòng thử lại.');
    }
  };
  function slugify(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

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
            <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
              <section className="space-y-6 lg:col-span-2 flex flex-col">
                <Chalkboard title="This Week's Homework" subtitle={data.weekRange} isAdmin={isAdmin} onEditSubtitle={isAdmin ? openWeekRangeModal : undefined}>
                  <div className="space-y-3">
                    {(data.items || []).map((it, idx) => (
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

              <aside className="space-y-6 flex flex-col">
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
                    {(data.students || []).map((s, i) => (
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
                        onDelete={isAdmin ? () => requestStudentDelete(i) : undefined}
                      />
                    ))}
                  </div>
                  <Modal
                    open={studentDeleteModal.open}
                    title="Delete Student"
                    onClose={() => {
                      if (isDeletingStudent) return;
                      setStudentDeleteModal({ open: false, index: null });
                    }}
                  >
                    <form className="space-y-4" onSubmit={submitStudentDelete}>
                      <p className="text-sm text-gray-700">
                        Remove "{(data.students || [])[studentDeleteModal.index ?? -1]?.name || 'this student'}" from the class? This action cannot be undone.
                      </p>
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setStudentDeleteModal({ open: false, index: null })}
                          className="rounded border px-4 py-2"
                          disabled={isDeletingStudent}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="rounded bg-red-600 px-4 py-2 text-white"
                          disabled={isDeletingStudent}
                        >
                          {isDeletingStudent ? 'Deleting...' : 'Delete'}
                        </button>
                      </div>
                    </form>
                  </Modal>
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
              onChange={(e) => setHomeworkForm((prev) => ({ ...prev, title: e.target.value }))}
              className="mt-1 w-full rounded border p-2"
              placeholder="e.g. Quizizz - Listening"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">Type</label>
              <select
                value={homeworkForm.type}
                onChange={(e) => setHomeworkForm((prev) => ({ ...prev, type: e.target.value }))}
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
                onChange={(e) => setHomeworkForm((prev) => ({ ...prev, link: e.target.value }))}
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

      <Modal open={showWeekModal} title="Edit Week Range" onClose={() => setShowWeekModal(false)}>
        <form className="space-y-4" onSubmit={submitWeekRange}>
          <div>
            <label className="block text-sm font-medium">Week label</label>
            <input
              value={weekRangeDraft}
              onChange={(e) => setWeekRangeDraft(e.target.value)}
              className="mt-1 w-full rounded border p-2"
              placeholder="e.g. 2 - 8 Dec"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setShowWeekModal(false)} className="rounded border px-4 py-2">Cancel</button>
            <button type="submit" className="rounded bg-amber-500 px-4 py-2 text-white">Save</button>
          </div>
        </form>
      </Modal>

      <Modal open={showAnnouncementModal} title="Class Announcement" onClose={() => setShowAnnouncementModal(false)}>
        <form className="space-y-4" onSubmit={submitAnnouncement}>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              value={announcementDraft}
              onChange={(e) => setAnnouncementDraft(e.target.value)}
              rows={4}
              className="mt-1 w-full rounded border p-2"
              placeholder="Write reminder or instructions..."
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setShowAnnouncementModal(false)} className="rounded border px-4 py-2">Cancel</button>
            <button type="submit" className="rounded bg-amber-600 px-4 py-2 text-white">Save</button>
          </div>
        </form>
      </Modal>

      <Modal open={showClassNameModal} title="Rename Class" onClose={() => setShowClassNameModal(false)}>
        <form className="space-y-4" onSubmit={submitClassName}>
          <div>
            <label className="block text-sm font-medium">Class name</label>
            <input
              value={classNameDraft}
              onChange={(e) => setClassNameDraft(e.target.value)}
              className="mt-1 w-full rounded border p-2"
              placeholder="e.g. Movers 3"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setShowClassNameModal(false)} className="rounded border px-4 py-2">Cancel</button>
            <button type="submit" className="rounded bg-[#0c615c] px-4 py-2 text-white">Save</button>
          </div>
        </form>
      </Modal>

      <Modal open={studentNameModal.open} title="Edit Student Name" onClose={() => setStudentNameModal({ open: false, index: null, value: '' })}>
        <form className="space-y-4" onSubmit={submitStudentName}>
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              value={studentNameModal.value}
              onChange={(e) => setStudentNameModal((prev) => ({ ...prev, value: e.target.value }))}
              className="mt-1 w-full rounded border p-2"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setStudentNameModal({ open: false, index: null, value: '' })} className="rounded border px-4 py-2">Cancel</button>
            <button type="submit" className="rounded bg-[#0c615c] px-4 py-2 text-white">Save</button>
          </div>
        </form>
      </Modal>

      <Modal open={studentPointsModal.open} title="Edit Student Points" onClose={() => setStudentPointsModal({ open: false, index: null, value: '0' })}>
        <form className="space-y-4" onSubmit={submitStudentPoints}>
          <div>
            <label className="block text-sm font-medium">Points</label>
            <input
              type="number"
              value={studentPointsModal.value}
              onChange={(e) => setStudentPointsModal((prev) => ({ ...prev, value: e.target.value }))}
              className="mt-1 w-full rounded border p-2"
              min={0}
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setStudentPointsModal({ open: false, index: null, value: '0' })} className="rounded border px-4 py-2">Cancel</button>
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
            <input type="file" accept="image/*" onChange={(e) => handleStudentPhotoFileEdit(e.target.files && e.target.files[0])} className="mt-1" />
          </div>
          <div>
            <label className="block text-sm font-medium">Or generate from name</label>
            <input
              value={studentPhotoSeed}
              onChange={(e) => updateStudentPhotoSeed(e.target.value)}
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

      <Modal open={showAddStudent} title="" onClose={resetStudentForm}>
        <div className="space-y-3">
          {/* Header with gradient */}
          <div className="text-center pb-2.5 border-b border-gray-200">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-1.5 shadow-lg">
              <span className="text-lg sm:text-xl">👨‍🎓</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-gray-800">Add New Student</h2>
            <p className="text-xs text-gray-500 mt-0.5">Fill in the student information below</p>
          </div>

          {/* Photo Upload Section */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Student Photo
            </label>
            <div
              className={`
                relative border-2 border-dashed rounded-lg p-3
                flex flex-col items-center justify-center text-center 
                cursor-pointer transition-all duration-300 min-h-[120px]
                ${avatarPreview
                  ? 'border-green-400 bg-green-50/50 hover:bg-green-50'
                  : 'border-gray-300 bg-gray-50/50 hover:bg-gray-100 hover:border-blue-400'
                }
              `}
              onClick={() => !avatarPreview && document.getElementById('studentPhotoUpload').click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files?.[0];
                if (file && file.type.startsWith('image/')) handleStudentFile(file);
              }}
            >
              {avatarPreview ? (
                <div className="flex flex-col items-center gap-1.5 w-full">
                  <div className="relative">
                    <img
                      src={avatarPreview}
                      alt="Student preview"
                      className="w-16 h-16 rounded-full object-cover shadow-lg ring-4 ring-green-200"
                    />
                  </div>
                  <p className="text-xs font-medium text-green-700">
                    ✓ Photo uploaded!
                  </p>

                  {/* Remove and Change Photo Buttons */}
                  <div className="flex gap-1.5 w-full">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setNewStudentPhoto(null);
                        const fileInput = document.getElementById('studentPhotoUpload');
                        if (fileInput) fileInput.value = '';
                      }}
                      className="flex-1 flex items-center justify-center gap-1 px-2 py-1 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition-colors duration-200"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Remove
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        document.getElementById('studentPhotoUpload').click();
                      }}
                      className="flex-1 flex items-center justify-center gap-1 px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors duration-200"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Change
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-1.5">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-full p-2 shadow-md">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-700">
                      Upload student photo
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Drag & drop or{" "}
                      <span className="text-blue-600 hover:text-blue-700 font-medium underline">
                        click to browse
                      </span>
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      PNG, JPG up to 4MB
                    </p>
                  </div>
                </div>
              )}

              <input
                type="file"
                id="studentPhotoUpload"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleStudentFile(e.target.files?.[0])}
              />
            </div>
          </div>

          {/* Name Input */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-gray-700">
              Student Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="text"
                value={newStudentName}
                onChange={(e) => setNewStudentName(e.target.value)}
                className="w-full rounded-lg border-2 border-gray-200 pl-8 pr-3 py-2 text-sm font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                placeholder="Enter student's full name"
              />
            </div>
          </div>

          {/* Emoji Input */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-gray-700">
              Emoji Badge (Optional)
            </label>
            <div className="relative">
              <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400">
                <span className="text-sm">😊</span>
              </div>
              <input
                type="text"
                value={newStudentEmoji}
                onChange={(e) => setNewStudentEmoji(e.target.value)}
                className="w-full rounded-lg border-2 border-gray-200 pl-8 pr-3 py-2 text-sm font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                placeholder="e.g. 🧑‍🎓 👨‍🎓 👩‍🎓"
              />
            </div>
            <p className="text-xs text-gray-500">Choose an emoji to represent this student</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2.5 border-t border-gray-200">
            <button
              onClick={resetStudentForm}
              className="flex-1 px-3 py-1.5 rounded-lg border-2 border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={submitAddStudent}
              className="flex-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
            >
              Add Student
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ClassPage;
