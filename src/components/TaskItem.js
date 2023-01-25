import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskItem({ task, onDelete, onUpdate }) {
  const [showUpdate, setShowUpdate] = useState(false);

  const deleteHandle = () => {
    onDelete(task.id);
  };
  const updateHandle = () => {
    console.log(showUpdate);
    setShowUpdate(!showUpdate);
  };
  const handleSubmit = (id, updatedTitle, updatedTask) => {
    setShowUpdate(false);
    onUpdate(id, updatedTitle, updatedTask);
  };
  return (
    <div className="singleTask">
      {showUpdate ? (
        <>
          <TaskCreate onUpdate={handleSubmit} task={task} showUpdate={true} />
        </>
      ) : (
        <>
          <h4 className="title">Task</h4>
          <p>{task.title}</p>
          <h4 className="title">Description</h4>
          <p>{task.task}</p>
          <div className="buttonDiv">
            <button onClick={deleteHandle}>Delete</button>
            <button onClick={updateHandle}>Update</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
