import './styles/variables.scss'
import './styles/App.scss';
import SearchComponent from './components/SearchComponent';
import ResultsComponent from './components/ResultsComponent';

function App() {
  return (
    <div className="search-app">
      <SearchComponent />
      <ResultsComponent />
    </div>
  );
}

export default App;
