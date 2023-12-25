import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Todo = ({task,text}) => {



  return (
    <div className="Todo">
      <p>{text.task}</p>
      <h2>khasvbcaljbcsaljcbaljdsbc</h2>
      <div>
        <FontAwesomeIcon  icon={faPenToSquare} className="edit-icon" />
        <FontAwesomeIcon  icon={faTrash} className="delete-icon"  />
      </div>
    </div>
  );
};

export default Todo;
