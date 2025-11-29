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
    <div className="homework-item flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-chalk/20 flex items-center justify-center text-2xl">{iconFor(item.type)}</div>
        <div>
          <div className="font-semibold text-white">{item.title}</div>
          <div className="text-sm text-white/80">{item.type}</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <a href={item.link} target="_blank" rel="noreferrer" className="px-3 py-1 rounded bg-white/10 text-white">Open</a>
        {isAdmin && (
          <>
            <button onClick={onEdit} className="px-3 py-1 rounded bg-yellow-400">Edit</button>
            <button onClick={onRemove} className="px-3 py-1 rounded bg-red-400 text-white">Remove</button>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeworkItem;
