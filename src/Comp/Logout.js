import React, { useContext, useEffect } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function Logout() {
    let obj = useContext(Ct)
    let navigate = useNavigate()
    useEffect(()=>{
        obj.updstate({ "token": "", "_id": "", "name": "", "role": "","phno":"" })
        Cookies.remove("auth")
        navigate("/home")
    },[])
  return (
    <div>Logout</div>
  )
}

export default Logout