import React from 'react'
import './AdminProfile.css'
import admin_user_icon1 from '../../assets/admin_user_icon1.png'

const AdminProfile = () => {
  return (
    <div className='admin-profile'>
      <div className="profile-header">
        <h1>Admin Profile</h1>
      </div>
      
      <div className="profile-content">
        <div className="profile-image-section">
          <img src={admin_user_icon1} alt="Admin Profile" className="profile-image" />
          <h2>Administrator</h2>
        </div>
        
        <div className="profile-details">
          <div className="detail-item">
            <label>Name:</label>
            <span>Admin User</span>
          </div>
          
          <div className="detail-item">
            <label>Email:</label>
            <span>admin@stitchnoor.com</span>
          </div>
          
          <div className="detail-item">
            <label>Role:</label>
            <span>System Administrator</span>
          </div>
          
          <div className="detail-item">
            <label>Last Login:</label>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
          
          <div className="detail-item">
            <label>Status:</label>
            <span className="status-active">Active</span>
          </div>
        </div>
        
        <div className="profile-actions">
          <button className="btn-primary">Edit Profile</button>
          <button className="btn-secondary">Change Password</button>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile
