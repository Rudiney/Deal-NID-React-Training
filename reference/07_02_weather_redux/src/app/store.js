import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";
import weatherReducer from "../features/weather/weatherSlice";

export default configureStore({
  reducer: {
    todos: todosReducer,
    weather: weatherReducer,
  },
});
