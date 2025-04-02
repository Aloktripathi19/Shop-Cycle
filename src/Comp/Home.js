import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function Home() {

  let [data, udata] = useState([])
  let obj = useContext(Ct)
  let navigate = useNavigate()

  useEffect(() => {
    let x = Cookies.get("auth")
    if (x !== undefined) {
      obj.updstate(JSON.parse(x))
    }
    axios.get("http://localhost:5000/verifiedshop").then((res) => {
      udata(res.data)
    })
    console.log("value of cookie",Cookies.get("auth"))
  }, [])


  // let openGoogleMaps = (location, city) => {
  //   let encodedLocation = encodeURIComponent(`${location}, ${city}`);
  //   window.open(`https://www.google.com/maps/search/?api=1&query=${encodedLocation}`, "_blank");
  // }

  let km = (str) => {
    obj.updstate({ "aboutshop": str })
    sessionStorage.setItem("aboutshop", JSON.stringify(str))
    navigate("/km")
  }



  return (
    <div className='home-con'>
      <h1>Smart Laundry Solutions for Your Busy Life!</h1>
      {data.map((str) => {
        return (<div className='home-card'>
          <img src={`http://localhost:5000/simgs/${str.simg}`} alt='product' onClick={() => km(str)} />
          <div className='home-content'>
            <h2>🏠 {str.name}</h2>
            <h4>📍 {str.loct}</h4>
            <h4>🏙️ {str.city}</h4>
            <h4>Pincode📮: {str.pincode}</h4>
            <h3>🌍 {str.states}</h3>
          </div>
          <div className='home-btn'>
            <button className={`opn ${!str.open ? "closed" : ""}`} disabled>
              {str.open ? "Open 🟢" : "Closed 🔴"}
            </button>
          </div>
        </div>)
      })
      }
    </div>
  )
}

export default Home