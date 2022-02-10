import React from 'react'
import logo from '../../assets/logo.png'
const SecondPage = () => {
  return (
    <div className='second-page'>
        <div className='second-page-title'>
            <h1>Education</h1>
        </div>
        <div className='second-page-logo'>
         <img src={logo} />
        </div>
        <div className='second-page-text'>
          <h3>John Paul II Catholic University of Lublin</h3>
          <br/>
          <h3>Computer Science</h3>
          <br/>
          <h3> October 2021  - Currently</h3>
          <br/>
          <h3>Member of the students association of computer science</h3>
        </div>
    </div>
  )
}

export default SecondPage