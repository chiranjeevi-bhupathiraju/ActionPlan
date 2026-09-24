import { useState, useCallback } from "react";
import Task from "./components/Task";
import AddTask from "./components/AddTask";

const App = () => {
  const [actions, setActions] = useState([]);
  const [taskId, setTaskId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Current action being edited (or null for add mode)
  const editingAction = actions.find((a) => a.id === taskId) || null;

  const handleAddClick = useCallback(() => {
    setTaskId(null);
    setShowModal(true);
  }, []);

  const handleDelete = useCallback((id) => {
    setActions((prev) => prev.filter((act) => act.id !== id));
  }, []);

  const handleEdit = useCallback((id) => {
    setTaskId(id);
    setShowModal(true);
  }, []);

  const handleCloseClick = useCallback(() => {
    setShowModal(false);
    setTaskId(null);
  }, []);

  const handleSaveClick = useCallback(
    (desc) => {
      if (taskId) {
        setActions((prev) =>
          prev.map((action) =>
            action.id === taskId ? { ...action, desc } : action,
          ),
        );
      } else {
        setActions((prev) => [
          ...prev,
          { desc, id: crypto.randomUUID() },
        ]);
      }
      setShowModal(false);
      setTaskId(null);
    },
    [taskId],
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 font-sans antialiased">
      <div className="w-full max-w-3xl min-h-[600px] bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-xl p-6">
        <div className="flex justify-between items-end mb-5 pb-3 border-b border-slate-200">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-amber-600 drop-shadow-sm">
            Action Plan
          </h1>
          <p className="text-slate-600 text-lg">
            <span className="font-bold text-2xl text-slate-800">
              {actions.length}{" "}
            </span>
            Actions
          </p>
        </div>

        <div className="flex justify-end mb-5">
          <button
            className="group flex items-center gap-2 bg-white text-slate-700 text-sm font-semibold border border-slate-300 px-4 py-2 rounded-xl shadow-sm hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1"
            onClick={handleAddClick}
          >
            <span className="text-lg leading-none font-bold group-hover:scale-110 transition-transform">
              +
            </span>
            Add Action
          </button>
        </div>

        <div className="border border-slate-200 bg-slate-50/50 rounded-xl p-4 min-h-[300px] space-y-2.5">
          {actions.length > 0 ? (
            actions.map((act) => (
              <Task
                action={act}
                key={act.id}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ))
          ) : (
            <p className="flex justify-center items-center h-full text-slate-400 text-sm italic">
              Please add actions
            </p>
          )}
        </div>
      </div>

      {showModal && (
        <AddTask
          initialValue={editingAction?.desc ?? ""}
          handleCloseClick={handleCloseClick}
          handleSaveClick={handleSaveClick}
        />
      )}
    </div>
  );
};

export default App;