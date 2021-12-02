export default function addTodo(oldTodos, newTodoTitle) {
  const newTodos = [...oldTodos];
  newTodos.push({ id: new Date().getTime(), title: newTodoTitle, done: false });
  return newTodos;
}
