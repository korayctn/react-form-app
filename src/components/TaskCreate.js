import { useState } from "react";
import TaskList from "./TaskList";
function TaskCreate({ onCreate }) {
  const [Title, setTitle] = useState("");
  const [Task, setTask] = useState("");
  const handleTask = (e) => {
    setTask(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(Title, Task);
    setTitle("");
    setTask("");
  };

  return (
    <div className="taskDiv">
      <h3>Task ekleyin</h3>
      <form className="taskForm" onSubmit={handleSubmit}>
        <label className="formLabel">Başlık</label>
        <input
          type="text"
          className="taskInput"
          value={Title}
          onChange={handleTitle}
        />
        <label className="formLabel">Task giriniz</label>
        <textarea
          className="taskInput"
          name=""
          id=""
          cols="5"
          rows="10"
          value={Task}
          onChange={handleTask}
        ></textarea>
        <button className="formButton">Oluştur</button>
      </form>
    </div>
  );
}

export default TaskCreate;
