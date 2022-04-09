import { Provider } from 'react-redux';
import './App.css';
import InboxScreen from './components/InboxScreen';
import './index.css';
import store from './lib/store';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <Provider store={store}>
     <InboxScreen />
   </Provider>
    </div>
  );
}

export default App;
