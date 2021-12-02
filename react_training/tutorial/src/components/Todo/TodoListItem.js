export default function TodoListItem({ todo, toggleTodo, removeTodo }) {
  return (
    <div key={todo.id} className="flex mb-4 items-center mx-4">
      <input
        type="checkbox"
        className="mr-2 cursor-pointer"
        checked={todo.done}
        onChange={() => toggleTodo(todo)}
      />
      <p className="w-full">{todo.title}</p>
      <button
        className="flex-no-shrink px-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-red-500 hover:border-red-500"
        onClick={() => removeTodo(todo)}
      >
        Remove
      </button>
    </div>
  );
}
