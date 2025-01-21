import { useDispatch, useSelector } from 'react-redux';
import Task from './Task';
import { addTask } from '../state/counter/todoSlice';
import { useState } from 'react';

function TodoApp() {
  // const todo = useSelector((state) => state.todo);
  const todo = useSelector((state) => state.todo);
  console.log(todo);

  const dispatch = useDispatch();

  const [input, setInput] = useState();

  return (
    <>
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your task"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="btn"
          onClick={() => {
            dispatch(addTask({ name: input, id: todo.taskCounter + 1 }));
            setInput('');
          }}
        >
          Add task
        </button>
      </div>

      <div className="flex flex-col justify-center items-center mt-10 ">
        <div className="relative flex flex-col w-[350px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3]  pb-7 p-[20px]">
          <div className="h-full w-full">
            {/* <div className="mt-5 flex items-center justify-between p-2">
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  className="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 undefined"
                  name="weekly"
                />
                <p className="text-base font-bold text-navy-700 dark:text-white">
                  Landing Page Design
                </p>
              </div>
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-navy-700 dark:text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
            </div> */}

            {todo.tasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                name={task.name}
                completed={task.completed}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoApp;
