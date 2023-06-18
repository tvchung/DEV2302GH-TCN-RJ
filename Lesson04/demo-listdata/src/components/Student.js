import React, { Component } from "react";

class Student extends Component {
  render() {
    // let item = this.props.renderStudent;
    let {renderStudent,stt}=this.props;
    // let stt= this.props.stt
    return (
      <>
        <tr>
          <td>{stt}</td>
          <td>{renderStudent.studentId}</td>
          <td>{renderStudent.studentName}</td>
          <td>{renderStudent.age}</td>
          <td>{renderStudent.sex?"Nam":"Nữ"}</td>
        </tr>
      </>
    );
  }
}

export default Student;
