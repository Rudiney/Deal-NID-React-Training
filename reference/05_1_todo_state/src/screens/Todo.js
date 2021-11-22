import Header from "../components/Todo/Header";
import NewTodoForm from "../components/Todo/NewTodoForm";
import TodoListItem from "../components/Todo/ListItem";

export default function Todo() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-white rounded shadow p-6 m-4 w-full">
        <div className="mb-4">
          <Header title="My Todo APP" doneCount={1} totalCount={2} />

          <NewTodoForm
            placeholder="add a new todo..."
            onSubmit={(todo) => alert(`NewTodo: ${todo}`)}
          />
        </div>
        <div>
          <TodoListItem
            title="this is done"
            done
            onRemove={() => alert("Remove!")}
            onToggle={() => alert("Toggle")}
          />
          <TodoListItem
            title="this is NOT done"
            done={false}
            onRemove={() => alert("Remove!")}
            onToggle={() => alert("Toggle")}
          />
        </div>
      </div>
    </div>
  );
}
