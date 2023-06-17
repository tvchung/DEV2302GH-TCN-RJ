import React, { Component } from 'react';

class EventFormControlled4 extends Component {
    constructor(props){
        super(props);
        this.state={
            gender:true,
        }
    }
    handleChange = (ev)=>{
        let value=ev.target.value;
        console.log("gender:",value);
        this.setState({
            gender:value,
        })
    }
    handleSubbmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.gender)
    }
    render() {
        // let checked = this.state.gender===true?'checked':'';
        return (
            <div>
                <form onSubmit={this.handleSubbmit}>
                    Giới tính:
                    <input type='radio' value={true} name='gt' id='gtNam' 
                        // checked={this.state.gender===true?true:false}
                        onChange={this.handleChange}
                        />
                    <label htmlFor='gtNam'>Name</label>
                    <input type='radio' value={false} name='gt' id='gtNu'
                        // checked={this.state.gender===false?true:false}
                        onChange={this.handleChange}
                        />
                    <label htmlFor='gtNu'>Nữ</label>

                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default EventFormControlled4;