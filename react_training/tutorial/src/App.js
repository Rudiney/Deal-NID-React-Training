import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import AppMenu from "./components/AppMenu";
import ScreenHeader from "./components/ScreenHeader";

import JogoDaVelhaScreen from "./screens/JogoDaVelha";
import TodoListScreen from "./screens/TodoList";
import TodoListReduxScreen from "./screens/TodoListRedux";

import { TodoProvider } from "./contexts/TodoContext";

import store from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <TodoProvider>
        <BrowserRouter>
          <div className="min-h-full">
            <AppMenu />

            <main>
              <Routes>
                <Route path="/jogo_da_velha" element={<JogoDaVelhaScreen />} />
                <Route path="/todo_list" element={<TodoListScreen />} />
                <Route path="/todo_list_redux" element={<TodoListReduxScreen />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </TodoProvider>
    </Provider>
  );
}

export default App;
