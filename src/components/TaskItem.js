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
        <button onClick={deleteHandle}>Sil</button>
        <button>Güncelle</button>
      </div>
    </div>
  );
}

export default TaskItem;
