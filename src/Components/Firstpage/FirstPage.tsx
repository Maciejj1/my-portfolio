import React from 'react'
import profile from '../../assets/profile.jpg'
import insta from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import twiiter from '../../assets/twitter.png'
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
      <a href="">Contact Me</a>
    </div>
    <div className='first-page-icons-links'>
      <a href=""><img src={linkedin}/></a>
      <a href=""><img src={github}/></a>
      <a href=""><img src={facebook}/></a>
      <a href=""><img src={twiiter}/></a>
      <a href=""><img src={insta}/></a>
    </div>
  </div>
  </div>
  )
}

export default FirstPage