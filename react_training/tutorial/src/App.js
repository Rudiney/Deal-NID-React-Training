import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import AppMenu from "./components/AppMenu";
import ScreenHeader from "./components/ScreenHeader";

import JogoDaVelhaScreen from "./screens/JogoDaVelha";
import TodoListScreen from "./screens/TodoList";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-full">
        <AppMenu />

        <main>
          <Routes>
            <Route path="/jogo_da_velha" element={<JogoDaVelhaScreen />} />
            <Route path="/todo_list" element={<TodoListScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
