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
  return (
    <div className="App">
      <TaskCreate onCreate={handleCreate} />
      <h1>Görevlerin</h1>
      <TaskList allDelete={deleteById} tasks={tasks} />
    </div>
  );
}

export default App;
