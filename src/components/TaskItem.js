function TaskItem({ task, onDelete }) {
  const deleteHandle = () => {
    onDelete(task.id);
  };
  return (
    <div className="singleTask">
      <h4 className="title">Task</h4>
      <p>{task.title}</p>
      <h4 className="title">Description</h4>
      <p>{task.task}</p>
      <div className="buttonDiv">
        <button onClick={deleteHandle}>Delete</button>
        <button>Update</button>
      </div>
    </div>
  );
}

export default TaskItem;
