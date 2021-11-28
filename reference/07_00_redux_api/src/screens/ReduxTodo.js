import { useSelector, useDispatch } from "react-redux";
import { add, remove, toggle } from "../features/todos/todosSlice";

import Header from "../components/layout/Header";
import Content from "../components/layout/Content";

import NewTodoForm from "../components/Todo/NewTodoForm";
import TodoListItem from "../components/Todo/ListItem";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <Header title="My Todo APP" />
      <Content>
        <div className="w-full flex items-center justify-center">
          <div className="bg-white rounded shadow p-6 m-4 w-full">
            <div className="mb-4">
              <NewTodoForm
                placeholder="add a new todo..."
                onSubmit={(title) => dispatch(add({ title }))}
              />
            </div>
            <div>
              {todos.map((todo) => (
                <TodoListItem
                  key={todo.id}
                  {...todo}
                  onRemove={() => dispatch(remove({ todo }))}
                  onToggle={() => dispatch(toggle({ todo }))}
                />
              ))}
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
