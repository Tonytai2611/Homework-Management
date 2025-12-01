import React from "react";

const ClassCard = ({ name, mascot, colorClass, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${colorClass} btn-class-card transform transition duration-200 hover:scale-105 hover:shadow-2xl active:translate-y-0.5`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="text-6xl transform transition duration-200 hover:rotate-3">{mascot}</div>
        <div className="font-bold text-lg transition-colors duration-150 hover:text-gray-800">{name}</div>
      </div>
    </button>
  );
};

export default ClassCard;
