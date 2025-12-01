import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Chalkboard from "../components/Chalkboard";
import CorkBoard from "../components/CorkBoard";
import HomeworkItem from "../components/HomeworkItem";
import StudentAvatar from "../components/StudentAvatar";
import { classes, homeworkData } from "../data/classData";
import AdminLogin from "../components/AdminLogin";
import Modal from "../components/Modal";
import { useAuth } from "../auth/AuthProvider";

const ClassPage = ()=>{
  const { classId } = useParams();
  const navigate = useNavigate();
  // use classes from localStorage (keeps icons in sync with index page)
  const getStoredClasses = () => {
    try {
      const raw = localStorage.getItem('hb_classes');
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return classes;
  };

  const storedClasses = getStoredClasses();
  const classInfo = storedClasses.find(c => c.id === classId) || { name: 'Unknown', mascot: '🏫', colorClass: 'bg-white' };

  const [data, setData] = useState(() => {
    const stored = localStorage.getItem(`hw:${classId}`);
    if(stored) return JSON.parse(stored);
    return homeworkData[classId] || { weekRange: 'This week', items: [], students: [], announcement: '' };
  });

  useEffect(()=>{
    localStorage.setItem(`hw:${classId}`, JSON.stringify(data));
  },[data, classId]);

  const addHomework = ()=>{
    const title = prompt('Homework title (e.g. Quizizz - Listening)');
    if(!title) return;
    const type = prompt('Type (quiz/audio/worksheet/link/image)', 'quiz') || 'quiz';
    const link = prompt('Link (URL)') || '#';
    setData(d => ({...d, items: [...d.items, {title, type, link}]}));
  }

  const editWeekRange = () => {
    const r = prompt('Edit week range', data.weekRange || '') || data.weekRange;
    setData(d => ({...d, weekRange: r}));
  }

  const editHomework = (idx)=>{
    const item = data.items[idx];
    const title = prompt('Edit title', item.title) || item.title;
    const type = prompt('Type', item.type) || item.type;
    const link = prompt('Link', item.link) || item.link;
    setData(d => ({...d, items: d.items.map((it,i)=> i===idx?{title,type,link}:it)}));
  }

  const removeHomework = (idx)=>{
    if(!confirm('Remove this homework?')) return;
    setData(d=>({...d, items: d.items.filter((_,i)=>i!==idx)}));
  }

  const addStudent = ()=>{
    // open modal (handled by local state)
    setShowAddStudent(true);
  }

  // Modal state and form for adding a student
  const [showAddStudent, setShowAddStudent] = React.useState(false);
  const [newStudentName, setNewStudentName] = React.useState('');
  const [newStudentEmoji, setNewStudentEmoji] = React.useState('');
  const [newStudentFile, setNewStudentFile] = React.useState(null);
  const [newStudentPreview, setNewStudentPreview] = React.useState(null);

  const handleStudentFile = (file) => {
    if (!file) {
      setNewStudentFile(null);
      setNewStudentPreview(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setNewStudentPreview(e.target.result);
    };
    reader.readAsDataURL(file);
    setNewStudentFile(file);
  };

  const submitAddStudent = async () => {
    const name = (newStudentName || '').trim();
    if (!name) return alert('Please enter a student name');
    if (newStudentFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target.result;
        setData(d=>({...d, students: [...d.students, {name, emoji: newStudentEmoji || '🧑‍🎓', points:0, photo: dataUrl}]}));
        // reset
        setShowAddStudent(false);
        setNewStudentName(''); setNewStudentEmoji(''); setNewStudentFile(null); setNewStudentPreview(null);
      };
      reader.readAsDataURL(newStudentFile);
    } else {
      setData(d=>({...d, students: [...d.students, {name, emoji: newStudentEmoji || '🧑‍🎓', points:0}]}));
      setShowAddStudent(false);
      setNewStudentName(''); setNewStudentEmoji(''); setNewStudentFile(null); setNewStudentPreview(null);
    }
  };

  const editAnnouncement = ()=>{
    const a = prompt('Announcement text', data.announcement || '') || '';
    setData(d=>({...d, announcement: a}));
  }

  const { isAdmin } = useAuth();

  const editStudentPoints = (idx) => {
    const student = data.students[idx];
    const newPointsRaw = prompt('Set points for ' + student.name, String(student.points || 0));
    if (newPointsRaw === null) return; // cancelled
    const newPoints = parseInt(newPointsRaw || '0', 10) || 0;
    setData(d => {
      const copies = d.students.map((s,i) => i===idx ? {...s, points: newPoints} : s);
      return {...d, students: copies};
    });
  };

  const editStudentName = (idx) => {
    const student = data.students[idx];
    const newName = prompt('Edit name for ' + student.name, student.name);
    if (newName === null) return; // cancelled
    setData(d => {
      const copies = d.students.map((s,i) => i===idx ? {...s, name: newName} : s);
      return {...d, students: copies};
    });
  };

  const editStudentPhoto = (idx) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          const dataUrl = ev.target.result;
          setData(d => {
            const copies = d.students.map((s,i) => i===idx ? {...s, photo: dataUrl} : s);
            return {...d, students: copies};
          });
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
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
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Chalkboard title="This Week's Homework" subtitle={data.weekRange} isAdmin={isAdmin} onEditSubtitle={editWeekRange}>
              <div className="space-y-3">
                {data.items.map((it, idx)=> (
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
                {data.students.map((s,i)=> (
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
            {newStudentPreview && (
              <div className="mt-2">
                <img src={newStudentPreview} alt="preview" className="w-28 h-28 rounded-full object-cover border" />
              </div>
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
