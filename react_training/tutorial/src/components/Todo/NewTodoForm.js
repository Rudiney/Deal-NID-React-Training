import { useState } from "react";

export default function NewTodoForm({ onSubmit }) {
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodoTitle.length > 1) {
      onSubmit(newTodoTitle);
      setNewTodoTitle('')
    }
  };

  return (
    <form className="p-4">
      <div className="flex">
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          value={newTodoTitle}
          onChange={(event) => setNewTodoTitle(event.target.value)}
        />
        <button
          type="submit"
          className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-black hover:border-black"
          onClick={handleSubmit}
        >
          ADD
        </button>
      </div>
    </form>
  );
}
