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
      {/* <Device mydevice="ipad" myfavoritecharacter="Mickey Mouse"/>
      <Device mydevice="iphone" myfavoritecharacter="hahaha" />
      <Device mydevice="iwatch" myfavoritecharacter="gagaga"/>
      <Device mydevice="mac pro" myfavoritecharacter="nanana" />
      <Device mydevice="air pod" myfavoritecharacter="hohoho" /> */}

      <p></p>
      <Device></Device>
    </div>

  );
}

export default App;
