import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./components/layout/Menu";

import { TodoProvider } from "./contexts/TodoContext";

import TicTacToe from "./screens/TicTacToe";
import Todo from "./screens/Todo";

export default function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <div className="min-h-full">
          <Menu />
          <Routes>
            <Route path="/tic_tac_toe" element={<TicTacToe />} />
            <Route path="/todo_list" element={<Todo />} />
          </Routes>
        </div>
      </TodoProvider>
    </BrowserRouter>
  );
}
