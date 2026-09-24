import React, { memo } from "react";

const Task = memo(
  ({
    action ,
    handleDelete = () => {},
    handleEdit = () => {},
  }) => {
    return (
      <div className="w-full flex flex-wrap sm:flex-nowrap gap-2 items-center group">
        <p className="flex-1 border border-slate-300 bg-white text-slate-800 px-4 py-2.5 rounded-xl shadow-sm text-sm truncate">
          {action.desc}
        </p>
        <div className="flex gap-2">
          <button
            className="flex items-center gap-1 border border-slate-300 bg-white text-slate-700 rounded-xl font-medium px-3 py-2 text-sm shadow-sm hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => handleEdit(action.id)}
          >
            Edit
          </button>
          <button
            className="flex items-center gap-1 border border-slate-300 bg-white text-slate-700 rounded-xl font-medium px-3 py-2 text-sm shadow-sm hover:bg-rose-50 hover:border-rose-300 hover:text-rose-700 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-rose-300"
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
