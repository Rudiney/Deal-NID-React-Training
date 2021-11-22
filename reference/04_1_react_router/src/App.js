import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./components/layout/Menu";
import TicTacToe from "./screens/TicTacToe";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-full">
        <Menu />
        <Routes>
          <Route path="/tic_tac_toe" element={<TicTacToe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
