import React, { Component } from 'react';

class EventFormControled extends Component {
    constructor(props){
        super(props);
        this.state ={
            studentName:''
        }
    }


    // khi thay đổi dữ liệu trên form, cập nhật lại state
    handleChange =(ev)=>{
        // lấy giá trị trên form
        let val  = ev.target.value;
        this.setState({
            studentName:val,
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        alert(this.state.studentName)
    }
    render() {
        return (
            <div>
                <form>
                    Tên sinh viên:
                    <input value={this.state.studentName}
                        onChange={this.handleChange}
                        />

                    <br/>
                    <button onClick={this.handleSubmit}>Submit</button>
                    {/* <button onClick={(event)=>this.handleSubmit(event)}>Submit</button> */}
                </form>
            </div>
        );
    }
}

export default EventFormControled;