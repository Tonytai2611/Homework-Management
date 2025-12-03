import React from "react";

const ClassCard = ({ name, mascot, colorClass, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${colorClass} btn-class-card transform transition duration-200 hover:scale-105 hover:shadow-2xl active:translate-y-0.5`}
    >
      <div className="flex h-full flex-col items-center justify-center gap-2 sm:gap-3">
        <div className="text-5xl sm:text-6xl transform transition duration-200 hover:rotate-3">{mascot}</div>
        <div className="font-bold text-base sm:text-lg transition-colors duration-150 text-gray-800">{name}</div>
      </div>
    </button>
  );
};

export default ClassCard;
