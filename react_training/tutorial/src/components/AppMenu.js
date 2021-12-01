import { Link } from "react-router-dom";

export default function AppMenu() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mb-auto px-4 sm:px-6 lg:px-8">

        <div className="h-16 flex items-center space-x-4">
          <Link to="/jogo_da_velha" className="px-3 py-2 rounded-md text-sm font-medium text-white">
            Jogo da Velha
          </Link>


          <Link to="/todo_list" className="px-3 py-2 rounded-md text-sm font-medium text-white">
            Todo List
          </Link>
        </div>
      </div>
    </nav>
  );
}
