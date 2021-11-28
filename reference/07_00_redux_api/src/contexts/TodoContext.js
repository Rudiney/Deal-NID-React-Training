import { useState, createContext, useContext } from "react";

const TodoContext = createContext();

function useTodos() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error(`useTodos must be used within a TodoProvider`);
  }

  const [todos, setTodos] = context;

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

  return { todos, addTodo, removeTodo, togleTodo };
}

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  return <TodoContext.Provider value={[todos, setTodos]}>{children}</TodoContext.Provider>;
}

export { TodoProvider, useTodos };
