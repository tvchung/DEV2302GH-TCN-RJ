import React, { Component } from "react";

class Student extends Component {
  render() {
    let item = this.props.renderStudent;
    let stt= this.props.stt
    return (
      <>
        <tr>
          <td>{stt}</td>
          <td>{item.studentId}</td>
          <td>{item.studentName}</td>
          <td>{item.age}</td>
          <td>{item.sex?"Nam":"Nữ"}</td>
        </tr>
      </>
    );
  }
}

export default Student;
