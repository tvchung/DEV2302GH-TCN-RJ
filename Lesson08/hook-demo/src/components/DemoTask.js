import React, { useState } from "react";

export default function DemoTask() {
  // mock data
  const listTask = [
    { taskId: 1, taskName: "Học useState" },
    { taskId: 2, taskName: "Lab useState" },
  ];
  // useState
  const [list, setList] = useState(listTask);

  const taskObject = { taskId: 0, taskName: "" };
  const [task, setTask] = useState(taskObject);

  const handleChange = (event) => {
    let value = event.target.value;
    let taskIdMax = list[list.length-1].taskId;
    setTask({
      taskId:taskIdMax+1,
      taskName:value
    });
    // console.log(task);
  };
  // Hiển thị dữ liệu listTask
  let elementTask = list.map((item, index)=>{
    return(
        <tr key={index}>
            <td>{item.taskId}</td>
            <td>{item.taskName}</td>
        </tr>
    )
  })
  // thêm
  const handleSubmit = (event)=>{
    event.preventDefault();
    // Thêm vào list
    setList([
        ...list,
        task
    ])
    setTask({
        taskId:0,
        taskName:""
    })
  }
  return (
    <div>
      <form>
        <label> Nhập task:</label>
        <input name="taskName" value={task.taskName} onChange={handleChange} />
        <button 
                className="btn btn-primary"
                onClick={handleSubmit} 
                >AddNew</button>
      </form>
      <hr />
      <table className="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Task Name</th>
                </tr>
            </thead>
            <tbody>
                {elementTask}
            </tbody>
      </table>
    </div>
  );
}
