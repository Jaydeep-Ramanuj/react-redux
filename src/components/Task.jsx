import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, removeTask } from "../state/todo/todoSlice";

function Task({ name, completed, id }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="mt-5 flex items-center justify-between p-2">
        <div className="flex items-center justify-center gap-2">
          <input
            type="checkbox"
            className="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
checked:border-none checked:text-white hover:cursor-pointer  checked:bg-brand-500"
            name="weekly"
            onClick={() => {
              dispatch(completeTask(id));
            }}
          />
          <p className="text-base font-bold text-navy-700 ">{name}</p>
        </div>
        <div
          className="cursor-pointer text-red-400"
          onClick={() => {
            dispatch(removeTask(id));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Task;
