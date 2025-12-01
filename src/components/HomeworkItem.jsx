import React from "react";

const iconFor = (type) => {
  switch(type){
    case 'quiz': return '📘';
    case 'audio': return '🎧';
    case 'worksheet': return '📝';
    case 'link': return '🔗';
    case 'image': return '🖼️';
    default: return '📚';
  }
}

const HomeworkItem = ({ item, onEdit, onRemove, isAdmin = false }) => {
  return (
    <div className="homework-item flex items-center justify-between transform transition duration-150 hover:scale-[1.02] hover:shadow-lg">
      <div className="flex items-center gap-4">
        <a href={item.link || '#'} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-chalk/20 flex items-center justify-center text-2xl hover:opacity-95 transform transition hover:scale-110" title={`Open ${item.title}`}>
          {iconFor(item.type)}
        </a>
        <div>
          <div className="font-semibold text-white">{item.title}</div>
          <div className="text-sm text-white/80">{item.type}</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <a href={item.link} target="_blank" rel="noreferrer" className="px-3 py-1 rounded bg-white/10 text-white hover:bg-white/20 transition">Open</a>
        {isAdmin && (
          <>
            <button onClick={onEdit} className="px-3 py-1 rounded bg-yellow-400 hover:brightness-95 transition">Edit</button>
            <button onClick={onRemove} className="px-3 py-1 rounded bg-red-400 text-white hover:brightness-90 transition">Remove</button>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeworkItem;
