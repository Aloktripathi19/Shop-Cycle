import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

function OnlyAdmin() {
    let navigate = useNavigate()
    let [data,setData] = useState({"_id":"","name":"","phno":"","pwd":"","role":"admin"})
    let [msg,umsg] = useState("")

    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data)
    }

    let reg = ()=>{
      if (data._id !== "" && data.name !== "" && data.phno !== "" && data.pwd !== "") {
        axios.post(`${process.env.REACT_APP_BASE_URL}/reg`,data).then((res)=>{
          umsg(res.data.msg)
          navigate("/login")
        })
      }else{
        umsg("Please fill all the details")
      }
    }





  return (
    <>
    <Nav/>
    <div className="form-con">
    <div className="form-box">
      <h2>Create Account As a Admin</h2>

      <div className="input-group">
        <p className='msg'>{msg}</p>
        <input type="text" placeholder="Email ID" name='_id'  onChange={fun}/>
        <input type="text" placeholder="Name" name='name' onChange={fun}/>
        <input type="password" placeholder="Password" name='pwd' onChange={fun}/>
        <input type="tel" placeholder="Phone Number" name='phno' onChange={fun}/>
        <input type='text' readOnly value="admin" onChange={fun}/>
      </div>
      <button className="submit-btn" onClick={reg}>Register</button>
      <div className="reg-shop" onClick={()=>navigate("/reg")}>
          Register as a User
        </div>

    </div>
  </div>
  <Footer/>
  </>
  )
}

export default OnlyAdmin