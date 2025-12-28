import React from "react";

const Chalkboard = ({ title, subtitle, isAdmin = false, onEditSubtitle, children }) => {
  return (
    <div className="relative flex-1 flex flex-col">
      <div className="wood-frame p-3 rounded-2xl shadow-playful flex-1 flex flex-col">
        <div className="chalkboard-texture rounded-xl p-6 min-h-[220px] flex-1">
          {title && (
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold">📚 {title}</h2>
                {subtitle && (
                  <span className="rounded-full bg-white/15 px-3 py-1 text-sm font-semibold text-chalk flex items-center gap-1">
                    <span aria-hidden="true">🗓️</span>
                    {subtitle}
                  </span>
                )}
              </div>
              {isAdmin && onEditSubtitle && (
                <button onClick={onEditSubtitle} className="rounded-full bg-amber-400/90 px-4 py-1 text-sm font-semibold text-foreground shadow hover:bg-amber-300">
                  Edit range
                </button>
              )}
            </div>
          )}
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
