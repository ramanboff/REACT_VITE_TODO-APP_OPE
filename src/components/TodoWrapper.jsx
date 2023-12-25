import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { completed: false, task: todo, isEditing: false, id: uuidv4() },
    ]);
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm  addTodo={addTodo} />
      {todos.map((eachTodo) => <Todo text={eachTodo}/>)}
    </div>
  );
};

export default TodoWrapper;
