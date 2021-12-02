import { configureStore } from "@reduxjs/toolkit";

import TodosReducer from "../features/todos/todosSlice";

export default configureStore({
  reducer: {
    todos: TodosReducer,
  },
});
