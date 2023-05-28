import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import Cart from './Components/Cart';



import Header from "./Components/Header";
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import MoreDetails from './Components/MoreDetails';
import MyOrder from './Components/MyOrder';
import Product from './Components/Product';

import Registration from './Components/Registration';
import Servicess from './Components/Servicess';

import Userdashboard from './Components/Userdashboard';
import UserProfile from './Components/UserProfile';

import { LoginContext } from './LoginContext'

function App() {
  const [userLoginName, setuserLoginName] = useState(localStorage.getItem('userLoginName'))
  const [userLoginStatus, setuserLoginStatus] = useState(localStorage.getItem('userLoginStatus'))
  const[cart,setCart]=useState('')
  useEffect(()=>{
      localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])
  return (
    <Router>
      <LoginContext.Provider value={{ userLoginName, setuserLoginName, userLoginStatus, setuserLoginStatus,
      cart,setCart}}>
        <Header />
        <Routes>
          <Route element={<Homepage />} path="/"></Route>
          <Route element={<Cart/>} path="/cart"></Route>
          <Route element={<AboutUs/>} path='/aboutus'></Route>
          <Route element={<Servicess/>} path='/services'></Route>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<Registration />} path="/reg"></Route>
          <Route element={<Userdashboard/>} path='/userdashboard'></Route>
          <Route element={<Product/>} path='/product'></Route>
        
          {/* <Route element={<AdminLogin/>} path='/admin'></Route> */}
          <Route element={<UserProfile/>} path='/profile'></Route>
          <Route path='/moredetails/:id' element={<MoreDetails/>}></Route>
          <Route path='/myorder' element={<MyOrder/>}></Route>
        </Routes>

      </LoginContext.Provider>
    </Router>
  );
}

export default App;