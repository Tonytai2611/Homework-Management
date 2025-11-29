import React from "react";
import { useNavigate } from "react-router-dom";
import ClassCard from "../components/ClassCard";
import AdminLogin from "../components/AdminLogin";
import { classes } from "../data/classData";

const Index = ()=>{
  const navigate = useNavigate();
  return (
    <div className="min-h-screen px-6 py-12">
      <header className="text-center mb-8 relative">
        <div className="absolute right-6 top-0">
          <AdminLogin />
        </div>
        <div className="text-6xl">🏫</div>
        <h1 className="text-4xl font-extrabold">Choose Your Class</h1>
        <p className="text-gray-600 mt-2">Tap your child's class to see weekly homework</p>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {classes.map(c => (
          <ClassCard key={c.id} name={c.name} mascot={c.mascot} colorClass={c.colorClass} onClick={()=>navigate(`/class/${c.id}`)} />
        ))}
      </section>

      <footer className="text-center mt-8 text-sm text-gray-500">📌 Each class has a fixed link — bookmark it for easy access!</footer>
    </div>
  )
}

export default Index;
