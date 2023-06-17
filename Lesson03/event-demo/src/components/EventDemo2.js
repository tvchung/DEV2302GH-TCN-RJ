import React, { Component } from 'react';

class EventDemo2 extends Component {
    constructor(props){
        super(props);
        // tổ chức dữ liệu trong state
        this.state = {
            name:"Chung Chunm",
            age:44,
            job:"DevSoft"
        }
    }
    // function event
    handleChangeState = ()=>{
        console.log("this.props.name",this.props.name);
        // Cập nhật state
        this.setState({
            // name:"Devmaster",
            name:this.props.name===undefined? "Devmaster":this.props.name,
            age:55,
            job:"ReactJs Job",
        })
    }
    render() {
        return (
            <div>
                <h2>Sử dụng props, state với Event</h2>
                <div className='alert alert-success'>
                    <p>{this.state.name} - {this.state.age} - {this.state.job}</p> 
                </div>
                <button className='btn btn-danger'
                    onClick={this.handleChangeState}>
                    Event-ChangeState
                </button>
            </div>
        );
    }
}

export default EventDemo2;