import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, editTodo: false },
    ]);
  };
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodos={addTodos} />
      {todos.map((todo) => <Todo task={todo.task} key={todo.id}/>)}
    </div>
  );
};

export default TodoWrapper;
