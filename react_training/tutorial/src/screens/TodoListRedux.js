import { useState, useContext } from "react";
import ScreenHeader from "../components/ScreenHeader";
import TodoListItem from "../components/Todo/TodoListItem";
import NewTodoForm from "../components/Todo/NewTodoForm";

import { addTodo } from "../features/todos/todosSlice";

import { useSelector, useDispatch } from "react-redux";

export default function TodoListScreen() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.allTodos);

  const addNewTodo = () => {};
  const toggleTodo = () => {};
  const removeTodo = () => {};

  return (
    <>
      <ScreenHeader>Todo List</ScreenHeader>

      <NewTodoForm onSubmit={title => dispatch(addTodo(title))} />

      {todos.map((todo) => (
        <TodoListItem todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      ))}
    </>
  );
}
