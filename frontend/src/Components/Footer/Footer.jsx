import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        
        <p>STITCH NOOR</p>
      </div>

      <ul className="footer-links">
  <li>StitchNoor - Where Elegance Meets Everyday</li>
  <li>Contact: stitchnoor.contactus@gmail.com</li>
</ul>


      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt='insta'/>
        </div>
        
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt='whatsapp'/>
        </div>
      </div>
      <div className='footer-copyright'>
        <hr />
        <p> Copyright @c2025 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer;
