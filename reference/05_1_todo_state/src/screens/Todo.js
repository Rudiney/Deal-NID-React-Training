import { useState } from "react";

import Header from "../components/layout/Header";
import Content from "../components/layout/Content";

import NewTodoForm from "../components/Todo/NewTodoForm";
import TodoListItem from "../components/Todo/ListItem";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title,
        done: false,
      },
    ]);
  };

  const removeTodo = (toRemove) => {
    const newTodos = todos.filter((todo) => todo.id !== toRemove.id);
    setTodos(newTodos);
  };

  const togleTodo = (toToggle) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === toToggle.id);
    newTodos[index] = { ...toToggle, done: !toToggle.done };
    setTodos(newTodos);
  };

  return (
    <>
      <Header title="My Todo APP" />
      <Content>
        <div className="w-full flex items-center justify-center">
          <div className="bg-white rounded shadow p-6 m-4 w-full">
            <div className="mb-4">
              <NewTodoForm placeholder="add a new todo..." onSubmit={addTodo} />
            </div>
            <div>
              {todos.map((todo) => (
                <TodoListItem
                  key={todo.id}
                  {...todo}
                  onRemove={() => removeTodo(todo)}
                  onToggle={() => togleTodo(todo)}
                />
              ))}
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
