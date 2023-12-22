import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Todo = ({task, toggleComplete, handleDelete, editTodo}) => {



  return (
    <div className="Todo">
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed? "completed": ""}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon  icon={faPenToSquare} className="edit-icon" onClick={() => editTodo(task.id) } />
        <FontAwesomeIcon  icon={faTrash} className="delete-icon" onClick={() => handleDelete(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
