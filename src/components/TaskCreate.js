import { useState } from "react";
import TaskList from "./TaskList";
function TaskCreate({ onCreate, task, showUpdate, onUpdate }) {
  const [Title, setTitle] = useState(task ? task.title : "");
  const [Task, setTask] = useState(task ? task.task : "");
  const handleTask = (e) => {
    setTask(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (showUpdate) {
      onUpdate(task.id, task.title, task.task);
    } else {
      onCreate(Title, Task);
    }
    setTitle("");
    setTask("");
  };

  return (
    <div>
      {showUpdate ? (
        <div className="taskUpdateDiv">
          <div>
            <h3>Update your task</h3>
            <form className="taskForm" onSubmit={handleSubmit}>
              <label className="formLabel">Title</label>
              <input
                type="text"
                className="taskInput"
                value={Title}
                onChange={handleTitle}
              />
              <label className="formLabel">Update your task</label>
              <textarea
                className="taskInput"
                cols="5"
                rows="10"
                style={{
                  resize: "none",
                }}
                value={Task}
                onChange={handleTask}
              ></textarea>
              <button className="formButton">Update</button>
            </form>
          </div>
        </div>
      ) : (
        <div className="taskDiv">
          <h3>Task ekleyin</h3>
          <form className="taskForm" onSubmit={handleSubmit}>
            <label className="formLabel">Title</label>
            <input
              type="text"
              className="taskInput"
              value={Title}
              onChange={handleTitle}
            />
            <label className="formLabel">Enter your task</label>
            <textarea
              className="taskInput"
              cols="5"
              rows="10"
              style={{
                resize: "none",
              }}
              value={Task}
              onChange={handleTask}
            ></textarea>
            <button className="formButton">Create</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
