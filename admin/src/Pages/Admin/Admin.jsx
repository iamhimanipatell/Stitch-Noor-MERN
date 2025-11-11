import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
import AdminProfile from '../../Components/AdminProfile/AdminProfile'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>} />
        <Route path='/listproduct' element={<ListProduct/> } />
        <Route path='/profile' element={<AdminProfile/>} />
        <Route path='/' element={<AddProduct/>} />
      </Routes>
    </div>
  )
}

export default Admin
