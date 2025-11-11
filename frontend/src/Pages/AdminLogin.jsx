import React, { useState } from 'react'
import './CSS/AdminLogin.css'

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const adminLogin = async () => {
    console.log("Admin Login Function Executed", formData);
    
    // For demo purposes, using simple admin credentials
    // In production, you should have proper admin authentication
    if (formData.email === "admin@stitchnoor.com" && formData.password === "admin123") {
      // Store admin token
      localStorage.setItem('admin-token', 'admin-authenticated');
      // Redirect to admin panel
      window.open('http://localhost:5173', '_blank');
      alert("Admin login successful! Admin panel opened in new tab.");
    } else {
      alert("Invalid admin credentials. Use: admin@stitchnoor.com / admin123");
    }
  }

  return (
    <div className='admin-login'>
      <div className="admin-login-container">
        <h1>Admin Login</h1>
        <div className="admin-login-icon">
          <div className="admin-icon">👨‍💼</div>
        </div>
        
        <div className="admin-login-fields">
          <input 
            name='email' 
            value={formData.email} 
            onChange={changeHandler} 
            type='email' 
            placeholder='Admin Email Address'
          />
          <input 
            name='password' 
            value={formData.password} 
            onChange={changeHandler} 
            type='password' 
            placeholder='Admin Password'
          />
        </div>
        
        <button onClick={adminLogin}>Login to Admin Panel</button>
        
        <div className="admin-login-info">
          <p>Demo Credentials:</p>
          <p><strong>Email:</strong> admin@stitchnoor.com</p>
          <p><strong>Password:</strong> admin123</p>
        </div>
        
        <div className="admin-login-back">
          <p>Back to <span onClick={() => window.location.replace("/")}>Main Website</span></p>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
