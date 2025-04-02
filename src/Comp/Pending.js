import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import '../CompCss/Admin.css'
import Cookies from 'js-cookie'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
function Pending() {
  let [data, udata] = useState([])
  let [f, setF] = useState(false)
  let obj = useContext(Ct)
  let navigate = useNavigate()

  useEffect(() => {
    let x = Cookies.get("auth");
    console.log("my cookie", Cookies.get("auth"));

    if (x !== undefined) {
      obj.updstate(JSON.parse(x));
    } else {
      navigate("/login");
    }
    if (obj.state._id) {

      axios.get("http://localhost:5000/allshop", { "headers": { "Authorization": obj.state.token, "uid": obj.state._id } }).then((res) => {
        udata(res.data)
      })
    }
  }, [f,obj.state._id])


  let decision = (id, st) => {
    axios.put(`http://localhost:5000/shopon/${id}`, { "verified": st }).then((res) => {
      setF(!f)
    })
  }


  return (
    <div className='admin-con'>
      <h2>🛒 Admin Dashboard 🛒</h2>
      <h2>⏳ Pending Shops</h2>
      {data.map((str) => {
        return (
          <>
            {
              str.verified === "pending" && <div className='pending-shop'>
                <img src={`http://localhost:5000/simgs/${str.simg}`} alt="Shop" />
                <div className='shop-detail'>
                  <h3><span>Shop Name:</span> {str.name}</h3>
                  <p><strong>Owner Name:</strong> {str.uname}</p>
                  <p><strong>Owner Id:</strong> {str.uid}</p>
                  <p><strong>Phone:</strong> {str.phone}</p>
                  <p><strong>Location:</strong> {str.loct}</p>
                  <p><strong>City:</strong> {str.city}</p>
                  <p><strong>Pincode:</strong> {str.pincode}</p>
                  <p><strong>State:</strong> {str.states}</p>
                </div>
                <div className='price-detail'>
                  <div className='indi-iron'>
                    <h4>Iron Only</h4>
                    <p><strong>Shirts:</strong> ₹{str.ishirt}</p>
                    <p><strong>Pants:</strong> ₹{str.ipant}</p>
                    <p><strong>T-Shirts:</strong> ₹{str.itshirt}</p>
                  </div>
                  <div className='indi-wash'>
                    <h4>Wash Only</h4>
                    <p><strong>Shirts:</strong> ₹{str.wshirt}</p>
                    <p><strong>Pants:</strong> ₹{str.wpant}</p>
                    <p><strong>T-Shirts:</strong> ₹{str.wtshirt}</p>
                  </div>
                  <div className='both-price'>
                    <h4>Combined Prices (Wash + Iron)</h4>
                    <p><strong>Shirts:</strong> ₹{str.shirt}</p>
                    <p><strong>Pants:</strong> ₹{str.pant}</p>
                    <p><strong>T-Shirts:</strong> ₹{str.tshirt}</p>
                    <p><strong>Dry Wash:</strong> ₹{str.dryWash}</p>
                  </div>
                </div>
                <div className='shop-status'>
                  <h4>Status</h4>
                  <p><strong>Shop Status:</strong> {str.open ? "Open 🟢" : "Closed 🔴"}</p>
                  <p><strong>Verification:</strong> {str.verified}</p>
                </div>
                <div className='admin-control'>
                  <button className='acpt' onClick={() => decision(str._id, "accept")}>Accept</button>
                  <button className='rjt' onClick={() => decision(str._id, "reject")}>Reject</button>
                  <button className='call' onClick={() => window.location.href = `tel:${str.phone}`}>Call</button>
                  <button className='whtsapp' title='Whats App'
                    onClick={() => window.open(`https://wa.me/${str.phone}`, "_blank")}>
                    <i class="fa-brands fa-whatsapp"></i>
                  </button>

                </div>

              </div>
            }
          </>
        )
      })
      }

    </div>
  )
}

export default Pending