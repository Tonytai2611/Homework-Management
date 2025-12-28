import React from "react";

const StudentAvatar = ({ emoji, name, points, photo, isAdmin = false, onEditPoints, onEditPhoto, onEditName, onDelete }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 relative transform transition hover:scale-105 hover:shadow-lg">
      <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10 flex items-center justify-center text-3xl transition-transform duration-200 hover:scale-110">
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="select-none">{emoji}</span>
        )}
      </div>
      <div className="text-sm font-semibold transition-colors duration-150">{name}</div>
      {points !== undefined && <div className="text-xs">⭐ {points}</div>}

      {isAdmin && (
        <div className="absolute -right-1 -top-1 flex flex-col gap-1">
          <button
            onClick={onEditPoints}
            className="bg-amber-400 rounded-full p-1 text-xs shadow hover:scale-110 transition"
            title="Edit points"
          >
            ✎
          </button>
          <button
            onClick={onEditName}
            className="bg-green-400 rounded-full p-1 text-xs shadow hover:scale-110 transition"
            title="Edit name"
          >
            ✏️
          </button>
          <button
            onClick={onEditPhoto}
            className="bg-blue-400 rounded-full p-1 text-xs shadow hover:scale-110 transition"
            title="Edit photo"
          >
            📷
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 rounded-full p-1 text-xs shadow hover:scale-110 transition"
            title="Delete student"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentAvatar;
