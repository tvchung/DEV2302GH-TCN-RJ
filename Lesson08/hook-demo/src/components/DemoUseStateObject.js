import React,{useState} from 'react'

export default function DemoUseStateObject() {
    // giá trị khởi tạo
    const students=[
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20 },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21 },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19 },
        { studentId: "SV004", studentName: "Nguyễn Văn C", age: 19 },
    ]
    // useState
    const [list, setList] = useState(students)

    let elementStudent = list.map((student,index)=>{
        return(
            <>
                <tr key={index}>
                    <th>{index+1}</th>
                    <td>{student.studentId}</td>
                    <td>{student.studentName}</td>
                    <td>{student.age}</td>
                </tr>
            </>
        )
    })
  return (
    <div>
      <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã</th>
                    <th>Họ và tên</th>
                    <th>Tuổi</th>
                </tr>
            </thead>
            <tbody>
                {elementStudent}
            </tbody>
      </table>
    </div>
  )
}
