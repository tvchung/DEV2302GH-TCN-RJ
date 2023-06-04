import logo from './logo.png';
import './App.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>VIỆN CÔNG NGHỆ VÀ ĐÀO TẠO DEVMASTER</h2>
        <Welcome />
      </header>
      
    </div>
  );
}

export default App;
