import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import Menu from './Components/Menu/Menu';
import Services from './Pages/Services/Services';
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
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
