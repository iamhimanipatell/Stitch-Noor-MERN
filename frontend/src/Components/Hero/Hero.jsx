import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
//import hero_image from '../Assets/hero_image.png'
import main_banner from '../Assets/main_banner.jpg'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();

  const handleLatestCollection = () => {
    navigate('/latest-collection');
  }

  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                  <p>New</p>

                </div>
                  <p>Collections</p>
                  <p>For Everyone</p>
                </div>

                <div className="hero-latest-button" onClick={handleLatestCollection}>
                  <div>Latest Collection</div>
                   <img src={arrow_icon} alt=''/>
                </div>
              </div>
              
      <div className="hero-right">
        <img src={main_banner} alt=''/>
      </div>
    </div>
  )
}

export default Hero;
