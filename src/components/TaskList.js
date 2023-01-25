import TaskItem from "./TaskItem";

function TaskList({ tasks, allDelete, onUpdate }) {
  const deleteHandle = (taskId) => {
    allDelete(taskId);
  };
  const updateHandle = (id, updatedTitle, updatedTask) => {
    onUpdate(id, updatedTitle, updatedTask);
  };
  return (
    <div className="taskList">
      {tasks.map((task, index) => {
        return (
          <TaskItem
            onDelete={deleteHandle}
            key={index}
            task={task}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
