import React, { useContext, useState } from 'react'
import axios from 'axios'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Footer from './Footer'
import Nav from './Nav'

function Login() {
  let [data, udata] = useState({ "_id": "", "pwd": "" })
  let [msg, umsg] = useState("")
  let obj = useContext(Ct)
  let navigate = useNavigate()
  let fun = (e) => {
    udata({ ...data, [e.target.name]: e.target.value })
  }
  let log = () => {
    if (data._id !== "" && data.pwd !== "") {
      axios.post(`${process.env.REACT_APP_BASE_URL}/login`, data).then((res) => {
        if (res.data.token !== undefined) {
          obj.updstate(res.data)
          Cookies.set("auth", JSON.stringify(res.data), { "expires": 5 })
          console.log(res.data)
          navigate("/home")
        } else {
          umsg(res.data.msg)
        }
      })
    } else {
      umsg("Please fill all the details")
    }
  }
  return (
    <>
    <Nav/>
    <div className="form-con">
      <div className="form-box">
        <h2>Login to Your Account</h2>
        <div className="input-group">
          <p className='msg'>{msg}</p>
          <input type="text" placeholder="Email ID" onChange={fun} name='_id'/>
          <input type="password" placeholder="Password" onChange={fun} name='pwd'/>
        </div>

        <button className="submit-btn" onClick={log}>Login</button>

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login