import { useState } from "react";

const TodoForm = ({ addTodo}) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(inputText)

  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        className="todo-input"
        placeholder="what is the task today?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
