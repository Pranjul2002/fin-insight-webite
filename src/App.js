import logo from './logo.svg';
import './App.css';
import Blogs from './Pages/blogs/Blogs';
import Menu from './Components/Menu/Menu';

import Home from './Pages/Home/Home';

import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Menu/>
      <Home/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
