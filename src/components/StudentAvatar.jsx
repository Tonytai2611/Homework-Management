import React from "react";

const StudentAvatar = ({ emoji, name, points }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5">
      <div className="text-3xl">{emoji}</div>
      <div className="text-sm font-semibold">{name}</div>
      {points !== undefined && <div className="text-xs">⭐ {points}</div>}
    </div>
  );
};

export default StudentAvatar;
