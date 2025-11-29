import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Chalkboard from "../components/Chalkboard";
import CorkBoard from "../components/CorkBoard";
import HomeworkItem from "../components/HomeworkItem";
import StudentAvatar from "../components/StudentAvatar";
import { classes, homeworkData } from "../data/classData";
import AdminLogin from "../components/AdminLogin";
import { useAuth } from "../auth/AuthProvider";

const ClassPage = ()=>{
  const { classId } = useParams();
  const navigate = useNavigate();
  const classInfo = classes.find(c => c.id === classId) || { name: 'Unknown', mascot: '🏫', colorClass: 'bg-white' };

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
    const name = prompt('Student name');
    if(!name) return;
    const emoji = prompt('Emoji/avatar', '🧑‍🎓') || '🧑‍🎓';
    setData(d=>({...d, students: [...d.students, {name, emoji, points:0}]}));
  }

  const editAnnouncement = ()=>{
    const a = prompt('Announcement text', data.announcement || '') || '';
    setData(d=>({...d, announcement: a}));
  }

  const { isAdmin } = useAuth();

  return (
    <div className="min-h-screen">
      <header className={`${classInfo.colorClass} py-6 px-6 shadow-md`}> 
        <div className="flex items-center gap-4">
          <button onClick={()=>navigate('/')} className="px-3 py-1">← All Classes</button>
          <div className="text-5xl">{classInfo.mascot}</div>
          <div>
            <h1 className="text-3xl font-extrabold">{classInfo.name}</h1>
            <div className="text-sm">📅 Homework: {data.weekRange}</div>
          </div>
          <div className="ml-auto">
            <AdminLogin />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Chalkboard title="This Week's Homework">
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

                {isAdmin && (
                  <div className="flex gap-2 mt-4">
                    <button onClick={addHomework} className="px-4 py-2 rounded bg-green-400 text-white">+ Add Homework</button>
                    <button onClick={editAnnouncement} className="px-4 py-2 rounded bg-amber-400">Edit Announcement</button>
                  </div>
                )}

                {data.announcement && <div className="mt-4 p-3 bg-white/10 rounded">📣 {data.announcement}</div>}
              </div>
            </Chalkboard>
          </div>

          <aside>
            <CorkBoard title="Class Stars ⭐">
              <div className="grid grid-cols-2 gap-3">
                {data.students.map((s,i)=> <StudentAvatar key={i} emoji={s.emoji} name={s.name} points={s.points} />)}
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
                    <button onClick={addStudent} className="px-3 py-1 rounded bg-blue-400 text-white">+ Add Student</button>
                    <button onClick={()=>{localStorage.removeItem(`hw:${classId}`); alert('Local data reset')}} className="px-3 py-1 rounded bg-red-400 text-white">Reset Data</button>
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
    </div>
  );
}

export default ClassPage;
