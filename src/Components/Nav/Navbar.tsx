import React from 'react';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
        <div className='navbar-title'>
        <h1>&lt;div className=Maciej Wawryszuk /&gt;</h1>
        </div>
        <div className='navbar-navigation'>
          <Link to='projects' smooth="true" duration={1800}>Projects</Link>
          <Link to='skills' smooth="true" duration={1800}>Skills</Link>
          <Link to='certyficates' smooth="true" duration={1800}>Certyficates</Link>
          <Link to='education' smooth="true" duration={1800}>Education</Link>
          <Link to='home' smooth="true" duration={1800}>Home</Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar