import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Menu from './Components/Menu/Menu';

import Home from './Pages/Home/Home';
import AboutUs from './Pages/About-Us/AboutUs'

import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
