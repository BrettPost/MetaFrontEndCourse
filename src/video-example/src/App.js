import logo from './logo.svg';
import './App.css';
import NyanCat from './NyanCat';
import BirdSound from './BirdSound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NyanCat />
          <BirdSound />
        </div>
      </header>
    </div>
  );
}

export default App;
