// import logo from './logo.svg';
import background from './assets/background.jpg';
import QuoteBox from './components/QuoteBox';
import './App.css';

function App() {
  return (
    <div style={{ backgroundImage:`url(${background})`, width:window.innerWidth, height:window.innerHeight}}>
      <div style={{width: window.innerWidth, height: window.innerHeight, justifyContent: 'center', alignContent: 'center'}}>
      <QuoteBox />
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
