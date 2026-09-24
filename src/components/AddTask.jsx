import React, { useState, memo, useRef, useEffect } from "react";

const AddTask = memo(
  ({
    initialValue = "",
    handleSaveClick = () => {},
    handleCloseClick = () => {},
  }) => {
    // ✅ input state is local — typing only re-renders AddTask
    const [inputValue, setInputValue] = useState(initialValue);
    const [error, setError] = useState("");
    const inputRef = useRef();

    useEffect(() => {
      inputRef.current?.focus();
    }, []);

    const onInputChange = (e) => {
      setError("");
      setInputValue(e.target.value);
    };

    const onSave = () => {
      if (inputValue.trim() === "") {
        setError("This field is required");
        return;
      }
      handleSaveClick(inputValue.trim());
    };

    return (
      <div className="fixed inset-0 w-full bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl border border-white/20 p-6 transition-all duration-200">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            Add / Edit Action
          </h2>

          <input
            type="text"
            ref={inputRef}
            onChange={onInputChange}
            id="action"
            name="action"
            placeholder="Enter action description..."
            value={inputValue}
            className="w-full border border-slate-300 text-slate-800 text-sm h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent px-4 bg-slate-50 transition-all duration-150"
          />
          {error && (
            <p className="text-rose-500 text-sm mt-2 flex items-center gap-1">
              {error}
            </p>
          )}
          <div className="flex gap-3 justify-end mt-6">
            <button
              className="border border-slate-300 bg-white text-slate-700 text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:bg-slate-100 hover:border-slate-400 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-slate-300"
              onClick={handleCloseClick}
            >
              Close
            </button>
            <button
              className="bg-amber-500 border border-amber-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:bg-amber-600 hover:border-amber-600 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1"
              onClick={onSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  },
);

export default AddTask;
