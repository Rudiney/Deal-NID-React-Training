import { Link, useMatch } from "react-router-dom";

import cn from "classnames";

const menuItems = [
  { name: "Jogo da Velha", href: "tic_tac_toe" },
  { name: "Todo", href: "todo_list" },
];

export default function Menu() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center space-x-4">
          {menuItems.map((item) => (
            <MenuItem name={item.name} href={item.href} />
          ))}
        </div>
      </div>
    </nav>
  );
}

const MenuItem = ({ name, href }) => {
  const active = useMatch({ path: href });
  return (
    <Link
      key={name}
      to={href}
      className={cn(
        active ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "px-3 py-2 rounded-md text-sm font-medium"
      )}
    >
      {name}
    </Link>
  );
};
