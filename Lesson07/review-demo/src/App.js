import React, { Component } from "react";
import ListStudent from "./components/ListStudent";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20 },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21 },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19 },
        { studentId: "SV004", studentName: "Nguyễn Văn C", age: 19 },
      ],
      student: "",
    };
  }
  // xem
  handleView = (student) => {
    this.setState({
      student: student,
    });
  };
  // Cập nhật dữ liệu mới
  handleSubmit = (student)=>{
    console.log("Update:",student);
    // cập nhật vào mảng
    let {students} = this.state;
    for (let i = 0; i < students.length; i++) {
      if(students[i].studentId === student.studentId){
        students[i] = student;
      }
    }

    this.setState({
      students:students
    })
  }
  handleDelete=(student)=>{
    let {students} = this.state;
    let list = students.filter(x=>x.studentId !== student.studentId);
    this.setState({
      students:list
    })
  }
  render() {
    let { students } = this.state;
    return (
      <div>
        <h1>Danh sách sinh viên</h1>
        <ListStudent 
            renderStudents={students} 
            onView={this.handleView} 
            onDelete={this.handleDelete}/>
        <hr />
        <Form renderStudent={this.state.student}  onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
