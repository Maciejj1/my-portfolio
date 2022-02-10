import React from 'react'
import profile from '../../assets/profile.jpg'
const FirstPage = () => {
  return (
    <div>
    <div className='first-page'>
    <div className='first-page-aboutme'>
    <h1>HEY ! I,m Maciej</h1>  
      <h3>In love with creating web applications <br />
          as a Frontend Developer<br/>
          using React / SASS / Javascript and<br />
          other interesting frameworks and libraries</h3>
    </div>
    <div className='first-page-photo'>
      <img src={profile} className="profile-photo" />
    </div>
    <div className='first-page-contact-button'>
      <a href="">Contact</a>
    </div>
  </div>
  </div>
  )
}

export default FirstPage