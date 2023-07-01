import "./App.css";
import React, { Component } from "react";
import Control from "./components/Control";
import ListStudent from "./components/ListStudent";
import Form from "./components/Form";

class App extends Component {
  constructor(props){
    super(props);
    // quản lý dữ liệu trong state
    this.state = {
      students : [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
        { studentId: "SV004", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
      ], // Mảng danh sách sinh viên
      isToggle:false, // quản lý trạng thái ẩn/hiện Form 
      actionName:"", // thuộc tính xử lý hiển thị nút submit trên form
      student:{}, // quản lý đối tương dữ liệu cho Form
    }
  }

  // Xử lý sự kiện
  handleAddOrUpdate = (toggle, actionName,student)=>{
    console.log("handleAddOrUpdate:",student);
    this.setState({
      isToggle:toggle,
      actionName:actionName,
      student:student
    })
  }


  // Hàm xử lý sự kiện Submit Form
  handleSubmit = (toggle,actionName,student)=>{
    console.log("Form - app:",toggle,actionName, student);
    // Xử lý khi sửa
    if(actionName==="Update"){
      let {students}=this.state; // lấy giá trị mảng hiện tại
      for (let index = 0; index < students.length; index++) {
        if(students[index].studentId === student.studentId){
          students[index]=student;
          break;
        }
      }
      this.setState({
        students:students
      })
    }

    //Xử lý khi thêm
    if(actionName==="Add"){
      let {students}=this.state; // lấy giá trị mảng hiện tại
      students.push(student); 
      // students=[...students,student];
      this.setState({
        students:students
      })
    }
    this.setState({
      isToggle:toggle,
      actionName:actionName
    })
  }
  // xóa
  handleDelete= (student)=>{
    let {students}=this.state; // lấy giá trị mảng hiện tại
    let list = students.filter(x=>x.studentId !=student.studentId);
    this.setState({
      students:list
    })
  }
  render() {
    let {students} = this.state;
    // ẩn hiện form theo isToggle 
    let elementForm = (this.state.isToggle===true)? 
              <Form renderActionName={this.state.actionName} 
                    renderStudent={this.state.student}
              onSubmit={this.handleSubmit}/>:""
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* Control  */}
              <Control  onAdd={this.handleAddOrUpdate}/>
              {/* ./Control  */}
              {/* ListStudent  */}
              <ListStudent renderStudents = {students} 
                    onView={this.handleAddOrUpdate}
                    onEdit={this.handleAddOrUpdate}
                    onDelete={this.handleDelete}/>
              {/* ./ListStudent  */}
            </div>
          </div>
          <div className="col-5 grid-margin">
            {/* Form */}
                {/* <Form /> */}
                {elementForm}
            {/* ./Form */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
