import { Link, useMatch } from "react-router-dom";

import cn from "classnames";
import { useSelector } from "react-redux";

import { useTodos } from "../../contexts/TodoContext";

export default function Menu() {
  const { todos } = useTodos();

  const notDoneTodos = todos.filter((t) => !t.done);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center space-x-4">
          <MenuItem name="Jogo da Velha" href="tic_tac_toe" />
          <MenuItem name="Todo List" href="todo_list" badge={notDoneTodos.length} />
          <ReduxTodoMenuItem />
        </div>
      </div>
    </nav>
  );
}

const MenuItem = ({ name, href, badge }) => {
  const active = useMatch({ path: href });
  return (
    <Link
      key={name}
      to={href}
      className={cn(
        "relative px-3 py-2 rounded-md text-sm font-medium",
        active ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
      )}
    >
      {name}
      {!!badge && (
        <span class="absolute -top-2 right-0 px-2 py-1 text-xs leading-none text-red-100 bg-red-600 rounded-full">
          {badge}
        </span>
      )}
    </Link>
  );
};

const ReduxTodoMenuItem = () => {
  const notDoneTodos = useSelector((state) => state.todos.filter((todo) => !todo.done));
  return <MenuItem name="Redux Todo" href="redux_todo" badge={notDoneTodos.length} />;
};
