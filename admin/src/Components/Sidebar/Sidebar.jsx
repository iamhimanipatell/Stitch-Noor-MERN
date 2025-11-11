import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product_icon from '../../assets/add_product_icon.png'
import product_link_icon from '../../assets/product_link_icon.png'
import admin_user_icon from '../../assets/admin_user_icon.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
         <div className="sidebar-item">
            <img src={add_product_icon} alt="" />
            <p>Add Product</p>
         </div>
        </Link>

         <Link to={'/listproduct'} style={{textDecoration:"none"}}>
         <div className="sidebar-item">
            <img src={product_link_icon} alt="" />
            <p>Product List</p>
         </div>
        </Link>

         <Link to={'/profile'} style={{textDecoration:"none"}}>
         <div className="sidebar-item">
            <img src={admin_user_icon} alt="" />
            <p>Admin Profile</p>
         </div>
        </Link>


    </div>
  )
}

export default Sidebar;
