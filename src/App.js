import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Ct from './Comp/Ct'

import Landing from './Comp/Landing'
import Home from './Comp/Home'
import Login from './Comp/Login'
import Reg from './Comp/Reg'
import Shopreg from './Comp/Shopreg'
import Addshop from './Comp/Addshop'
import Admin from './Comp/Admin'
import Myshop from './Comp/Myshop'
import Logout from './Comp/Logout'
import Pending from './Comp/Pending'
import Reject from './Comp/Reject'
import Accepted from './Comp/Accepted'
import Service from './Comp/Service'
import Contact from './Comp/Contact'
import User from './Comp/User'
import Edit from './Comp/Edit'
import Km from './Comp/Km'
import OnlyAdmin from './Comp/OnlyAdmin'

function App() {
  const [state, setState] = useState({ token: "", _id: "", name: "", role: "", phno: "" });
  const updstate = (obj) => setState({ ...state, ...obj });
  const obj = { state, updstate };

  return (
    <BrowserRouter>
      <Ct.Provider value={obj}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/reg' element={<Reg />} />
          <Route path='/shopreg' element={<Shopreg />} />
          <Route path='/add-shop' element={<Addshop />} />
          <Route path='/my-shop' element={<Myshop />} />
          <Route path='/special-only-for-admin' element={<OnlyAdmin />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/km' element={<Km />} />
          <Route path='/admin' element={<Admin />}>
            <Route path='/admin' element={<Accepted />} />
            <Route path='pending' element={<Pending />} />
            <Route path='reject' element={<Reject />} />
            <Route path='user' element={<User />} />
          </Route>
          <Route path='/logout' element={<Logout />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Ct.Provider>
    </BrowserRouter>
  );
}

export default App;
