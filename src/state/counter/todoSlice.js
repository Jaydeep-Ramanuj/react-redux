import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  taskCounter: 0,
  tasks: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: action.payload.id,
        name: action.payload.name,
        completed: false,
        createdTime: Date.now(),
      });
      state.taskCounter += 1;
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id != action.payload);
    },
    completeTask: (state, action) => {
      state.tasks.forEach((task) => {
        console.log('payload id:', action.payload);
        if (task.id == action.payload) task.completed = !task.completed;
      });
    },
  },
});

export const { addTask, removeTask, completeTask } = todoSlice.actions;

export default todoSlice.reducer;
