import { Provider } from 'react-redux';
import './App.css';
import InboxScreen from './components/InboxScreen';
import './index.css';
import store from './lib/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    </div>
  );
}

export default App;
