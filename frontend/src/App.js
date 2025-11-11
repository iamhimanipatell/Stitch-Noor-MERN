
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
import Cart from './Pages/Cart';
import AdminLogin from './Pages/AdminLogin';
import LatestCollection from './Pages/LatestCollection';
import ExclusiveOffers from './Pages/ExclusiveOffers';

import banner_man from './Components/Assets/banner_man.png'
import kid_banner from './Components/Assets/banner_kids.png'
import banner_women from './Components/Assets/banner_women.jpg'

function App() {
  return (
    <div>
      <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={banner_man} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={banner_women} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
        <Route path='/admin' element={<AdminLogin/>}/>
        <Route path='/latest-collection' element={<LatestCollection/>}/>
        <Route path='/exclusive-offers' element={<ExclusiveOffers/>}/>

      </Routes>

      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
