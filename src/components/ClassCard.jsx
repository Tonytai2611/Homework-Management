import React from "react";

const ClassCard = ({ name, mascot, colorClass, onClick }) => {
  return (
    <button onClick={onClick} className={`${colorClass} btn-class-card`}>
      <div className="flex flex-col items-center gap-3">
        <div className="text-6xl">{mascot}</div>
        <div className="font-bold text-lg">{name}</div>
      </div>
    </button>
  );
};

export default ClassCard;
