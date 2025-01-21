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
