import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClassCard from "../components/ClassCard";
import AdminLogin from "../components/AdminLogin";
import logo from "../images/littlebuddies.png";
import { classes as initialClasses } from "../data/classData";
import { useAuth } from "../auth/AuthProvider";

function slugify(name){
  return name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
}

const Index = ()=>{
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const [classes, setClasses] = useState(() => {
    try {
      const raw = localStorage.getItem('hb_classes');
      if(raw) return JSON.parse(raw);
    } catch(e){}
    return initialClasses;
  });

  useEffect(()=>{
    try{ localStorage.setItem('hb_classes', JSON.stringify(classes)); }catch(e){}
  },[classes]);

  const addClass = async ()=>{
    const name = prompt('Class name (e.g. Movers 3)');
    if(!name) return;
    let mascot = prompt('Mascot emoji (e.g. 🦊) — leave blank for random') || '';
    // pick a random mascot that is not already used to avoid duplicates
    if(!mascot) {
      const pool = ['🦊','🐸','🦉','🐼','🐰','🦁','🐨','🐵','🐶','🐱','🐯','🦄','🐷','🐻','🐝'];
      const used = new Set(classes.map(x => x.mascot));
      const available = pool.filter(p => !used.has(p));
      mascot = (available.length ? available[Math.floor(Math.random()*available.length)] : pool[Math.floor(Math.random()*pool.length)]);
    }
    const id = slugify(name) || `class-${Date.now()}`;
    const colorClass = 'bg-mint';
    const newClass = { id, name, mascot, colorClass };
    setClasses(c => [...c, newClass]);
  }

  return (
    <div className="min-h-screen px-6 py-12">
      <header className="text-center mb-8 relative">
        <div className="absolute right-6 top-0">
          <AdminLogin />
        </div>
        <div className="mx-auto w-20 h-20">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>
        <h1 className="text-4xl font-extrabold">Choose Your Class</h1>
        <p className="text-gray-600 mt-2">Tap your child's class to see weekly homework</p>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {classes.map(c => (
          <div key={c.id} className="relative">
            <ClassCard name={c.name} mascot={c.mascot} colorClass={c.colorClass} onClick={()=>navigate(`/class/${c.id}`)} />
            {isAdmin && (
              <button
                onClick={() => {
                  if (!confirm(`Delete class ${c.name}?`)) return;
                  setClasses(list => {
                    const next = list.filter(x => x.id !== c.id);
                    try { localStorage.setItem('hb_classes', JSON.stringify(next)); } catch(e){}
                    // also remove related homework entry if exists
                    try { localStorage.removeItem(`hw:${c.id}`); } catch(e){}
                    return next;
                  });
                }}
                className="absolute top-2 right-2 bg-red-400 text-white rounded-full p-1 shadow"
                title="Delete class"
              >
                ✕
              </button>
            )}
          </div>
        ))}
        {isAdmin && (
          <div className="flex items-center justify-center">
            <button onClick={addClass} className="px-4 py-6 rounded-2xl bg-green-400 text-white">+ Add Class</button>
          </div>
        )}
      </section>

      <footer className="text-center mt-8 text-sm text-gray-500">📌 Each class has a fixed link — bookmark it for easy access!</footer>
    </div>
  )
}

export default Index;
