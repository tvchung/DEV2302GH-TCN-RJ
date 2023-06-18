import React, { Component } from 'react';
import Student from './Student';

class ListStudent extends Component {
    render() {
        let list = this.props.renderStudents;
        let {renderStudents}=this.props;

        let elementStudent = list.map((item,index)=>{
            return <Student key={index} renderStudent = {item} stt={index+1}/>
        });

        console.log("elementStudent1:",renderStudents);
        let elementStudent1 = renderStudents.map((item,index)=>{
            console.log("map:",item);
            return (
                <>
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.studentId}</td>
                        <td>{item.studentName}</td>
                        <td>{item.age}</td>
                        <td>{item.sex?"Nam":"Nữ"}</td>
                    </tr>
                </>
            )
        })
        return (
            <>
                <table border={"1px"} cellPadding={"5"} cellSpacing={"0"} width={"80%"}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã sinh viên</th>
                            <th>Họ và tên</th>
                            <th>Tuổi</th>
                            <th>Giới tính</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elementStudent}
                    </tbody>
                </table>
                <hr/>
                <table border={"1px"} cellPadding={"5"} cellSpacing={"0"} width={"80%"}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã sinh viên</th>
                            <th>Họ và tên</th>
                            <th>Tuổi</th>
                            <th>Giới tính</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elementStudent1}
                    </tbody>
                </table>

            </>
        );
    }
}

export default ListStudent;