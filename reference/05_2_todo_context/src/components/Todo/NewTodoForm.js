import { useState } from "react";

export default function NewTodoForm({ placeholder, onSubmit }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length) {
      onSubmit(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex mt-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder={placeholder}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-black hover:border-black"
        >
          Add
        </button>
      </div>
    </form>
  );
}
