import React, { Component } from 'react';
import MemberInfor from './MemberInfor';

class MemberList extends Component {
    render() {
        const  member = {
            path:'/images/avatar.jpg',
            name:"Chung Chung",
            age:45
        }

        const elementMember = (
            <>
                <MemberInfor info={member} />
                <MemberInfor info={member} />
                <MemberInfor info={member} />
            </>
        )
        return (
            <div>
                <h2>Danh sách thành viên</h2>
                {elementMember}
            </div>
        );
    }
}

export default MemberList;