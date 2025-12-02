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
  const fallbackClass = { name: 'Unknown', mascot: '🏫', colorClass: 'bg-white' };

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
      setClassInfo(val || fallbackClass);
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

  const addHomework = ()=>{
    const title = prompt('Homework title (e.g. Quizizz - Listening)');
    if(!title) return;
    const type = prompt('Type (quiz/audio/worksheet/link/image)', 'quiz') || 'quiz';
    const link = prompt('Link (URL)') || '#';
    updateData(d => ({...d, items: [...(d.items || []), {title, type, link}]}));
  }

  const editWeekRange = () => {
    const r = prompt('Edit week range', data.weekRange || '') || data.weekRange;
    updateData(d => ({...d, weekRange: r}));
  }

  const editHomework = (idx)=>{
    const item = data.items[idx];
    const title = prompt('Edit title', item.title) || item.title;
    const type = prompt('Type', item.type) || item.type;
    const link = prompt('Link', item.link) || item.link;
    updateData(d => ({...d, items: (d.items || []).map((it,i)=> i===idx?{title,type,link}:it)}));
  }

  const removeHomework = (idx)=>{
    if(!confirm('Remove this homework?')) return;
    updateData(d=>({...d, items: (d.items || []).filter((_,i)=>i!==idx)}));
  }

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

  const editAnnouncement = ()=>{
    const a = prompt('Announcement text', data.announcement || '') || '';
    updateData(d=>({...d, announcement: a}));
  }

  const { isAdmin } = useAuth();

  const editStudentPoints = (idx) => {
    const student = data.students[idx];
    const newPointsRaw = prompt('Set points for ' + student.name, String(student.points || 0));
    if (newPointsRaw === null) return; // cancelled
    const newPoints = parseInt(newPointsRaw || '0', 10) || 0;
    updateData(d => {
      const list = (d.students || []).map((s,i) => i===idx ? {...s, points: newPoints} : s);
      return {...d, students: list};
    });
  };

  const editStudentName = (idx) => {
    const student = data.students[idx];
    const newName = prompt('Edit name for ' + student.name, student.name);
    if (newName === null) return; // cancelled
    updateData(d => {
      const list = (d.students || []).map((s,i) => i===idx ? {...s, name: newName} : s);
      return {...d, students: list};
    });
  };

  const editStudentPhoto = (idx) => {
    const student = data.students[idx];
    const useLocal = confirm('OK để tải ảnh từ máy, Cancel để dùng avatar tự động');
    if (useLocal) {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          const base64 = ev.target.result;
          updateData(d => ({
            ...d,
            students: (d.students || []).map((s,i) => i===idx ? {...s, photo: base64} : s)
          }));
        };
        reader.readAsDataURL(file);
      };
      input.click();
    } else {
      const seed = prompt('Nhập tên/seed để tạo avatar mới', student.name || 'Student');
      if (seed === null) return;
      const photoUrl = avatarForName(seed.trim() || student.name || 'Student');
      updateData(d => ({
        ...d,
        students: (d.students || []).map((s,i) => i===idx ? {...s, photo: photoUrl} : s)
      }));
    }
  };

  return (
    <div className="min-h-screen">
      <header className={`${classInfo.colorClass} py-6 px-6 shadow-md`}> 
        <div className="flex items-center gap-4">
          <button onClick={()=>navigate('/')} className="px-3 py-1">← All Classes</button>
          <div className="text-5xl">{classInfo.mascot}</div>
          <h1 className="text-3xl font-bold flex-1">{classInfo.name}</h1>
          <div className="ml-auto">
            <AdminLogin />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {loading && <div className="text-center text-gray-500">Đang tải dữ liệu lớp...</div>}
        {error && <div className="text-center text-red-500 mb-4">{error}</div>}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Chalkboard title="This Week's Homework" subtitle={data.weekRange} isAdmin={isAdmin} onEditSubtitle={editWeekRange}>
              <div className="space-y-3">
                {(data.items || []).map((it, idx)=> (
                  <HomeworkItem
                    key={idx}
                    item={it}
                    isAdmin={isAdmin}
                    onEdit={isAdmin ? () => editHomework(idx) : undefined}
                    onRemove={isAdmin ? () => removeHomework(idx) : undefined}
                  />
                ))}

                {data.announcement && (
                  <div className="mt-4 p-2 bg-white/10 rounded text-sm truncate" title={data.announcement}>📣 {data.announcement}</div>
                )}
                {isAdmin && (
                  <div className="flex gap-2 mt-4">
                    <button onClick={addHomework} className="px-4 py-2 rounded bg-green-400 text-white">+ Add Homework</button>
                    <button onClick={editAnnouncement} className="px-4 py-2 rounded bg-amber-400">Edit Announcement</button>
                  </div>
                )}
              </div>
            </Chalkboard>
          </div>

          <aside>
            <CorkBoard title="Class Stars ⭐">
              <div className="grid grid-cols-2 gap-3">
                {(data.students || []).map((s,i)=> (
                  <StudentAvatar
                    key={i}
                    emoji={s.emoji}
                    name={s.name}
                    points={s.points}
                    photo={s.photo}
                    isAdmin={isAdmin}
                    onEditPoints={isAdmin ? () => editStudentPoints(i) : undefined}
                    onEditName={isAdmin ? () => editStudentName(i) : undefined}
                    onEditPhoto={isAdmin ? () => editStudentPhoto(i) : undefined}
                  />
                ))}
              </div>
            </CorkBoard>

            <div className="mt-4 bg-white/10 p-4 rounded">
              <h3 className="font-bold mb-2">Quick Tips</h3>
              <ul className="text-sm">
                <li>• Complete homework before next class</li>
                <li>• Click items to open resources</li>
                <li>• Bookmark this page for easy access</li>
              </ul>
              <div className="mt-4 flex gap-2">
                {isAdmin && (
                  <>
                    <button onClick={addStudent} className="px-3 py-2 rounded bg-blue-500 text-white shadow-lg hover:bg-blue-600">+ Add Student</button>
                  </>
                )}
                {!isAdmin && (
                  <div className="text-sm text-gray-500">Log in as admin to manage class</div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </main>
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
