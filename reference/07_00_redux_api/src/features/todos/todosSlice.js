import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({
        id: new Date().getTime(),
        title: action.payload.title,
        done: false,
      });
    },
    remove: (state, action) => {
      const toRemove = action.payload.todo;
      return state.filter((todo) => todo.id !== toRemove.id);
    },
    toggle: (state, action) => {
      const toToggle = action.payload.todo;
      const todo = state.find((todo) => todo.id == toToggle.id);
      todo.done = !todo.done;
    },
  },
});

export const { add, remove, toggle } = todosSlice.actions;

export default todosSlice.reducer;
