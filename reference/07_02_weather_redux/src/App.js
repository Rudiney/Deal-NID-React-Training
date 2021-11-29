import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./app/store";

import Menu from "./components/layout/Menu";

import { TodoProvider } from "./contexts/TodoContext";

import TicTacToe from "./screens/TicTacToe";
import Todo from "./screens/Todo";
import ReduxTodo from "./screens/ReduxTodo";
import WeatherScreen from "./screens/Weather";
import WeatherHooks from "./screens/WeatherHooks";
import WeatherRedux from "./screens/WeatherRedux";

export default function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <Provider store={store}>
          <div className="min-h-full">
            <Menu />
            <Routes>
              <Route path="/tic_tac_toe" element={<TicTacToe />} />
              <Route path="/todo_list" element={<Todo />} />
              <Route path="/redux_todo" element={<ReduxTodo />} />
              <Route path="/weather" element={<WeatherScreen />} />
              <Route path="/weather_hooks" element={<WeatherHooks />} />
              <Route path="/weather_redux" element={<WeatherRedux />} />
            </Routes>
          </div>
        </Provider>
      </TodoProvider>
    </BrowserRouter>
  );
}
