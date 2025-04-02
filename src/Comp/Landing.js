import React from 'react'
import logo from "../slogo.jpg"
import { useNavigate } from 'react-router-dom'
import '../CompCss/Landing.css'
function Landing() {
    let navigate = useNavigate()
    return (
        <div className='logo-con'>
            <div className="logo-box">
                <div className="logo-img">
                    <img src={logo} alt="SpinCycle Logo" className="logo" />
                </div>
                <h1>SPINCYCLE</h1>
                <p>FRESHNESS ON DEMAND.</p>
                <button onClick={()=>navigate("/home")}>Get Started</button>
            </div>
        </div>
    )
}

export default Landing