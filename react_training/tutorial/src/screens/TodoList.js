import { useState } from "react";
import ScreenHeader from "../components/ScreenHeader";
import TodoListItem from "../components/Todo/TodoListItem";
import NewTodoForm from "../components/Todo/NewTodoForm";

import addTodo from "../utils/addTodo";

export default function TodoListScreen() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (newTodoTitle) => setTodos(addTodo(todos, newTodoTitle));

  const removeTodo = (toRemove) => {
    const newTodos = todos.filter((todo) => todo.id != toRemove.id);
    setTodos(newTodos);
  };

  const toggleTodo = (todo) => {
    const newTodos = [...todos];
    const indexToUpdate = todos.indexOf(todo);
    newTodos[indexToUpdate] = { ...todo, done: !todo.done };
    setTodos(newTodos);
  };

  return (
    <>
      <ScreenHeader title="Todo List" />

      <NewTodoForm onSubmit={addNewTodo} />

      {todos.map((todo) => (
        <TodoListItem todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      ))}
    </>
  );
}
