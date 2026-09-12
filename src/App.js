import { useState } from "react";
import Task from "./components/Task";
import AddTask from "./components/AddTask";

const App = () => {
  const [actions, setActions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [taskId, setTaskId] = useState(0);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setErrors((prev) => ({ ...prev, action: "" }));
    setInputValue(value);
  };

  const handleDelete = (id) => {
    const filteredActions = actions.filter((act) => act.id !== id);
    setActions(filteredActions);
  };

  const handleEdit = (id) => {
    const action = actions.find((act) => act.id === id);
    setShowModal(true);

    if (action) {
      setInputValue(action.desc);
      setTaskId(action.id);
    }
  };

  const handleCloseClick = () => {
    setShowModal(false);
    setInputValue("");
    setErrors({});
    setTaskId(null);
  };

  const handleSaveClick = () => {
    if (inputValue.trim() === "") {
      setErrors((prev) => ({ ...prev, action: "required" }));
      return;
    }
    if (taskId) {
      setActions((prev) =>
        prev.map((action) =>
          action.id === taskId
            ? {
                ...action,
                desc: inputValue.trim(),
              }
            : action,
        ),
      );
    } else {
      const action = {
        desc: inputValue,
        id: crypto.randomUUID(),
      };
      setActions((prev) => [...prev, action]);
    }

    setInputValue("");
    handleCloseClick();
  };

  return (
    <div className="flex  justify-center items-center min-h-screen">
      <div className="w-[800px] min-h-[600px] border border-black rounded-lg p-5 m-2">
        <div className="flex  justify-between items-end mb-4 border p-2">
          {" "}
          <h1 className="text-5xl text-[#e7a45e] font-semibold ">
            Action Plan
          </h1>
          <p ><span className="font-bold text-xl">{actions.length} </span>Actions</p>
        </div>

        <div className="flex justify-end mb-2">
          {" "}
          <button
            className=" text-black text-sm border border-black h-10 font-semibold px-2 py-0.5 rounded-sm"
            onClick={handleAddClick}
          >
            Add Action
          </button>
        </div>

          <div className="border min-h-[300px] p-2 space-y-2">
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
              <p className="flex justify-center items-center h-full">
                please add actions
              </p>
            )}
        </div>
      </div>
      {showModal && (
        <AddTask
          handleInputChange={handleInputChange}
          handleCloseClick={handleCloseClick}
          handleSaveClick={handleSaveClick}
          inputValue={inputValue}
          errors={errors}
        />
      )}
    </div>
  );
};

export default App;
