import './App.css';
import './Styles/Components.css'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
