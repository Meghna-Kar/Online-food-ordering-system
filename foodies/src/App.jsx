import React from 'react';
import Menubar from './components/Menubar/Menubar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ExploreFood from './pages/ExploreFood/ExploreFood';
import Contact from './pages/Contact/Contact';
import FoodDetails from './pages/FoodDetails/FoodDetails';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { ToastContainer } from 'react-toastify';
import MyOrders from './pages/MyOrders/MyOrders';

const App = () => {
  return (
    <div>
      <Menubar /> 
      <ToastContainer />    
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/contact' element={<Contact/> }/>
        <Route path='/explore' element={<ExploreFood/> }/>
        <Route path='/food/:id' element={<FoodDetails /> }/>
        <Route path='/cart' element={<Cart /> }/>
        <Route path='/order' element={<PlaceOrder /> }/>
        <Route path='/login' element={<Login /> }/>
        <Route path='/register' element={<Register /> }/>
        <Route path='/myorders' element={<MyOrders /> }/>
      </Routes>
    </div>
  )
}

export default App;