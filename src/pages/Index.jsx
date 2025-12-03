import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClassCard from "../components/ClassCard";
import AdminLogin from "../components/AdminLogin";
import Modal from "../components/Modal";
import logo from "../images/littlebuddies.png";
import { classes as initialClasses } from "../data/classData";
import { useAuth } from "../auth/AuthProvider";
import { rtdb, rtdbSet, rtdbSubscribe } from "../firebase";
import { deriveClassColor, DEFAULT_CLASS_COLOR } from "../utils/classColors";

function slugify(name){
  return name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
}

const Index = ()=>{
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const [classes, setClasses] = useState(() => Array.isArray(initialClasses) ? initialClasses : []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showClassModal, setShowClassModal] = useState(false);
  const [classForm, setClassForm] = useState({ name: '', mascot: '' });
  const [editingClassId, setEditingClassId] = useState(null);
  const [deleteModal, setDeleteModal] = useState({ open: false, id: null, name: '' });
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!rtdb) {
      setClasses(initialClasses);
      setError('Firebase RTDB chưa được cấu hình. Đang dùng dữ liệu mẫu.');
      setLoading(false);
      return;
    }

    const normalizeClass = (id, data = {}) => ({
      id,
      name: data.name || id || 'Untitled class',
      mascot: data.mascot || '🏫',
      colorClass: deriveClassColor(id, data.colorClass, DEFAULT_CLASS_COLOR),
      createdAt: data.createdAt || 0,
    });

    const unsubscribe = rtdbSubscribe('/classes', (val) => {
      if (!val) {
        setClasses([]);
      } else {
        const result = Object.entries(val)
          .filter(([_, payload]) => Boolean(payload))
          .map(([id, payload]) => normalizeClass(id, payload))
          .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        setClasses(result);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);

  const openClassModal = (cls = null) => {
    setEditingClassId(cls?.id || null);
    setClassForm({
      name: cls?.name || '',
      mascot: cls?.mascot || ''
    });
    setShowClassModal(true);
  };

  const closeClassModal = () => {
    setShowClassModal(false);
    setEditingClassId(null);
    setClassForm({ name: '', mascot: '' });
  };

  const pickMascot = (currentId = null) => {
    const pool = ['🦊','🐸','🦉','🐼','🐰','🦁','🐨','🐵','🐶','🐱','🐯','🦄','🐷','🐻','🐝'];
    const used = new Set((classes || []).filter(cls => cls.id !== currentId).map(x => x.mascot));
    const available = pool.filter(p => !used.has(p));
    return available.length ? available[Math.floor(Math.random()*available.length)] : pool[Math.floor(Math.random()*pool.length)];
  };

  const submitClassForm = async (e) => {
    e && e.preventDefault();
    const name = (classForm.name || '').trim();
    if (!name) {
      alert('Please enter a class name');
      return;
    }
    if (!rtdb) {
      alert('RTDB chưa được cấu hình. Không thể lưu lớp.');
      return;
    }
    let mascot = (classForm.mascot || '').trim();
    if (!mascot) {
      mascot = pickMascot(editingClassId);
    }
    try {
      if (editingClassId) {
        const existing = (classes || []).find((c) => c.id === editingClassId) || {};
        await rtdbSet(`/classes/${editingClassId}`, {
          ...existing,
          name,
          mascot,
        });
      } else {
        const id = slugify(name) || `class-${Date.now()}`;
        const colorClass = deriveClassColor(id, null, DEFAULT_CLASS_COLOR);
        const newClass = { id, name, mascot, colorClass, createdAt: Date.now() };
        await rtdbSet(`/classes/${id}`, newClass);
      }
      closeClassModal();
    } catch (err) {
      console.error('Failed to save class', err);
      alert('Không thể lưu lớp. Vui lòng thử lại.');
      setError('Không thể lưu lớp.');
    }
  };

  const renderContent = () => {
    if (loading) return <div className="text-center text-gray-500 py-14">Đang tải lớp học...</div>;
    if (error) return <div className="text-center text-red-500 py-14">{error}</div>;

    return (
      <>
        <div
          className="grid gap-4 sm:gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}
        >
          {(Array.isArray(classes) ? classes : []).map((c) => (
            <div key={c.id} className="relative h-full">
              <ClassCard
                name={c.name}
                mascot={c.mascot}
                colorClass={c.colorClass}
                onClick={() => navigate(`/class/${c.id}`)}
              />
              {isAdmin && (
                <>
                  <button
                    onClick={() => openClassModal(c)}
                    className="absolute top-3 left-3 rounded-full bg-white/90 p-1 text-xs font-semibold text-[#0c615c] shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c615c]"
                    title="Rename class"
                  >
                    ✎
                  </button>
                  <button
                    onClick={() => setDeleteModal({ open: true, id: c.id, name: c.name })}
                    className="absolute top-3 right-3 rounded-full bg-red-500 p-1.5 text-white shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                    title="Delete class"
                  >
                    ✕
                  </button>
                </>
              )}
            </div>
          ))}
          {isAdmin && (
            <button
              onClick={() => openClassModal()}
              className="flex h-full min-h-[160px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#0c615c] bg-white/70 px-4 text-base font-semibold text-[#0c615c] shadow-inner hover:bg-white"
            >
              + Add Class
            </button>
          )}
        </div>

        <p className="mt-10 flex items-center justify-center gap-2 text-xs text-gray-600 sm:text-sm">
          <span role="img" aria-label="pin">📌</span>
          Each class has a fixed link — bookmark it for easy access!
        </p>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="app-shell">
        <header className="container-padding flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <img src={logo} alt="Little Buddies" className="mx-auto h-20 w-20 sm:mx-0" />
            <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">Choose Your Class</h1>
            <p className="text-base text-gray-600 sm:text-lg">Tap your child&apos;s class to see weekly homework</p>
          </div>
          <div className="flex justify-center sm:justify-end">
            <AdminLogin />
          </div>
        </header>

        <main className="container-padding pb-12">{renderContent()}</main>
      </div>

      <Modal
        open={showClassModal}
        title={editingClassId ? 'Rename Class' : '+ Add Class'}
        onClose={closeClassModal}
      >
        <form className="space-y-4" onSubmit={submitClassForm}>
          <div>
            <label className="block text-sm font-medium">Class name</label>
            <input
              value={classForm.name}
              onChange={(e)=>setClassForm((prev)=>({ ...prev, name: e.target.value }))}
              className="mt-1 w-full rounded border p-2"
              placeholder="e.g. Movers 3"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Mascot emoji</label>
            <input
              value={classForm.mascot}
              onChange={(e)=>setClassForm((prev)=>({ ...prev, mascot: e.target.value }))}
              className="mt-1 w-full rounded border p-2"
              placeholder="🦊"
              maxLength={4}
            />
            <p className="mt-1 text-xs text-gray-500">Leave blank to auto-pick a cute emoji.</p>
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={closeClassModal} className="rounded border px-4 py-2">Cancel</button>
            <button type="submit" className="rounded bg-[#0c615c] px-4 py-2 text-white">
              {editingClassId ? 'Save changes' : 'Create class'}
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        open={deleteModal.open}
        title="Delete Class"
        onClose={() => {
          if (isDeleting) return;
          setDeleteModal({ open: false, id: null, name: '' });
        }}
      >
        <div className="space-y-4">
          <p className="text-sm text-gray-700">
            This will remove <span className="font-semibold">{deleteModal.name}</span> and all of its homework data.
            This action cannot be undone.
          </p>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setDeleteModal({ open: false, id: null, name: '' })}
              className="rounded border px-4 py-2"
              disabled={isDeleting}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={async () => {
                if (!deleteModal.id) return;
                if (!rtdb) {
                  alert('RTDB chưa được cấu hình. Không thể xóa lớp.');
                  return;
                }
                try {
                  setIsDeleting(true);
                  await Promise.all([
                    rtdbSet(`/classes/${deleteModal.id}`, null),
                    rtdbSet(`/homework/${deleteModal.id}`, null)
                  ]);
                  setDeleteModal({ open: false, id: null, name: '' });
                } catch (err) {
                  console.error('Failed to delete class', err);
                  alert('Không thể xóa lớp. Vui lòng thử lại.');
                } finally {
                  setIsDeleting(false);
                }
              }}
              className="rounded bg-red-600 px-4 py-2 text-white"
              disabled={isDeleting}
            >
              {isDeleting ? 'Deleting...' : 'Delete' }
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Index;
