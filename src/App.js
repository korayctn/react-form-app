import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  const handleCreate = (titleInput, taskInput) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 99999),
        title: titleInput,
        task: taskInput,
      },
    ];
    setTasks(createdTasks);
    console.log(createdTasks);
  };
  const deleteById = (taskId) => {
    const afterDeletedTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });
    setTasks(afterDeletedTasks);
  };
  const editById = (taskId, updatedTitle, updatedTask) => {
    const updatedTasks = tasks.map((task, index) => {
      if (task.id === taskId) {
        debugger;
        return { taskId, title: updatedTitle, task: updatedTask };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={handleCreate} />
      <h1>Görevlerin</h1>
      <TaskList allDelete={deleteById} tasks={tasks} onUpdate={editById} />
    </div>
  );
}

export default App;
