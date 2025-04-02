import React, { useState } from 'react'
import '../CompCss/Reg.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Reg() {
  let navigate = useNavigate()
  let [data, udata] = useState({ "_id": "","name":"","phno":"" ,"pwd": "" })
  let [msg,umsg]= useState("")

  let fun = (e) => {
    udata({ ...data, [e.target.name]: e.target.value })
  }
  
  let reg = ()=>{
    if (data._id !== "" && data.name !== "" && data.phno !== "" && data.pwd !== "") {
      axios.post("http://localhost:5000/reg",data).then((res)=>{
        umsg(res.data.msg)
        navigate("/login")
      })
    }else{
      umsg("Please fill all the details")
    }
  }

  return (
    <div className="form-con">
      <div className="form-box">
        <h2>Create Account</h2>

        <div className="input-group">
          <p className='msg'>{msg}</p>
          <input type="text" placeholder="Email ID"  onChange={fun} name='_id'/>
          <input type="text" placeholder="Name"  onChange={fun} name='name'/>
          <input type="password" placeholder="Password"  onChange={fun} name='pwd'/>
          <input type="tel" placeholder="Phone Number"  onChange={fun} name='phno'/>
        </div>

        <button className="submit-btn" onClick={reg}>Register</button>

        <div className="reg-shop" onClick={()=>navigate("/shopreg")}>
          Register as a Shop Owner
        </div>
      </div>
    </div>
  )
}

export default Reg