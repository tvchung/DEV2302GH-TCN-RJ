import logo from './logo.png';
import './App.css';
import EventDemo1 from './components/EventDemo1';
import EventDemo2 from './components/EventDemo2';
import EventFormControled from './components/EventFormControled';
import EventFormControlled2 from './components/EventFormControlled2';
import EventFormControlled3 from './components/EventFormControlled3';
import EventFormControlled4 from './components/EventFormControlled4';

function App() {
  return (
    <div className="container border border-primary my-3 rounded p-3" >
        <div className="d-flex align-items-center">
            <img src ={logo} alt="Devmaster" />
            <h1>Event Demo</h1>
        </div>
        <EventDemo1 />
        <EventDemo1 name="Chung Trịnh"/>
        <EventDemo2 />
        <EventDemo2 name="Viện Công Nghệ"/>

        <EventFormControled />
        <EventFormControlled2 />
        <EventFormControlled3 />
        <EventFormControlled4 />
        <hr/>
    </div>
  );
}

export default App;
