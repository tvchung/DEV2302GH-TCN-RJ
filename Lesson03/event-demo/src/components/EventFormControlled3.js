import React, { Component } from 'react';

class EventFormControlled3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            courseName:"CSS3"
        }
    }
    // khi thay đổi dữ liệu trên form
    handleChange = (event)=>{
        this.setState({
            courseName:event.target.value,
        })
    }

    // xử lý sự kiện khi submit form
    handleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.courseName)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Lựa chọn khóa học:
                    <select 
                        value={this.state.courseName} 
                        onChange={this.handleChange}
                        >
                        <option value={"HTML5"}>HTML5</option>
                        <option value={"CSS3"}>CSS3</option>
                        <option value={"JS"}>JS</option>
                        <option value={"ReactJS"}>ReactJS</option>
                    </select>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default EventFormControlled3;