import { useContext } from "react";
import { Link } from "react-router-dom";

import { useTodos } from "../contexts/TodoContext";
import { useSelector } from "react-redux";

export default function AppMenu() {
  const { todos, addNewTodo } = useTodos();

  const reduxTodos = useSelector((state) => state.todos.allTodos);

  const notDoneTodos = todos.filter((todo) => !todo.done);

  const createFakeTodo = () => {
    addNewTodo("Criado pelo Header");
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mb-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center space-x-4">
          <Link to="/jogo_da_velha" className="px-3 py-2 rounded-md text-sm font-medium text-white">
            Jogo da Velha
          </Link>

          <Link to="/todo_list" className="px-3 py-2 rounded-md text-sm font-medium text-white">
            Todo List ({notDoneTodos.length}/{todos.length})
          </Link>

          <button className="text-white" onClick={createFakeTodo}>
            Criar
          </button>

          <Link to="/todo_list_redux" className="px-3 py-2 rounded-md text-sm font-medium text-white">
            Todo List em Redux (XX/{reduxTodos.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}
