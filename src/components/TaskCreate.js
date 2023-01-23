function TaskCreate() {
  return (
    <div className="taskDiv">
      <h3>Task ekleyin</h3>
      <form className="taskForm">
        <label className="formLabel">Başlık</label>
        <input type="text" className="taskInput" />
        <label className="formLabel">Task giriniz</label>
        <textarea
          className="taskInput"
          name=""
          id=""
          cols="5"
          rows="5"
        ></textarea>
        <button className="formButton">Oluştur</button>
      </form>
    </div>
  );
}

export default TaskCreate;
