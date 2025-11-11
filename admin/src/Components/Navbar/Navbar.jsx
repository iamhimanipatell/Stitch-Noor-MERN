import React from 'react'
import './Navbar.css'
import  admin_user_icon1 from '../../assets/admin_user_icon1.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      
      <h1 className='nav-logo'>Stitch Noor</h1>
          
          <img src={admin_user_icon1} alt="" className="nav-profile" />
      

    </div>
  )
}

export default Navbar;
