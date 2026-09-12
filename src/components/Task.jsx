import React from "react";

const Task = ({
  action = { desc: "", id: 0 },
  handleDelete = () => {},
  handleEdit = () => {},
}) => {
  return (
    <div className="w-full flex gap-1">
      <p className=" border border-black text-black w-full px-2 py-1 rounded-sm ">
        {action.desc}
      </p>
      <button
        className="border border-black text-black rounded-sm font-semibold px-2 py-1"
        onClick={()=>handleEdit(action.id)}
      >
        Edit
      </button>
      <button
        className="border border-black text-black font-semibold rounded-sm px-2 py-1"
        onClick={()=>handleDelete(action.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
