import logo from './logo.png';
import './App.css';
import FuncComp from './components/FuncComp';
import ClassComp from './components/ClassComp';
import Member from './components/Member';
import MemberList from './components/MemberList';
import DemoState from './components/DemoState';

function App() {

  const elementMember = (
      <div>
        <h2>Member List</h2>
        <div>
          <Member name="Chuung Chung" address="25 Vũ Ngọc Phan"/>
          <Member name="Devmaster" address="25 Vũ Ngọc Phan"/>
          <Member name="Viện Công Nghệ" address="25 Vũ Ngọc Phan"/>
          <Member name="Nguyễn Minh Tân" address="25 Vũ Ngọc Phan"/>
        </div>
      </div>
  )
  return (
    <div className="container">
        <div className='logo'>
            <img src={logo} alt='Devmaster' />
        </div>
        <hr/>
        <div className='row'>
          <FuncComp />
          <FuncComp name="Chung Trịnh" age="45" address="25 Vũ Ngọc Phan"/>
        </div>
        <div className='row'>
          <div className='col'>
            <ClassComp />
            <ClassComp name="Devmaster" age="6" address="25 Vũ Ngọc Phan" />
          </div>
        </div>
        <div className='row'>
          {elementMember}
        </div>
        <div className='row'>
          <MemberList />
        </div>
        <div>
          <DemoState />
        </div>
    </div>
  );
}

export default App;
