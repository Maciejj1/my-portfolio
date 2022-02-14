import React from 'react'
import weatherapp from '../../assets/weatherapp.png'
import vape from '../../assets/vapeshop.png'
const FifthPage = () => {
  return (
    <div className='fifth-page' id="projects">
        <div className='fifth-page-title'>
         <h1>Projects</h1>
        </div>
        <div className='fifth-page-container'>
        <div className='fifth-page-text'>
            <h3>Online Vapeshop</h3>
            <h3>WeatherApp</h3>
            <h3>MyFinance</h3>
        </div>
        
        <div className='fifth-page-image'>
          
            <img src={vape} />
            
            <img src={weatherapp} />
            
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/d1b29a23622187.563260170f313.jpg" />
        </div>
        </div>
    </div>
  )
}

export default FifthPage