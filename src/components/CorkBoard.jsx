import React from "react";

const CorkBoard = ({ title, children }) => {
  return (
    <div className="relative mt-4">
      <div className="wood-frame p-2 rounded-xl shadow-playful">
        <div className="cork-texture rounded-lg p-4 min-h-[120px]">
          {title && <div className="flex items-center gap-2 mb-2"><div className="w-3 h-3 rounded-full bg-red-500"/> <h3 className="font-bold">{title}</h3></div>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default CorkBoard;
