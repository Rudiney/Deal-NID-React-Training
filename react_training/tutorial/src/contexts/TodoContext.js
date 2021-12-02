import { useState, createContext, useContext } from "react";

import addTodo from "../utils/addTodo";

const TodoContext = createContext();

function useTodos() {
  const [todos, setTodos] = useContext(TodoContext);

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

  return { todos, addNewTodo, removeTodo, toggleTodo };
}

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  return <TodoContext.Provider value={[todos, setTodos]}>{children}</TodoContext.Provider>;
}

export { TodoProvider, useTodos, TodoContext };
