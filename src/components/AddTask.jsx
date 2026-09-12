import React from "react";

const AddTask = ({
  handleInputChange = () => {},
  handleSaveClick = () => {},
  handleCloseClick = () => {},
  inputValue = "",
  errors = {},
}) => {
  return (
    <div className="inset-0 fixed w-full bg-black bg-opacity-50 z-50">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col space-y-2 items-center bg-white p-5 w-[700px] rounded-md shadow-lg">
        <input
          type="text"
          onChange={handleInputChange}
          id="action"
          name="action"
          placeholder="please text here"
          value={inputValue}
          className="w-full border border-black text-sm h-10 rounded-sm focus:outline-none px-2"
        />
        {errors.action && (
          <p className="text-red-500 whitespace-nowrap">{errors.action}</p>
        )}
        <div className="flex gap-2 justify-end">
          <button
            className=" text-black border border-black text-sm font-semibold px-2 py-1 rounded-sm"
            onClick={() => handleCloseClick()}
          >
            Close
          </button>
          <button
            className=" text-black border border-black text-sm font-semibold px-2 py-1 rounded-sm"
            onClick={() => handleSaveClick()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
