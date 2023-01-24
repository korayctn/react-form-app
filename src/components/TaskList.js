import TaskItem from "./TaskItem";

function TaskList({ tasks, allDelete }) {
  const deleteHandle = (taskId) => {
    allDelete(taskId);
  };
  return (
    <div className="taskList">
      {tasks.map((task, index) => {
        return <TaskItem onDelete={deleteHandle} key={index} task={task} />;
      })}
    </div>
  );
}

export default TaskList;
