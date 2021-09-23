import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js'
import Table from './Table.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          imya shapki
        </p>
        <div className="clock">
        <Clock />
        </div>
      </header>
        <Table />
    </div>
  );
}

export default App;
