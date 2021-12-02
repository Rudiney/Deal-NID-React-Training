import { useState, useContext } from "react";
import ScreenHeader from "../components/ScreenHeader";
import TodoListItem from "../components/Todo/TodoListItem";
import NewTodoForm from "../components/Todo/NewTodoForm";

import { useTodos } from "../contexts/TodoContext";

export default function TodoListScreen() {
  const { todos, addNewTodo, removeTodo, toggleTodo } = useTodos();

  return (
    <>
      <ScreenHeader>Todo List</ScreenHeader>

      <NewTodoForm onSubmit={addNewTodo} />

      {todos.map((todo) => (
        <TodoListItem todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      ))}
    </>
  );
}
