import cn from "classnames";

export default function TodoListItem({ id, title, done, onToggle, onRemove }) {
  return (
    <div className="flex mb-4 items-center">
      <input
        type="checkbox"
        checked={done || false}
        className="mx-2 cursor-pointer"
        onChange={onToggle}
      />
      <p className={cn("w-full", { "line-through text-green": done })}>
        {title}
      </p>
      <button
        className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
        onClick={onRemove}
      >
        Remove
      </button>
    </div>
  );
}
