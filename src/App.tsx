import React from 'react';
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom'
import "./App.scss"
import Home from './Home';
import profile from "./assets/profile.jpg"
import Navbar from './Components/Nav/Navbar';
import FirstPage from './Components/Firstpage/FirstPage';
import SecondPage from './Components/SecondPage/SecondPage';
import ThirdPage from './Components/ThirdPage/ThirdPage';
import FourthPage from './Components/FourthPage/FourthPage';
import FifthPage from './Components/FifthPage/FifthPage';
import SixthPage from './Components/SixthPage/SixthPage';
function App() {


  return (
    <div className="App">
      <Navbar />
      <div className='pages'>
       <FirstPage />
       <SecondPage />
       <ThirdPage />
       <FourthPage />
       <FifthPage />
       <SixthPage />
        </div>
    </div>
  );
}

export default App;
