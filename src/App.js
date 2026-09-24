import { useState, useCallback } from "react";
import Task from "./components/Task";
import AddTask from "./components/AddTask";

const App = () => {
  const [actions, setActions] = useState([]);
  const [taskId, setTaskId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const editingAction = actions.find((action) => action.id === taskId) || null;

  const handleThemeChange = () => {
    setDarkTheme((prev) => !prev);
  };

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleDelete = useCallback((id) => {
    setActions((prev) => prev.filter((action) => action.id !== id));
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
        setActions((prev) => [...prev, { desc, id: crypto.randomUUID() }]);
      }

      setShowModal(false);
      setTaskId(null);
    },
    [taskId],
  );

  return (
    <div
      className={`min-h-screen ${darkTheme ? "bg-gradient-to-br from-slate-950 to-slate-900" : "bg-gradient-to-br from-slate-50 to-slate-100"} p-4 font-sans antialiased`}
    >
      <div className="flex justify-end">
        <button
          onClick={handleThemeChange}
          className={`border px-4 py-2 gap-2 rounded-xl shadow-sm text-sm font-semibold flex items-center transition-colors ${darkTheme ? "border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`}
        >
          {darkTheme ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
          {darkTheme ? "Light" : "Dark"}
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div
          className={`w-full max-w-3xl min-h-[600px] backdrop-blur-sm rounded-2xl shadow-xl p-6 ${darkTheme ? "bg-slate-800/90 border border-slate-700" : "bg-white/90 border border-slate-200"}`}
        >
          <div
            className={`flex justify-between items-end mb-5 pb-3 ${darkTheme ? "border-b border-slate-700" : "border-b border-slate-200"}`}
          >
            <h1
              className={`text-4xl md:text-5xl font-bold tracking-tight drop-shadow-sm ${darkTheme ? "text-amber-400" : "text-amber-600"}`}
            >
              Action Plan
            </h1>
            <p
              className={`text-lg ${darkTheme ? "text-slate-300" : "text-slate-600"}`}
            >
              <span
                className={`font-bold text-2xl ${darkTheme ? "text-slate-100" : "text-slate-800"}`}
              >
                {actions.length}{" "}
              </span>
              Actions
            </p>
          </div>

          <div className="flex justify-end mb-5">
            <button
              className={`group flex items-center gap-2 text-sm font-semibold border px-4 py-2 rounded-xl shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1 ${darkTheme ? "bg-slate-700 text-slate-100 border-slate-600 hover:bg-slate-600 hover:border-amber-400 hover:text-amber-300 focus:ring-offset-slate-800" : "bg-white text-slate-700 border-slate-300 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700"}`}
              onClick={handleAddClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add Action
            </button>
          </div>

          <div
            className={`rounded-xl p-4 min-h-[300px] max-h-[600px] overflow-y-auto space-y-2.5 ${darkTheme ? "border border-slate-700 bg-slate-900/60" : "border border-slate-200 bg-slate-50/50"}`}
          >
            {actions.length > 0 ? (
              actions.map((act) => (
                <Task
                  action={act}
                  key={act.id}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  darkTheme={darkTheme}
                />
              ))
            ) : (
              <p
                className={`flex justify-center items-center h-full text-sm italic ${darkTheme ? "text-slate-500" : "text-slate-400"}`}
              >
                Please add actions
              </p>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <AddTask
          initialValue={editingAction?.desc ?? ""}
          handleCloseClick={handleCloseClick}
          handleSaveClick={handleSaveClick}
          darkTheme={darkTheme}
        />
      )}
    </div>
  );
};

export default App;
