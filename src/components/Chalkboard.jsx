import React from "react";

const Chalkboard = ({ title, children }) => {
  return (
    <div className="relative">
      <div className="wood-frame p-3 rounded-2xl shadow-playful">
        <div className="chalkboard-texture rounded-xl p-6 min-h-[220px]">
          {title && <h2 className="text-2xl font-bold mb-4">📚 {title}</h2>}
          {children}
        </div>
      </div>
      <div className="wood-frame h-4 mx-4 -mt-1 rounded-b-lg flex items-center justify-center gap-2 px-4">
        <div className="w-8 h-1.5 bg-chalk/80 rounded-full" />
        <div className="w-6 h-1.5 bg-secondary rounded-full" />
        <div className="w-5 h-1.5 bg-coral rounded-full" />
      </div>
    </div>
  );
};

export default Chalkboard;
