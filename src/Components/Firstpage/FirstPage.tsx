import React from 'react'
import profile from '../../assets/profile.jpg'
import insta from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import twiiter from '../../assets/twitter.png'
import SixthPage from '../SixthPage/SixthPage'
import {Link} from 'react-scroll'
const FirstPage = () => {
  return (
    <div id="home">
    <div className='first-page'>
    <div className='first-page-aboutme'>
    <h1>Hi ! I'm Maciej</h1>  
      <h3>In love with creating web applications <br />
          as a Frontend Developer<br/>
          using React / SASS / Javascript and<br />
          other interesting frameworks and libraries</h3>
    </div>
    
    <div className='first-page-photo'>
      <img src={profile} className="profile-photo" />
    </div>
    <div className='first-page-contact-button'>
      <Link to="contact" smooth="true" duration={2000}>Contact</Link>
    </div>
    <div className='first-page-icons-links'>
      <a href="https://www.linkedin.com/in/maciek-wawryszuk-484737225/"><img src={linkedin}/></a> 
      <a href="https://github.com/Maciejj1"><img src={github}/></a>
      <a href="https://www.facebook.com/profile.php?id=100010047699896"><img src={facebook}/></a>
      <a href="https://twitter.com/Maciej02191496"><img src={twiiter}/></a>
      <a href="https://www.instagram.com/__p4r4n0rm44l__/"><img src={insta} className="insta"/></a>
    </div>
  </div>
  </div>
  )
}

export default FirstPage