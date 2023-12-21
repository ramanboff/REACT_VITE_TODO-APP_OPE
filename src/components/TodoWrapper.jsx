import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

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
      <TodoForm addTodos={addTodos} />
    </div>
  );
};

export default TodoWrapper;
