import React, { Component } from "react";
import ListStudent from "./components/ListStudent";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      students : [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
        { studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
      ],
    }
  }
  render() {
    let list = this.state.students;
    return (
      <div className="App">
        <img src="https://devmaster.edu.vn/images/logo.png" alt="Devmaster" />
        <ListStudent renderStudents = {list}/>
      </div>
    );
  }
}

export default App;
