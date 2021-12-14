import { Provider } from 'react-redux';
import './styles/variables.scss'
import './styles/App.scss';
import store from './store';
import Search from './components/SearchComponent';
import Results from './components/ResultsComponent';

function App(props) {
  return (
    <Provider store={ store}>
      <div className="search-app">
        <Search />
        <Results />
      </div>
    </Provider>
  );
}

export default App;
