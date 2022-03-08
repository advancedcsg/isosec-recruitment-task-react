import reactLogo from './logo.svg';
import advancedLogo from './advanced-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={advancedLogo} className="Advanced-logo" alt="Advanced logo" />
        <img src={reactLogo} className="React-logo" alt="React logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
