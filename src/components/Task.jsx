import React, { memo } from "react";

const Task = memo(
  ({
    action ,
    handleDelete = () => {},
    handleEdit = () => {},
    darkTheme = false,
  }) => {
    return (
      <div className="w-full flex flex-wrap sm:flex-nowrap gap-2 items-center group">
        <p className={`flex-1 border px-4 py-2.5 rounded-xl shadow-sm text-sm truncate ${darkTheme ? "border-slate-600 bg-slate-800 text-slate-100" : "border-slate-300 bg-white text-slate-800"}`}>
          {action.desc}
        </p>
        <div className="flex gap-2">
          <button
            className={`flex items-center gap-1 border rounded-xl font-medium px-3 py-2 text-sm shadow-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300 ${darkTheme ? "border-slate-600 bg-slate-700 text-slate-100 hover:bg-blue-950 hover:border-blue-700 hover:text-blue-300" : "border-slate-300 bg-white text-slate-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"}`}
            onClick={() => handleEdit(action.id)}
          >
            Edit
          </button>
          <button
            className={`flex items-center gap-1 border rounded-xl font-medium px-3 py-2 text-sm shadow-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-rose-300 ${darkTheme ? "border-slate-600 bg-slate-700 text-slate-100 hover:bg-rose-950 hover:border-rose-700 hover:text-rose-300" : "border-slate-300 bg-white text-slate-700 hover:bg-rose-50 hover:border-rose-300 hover:text-rose-700"}`}
            onClick={() => handleDelete(action.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  },
);

export default Task;
