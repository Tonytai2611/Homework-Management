import React from "react";

const CorkBoard = ({ title, children }) => {
  return (
    <div className="relative mt-4 flex-1 flex flex-col">
      <div className="wood-frame p-2 rounded-xl shadow-playful flex-1 flex flex-col">
        <div className="cork-texture rounded-lg p-4 min-h-[120px] flex-1">
          {title && <div className="flex items-center gap-2 mb-2"><div className="w-3 h-3 rounded-full bg-red-500" /> <h3 className="font-bold">{title}</h3></div>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default CorkBoard;
