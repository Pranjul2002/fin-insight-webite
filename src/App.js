import logo from './logo.svg';
import './App.css';

import Menu from './Components/Menu/Menu';

import Home from './Pages/Home/Home';

import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Menu/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
