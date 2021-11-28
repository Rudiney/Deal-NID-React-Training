import { useState } from "react";

import { useTodos } from "../contexts/TodoContext";

import Header from "../components/layout/Header";
import Content from "../components/layout/Content";

import NewTodoForm from "../components/Todo/NewTodoForm";
import TodoListItem from "../components/Todo/ListItem";

export default function Todo() {
  const { todos, addTodo, removeTodo, togleTodo } = useTodos();

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
