import React from 'react';
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom'
import "./App.scss"
import Home from './Home';
function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <div className='navbar-title'>
        <h1>&lt;div className=Maciej Wawryszuk /&gt;</h1>
        </div>
        <div className='navbar-navigation'>
          <a href=''>Projects</a>
          <a href=''>Skills</a>
          <a href=''>Certyficates</a>
          <a href=''>Education</a>
          <a href=''>Home</a>
        </div>
       
      </div>
      <div className='pages'>
      <div className='first-page'>
          <div className='first-page-aboutme'>
          <h2>HEY ! I,m Maciej</h2>  
            <h3>In love with creating web applications as<br />
                a Frontend Developer<br/>
                using React / SASS / Javascript <br />
                and other interesting frameworks and libraries</h3>
          </div>
          <div className='first-page-photo'>
    
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
