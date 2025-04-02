import React, { useContext, useEffect, useState } from 'react'
import '../CompCss/Myshop.css'
import Ct from './Ct'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function Myshop() {
    let [data, udata] = useState(null)
    let obj = useContext(Ct)
    let [f, setF] = useState(false)
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

            axios.get(`http://localhost:5000/myshop/${obj.state._id}`, { "headers": { "Authorization": obj.state.token } }).then((res) => {
                udata(res.data)
                console.log(res.data)
            })
        }
    }, [obj.state._id,f])

    let toggle = (id, open) => {
        axios.put(`http://localhost:5000/shopon/${id}`, { open: !open }).then((res) => {
            setF(!f)
        })
    }


    let edit = (myshop) => {
        obj.updstate({ "shopdet": myshop })
        navigate("/edit")
    }




    return (
        <div className="my-con">
            <h2>🏪 My Shop Details</h2>
            {data?.length===0 && <h1>Currently your shop was not there just add it</h1>}
            {data?.length>0 && data.map((shopData) => {
                return (

                    <div className="my-box">
                        <div className="my-img">
                            <img src={`http://localhost:5000/simgs/${shopData.simg}`} alt="Shop" className="shop-image" />
                        </div>

                        <div className="my-info">
                            <h3>Shop Information</h3>
                            <p><strong>Name:</strong> {shopData.name}</p>
                            <p><strong>Username:</strong> {shopData.uname}</p>
                            <p><strong>Phone:</strong> {shopData.phone}</p>
                            <p><strong>Location:</strong> {shopData.loct}</p>
                            <p><strong>City:</strong> {shopData.city}</p>
                            <p><strong>State:</strong> {shopData.states}</p>
                            <p><strong>Pincode:</strong> {shopData.pincode}</p>
                        </div>

                        <div className="individual-price">
                            <h3>Individual Service Prices</h3>
                            <div className="price-columns">
                                <div>
                                    <h4>Iron Only</h4>
                                    <p><strong>Shirts:</strong> ₹{shopData.ishirt}</p>
                                    <p><strong>Pants:</strong> ₹{shopData.ipant}</p>
                                    <p><strong>T-Shirts:</strong> ₹{shopData.itshirt}</p>
                                </div>
                                <div>
                                    <h4>Wash Only</h4>
                                    <p><strong>Shirts:</strong> ₹{shopData.wshirt}</p>
                                    <p><strong>Pants:</strong> ₹{shopData.wpant}</p>
                                    <p><strong>T-Shirts:</strong> ₹{shopData.wtshirt}</p>
                                </div>
                            </div>
                        </div>

                        <div className="togther-price">
                            <h3>Combined Service Prices (Wash + Iron)</h3>
                            <p><strong>Shirts:</strong> ₹{shopData.shirt}</p>
                            <p><strong>Pants:</strong> ₹{shopData.pant}</p>
                            <p><strong>T-Shirts:</strong> ₹{shopData.tshirt}</p>
                            <p><strong>Dry Wash:</strong> ₹{shopData.dryWash}</p>
                        </div>

                        <div className="my-status">
                            <h3>Status</h3>
                            <p className="status-text">
                                Shop Status: <button onClick={() => toggle(shopData._id, shopData.open)}>
                                    {shopData.open ? "Open 🟢" : "Closed 🔴"}</button>
                            </p>
                            <p className="verify-text">
                                <strong>Verification:</strong> {shopData.verified}
                            </p>
                            <button className='edit-price' onClick={() => edit(shopData)}>Edit Price</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Myshop