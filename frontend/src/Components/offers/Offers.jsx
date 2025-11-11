import React from 'react'
import './Offers.css'
import exclusive_image2 from '../Assets/exclusive_image2.jpg'
import { useNavigate } from 'react-router-dom'

const Offers = () => {
  const navigate = useNavigate();

  const handleCheckNow = () => {
    navigate('/exclusive-offers');
  }

  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLING PRODUCTS</p>
            <button onClick={handleCheckNow}>Check Now</button>
        </div>

        <div className="offers-right">
            <img src={exclusive_image2} alt=''/>
        </div>
      
    </div>
  )
}

export default Offers
