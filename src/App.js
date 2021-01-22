import logo from './logo.svg';
import './App.css';
import Device from './Device';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
    <div>
      Hello World
      <Device mydevice="ipad" />
      <Device mydevice="iphone" />
      <Device mydevice="iwatch" />
      <Device mydevice="mac pro" />
      <Device mydevice="air pod" />
    </div>

  );
}

export default App;
