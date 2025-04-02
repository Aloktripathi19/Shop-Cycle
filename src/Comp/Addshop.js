import React, { useContext, useEffect, useState } from 'react'
import '../CompCss/Addshop.css'
import axios from 'axios'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function Addshop() {
    let obj = useContext(Ct)
    let navigate = useNavigate()
    let [data, udata] = useState({
        "name": "", "loct": "", "states": "","city":"", "pincode": "", "simg": "",
        "shirt": "", "pant": "", "tshirt": "", "dryWash": "",
        "ishirt": "", "ipant": "", "itshirt": "", "wshirt": "","wpant": "", "wtshirt": "" 
    })

    let fun = (e) => {
        udata({ ...data, [e.target.name]: e.target.value })
    }
    let fun1 = (e) => {
        udata({ ...data, 'simg': e.target.files[0] })
    }

    useEffect(() => {
        let x = Cookies.get("auth")
        if (x !== undefined) {
            obj.updstate(JSON.parse(x))
        }
    }, [])



    let add = () => {
        if (data.name !== "" && data.loct !== "" && data.city !=="" && data.states !== "" && data.pincode !== "" && 
            data.simg !== "" && data.shirt !== "" && data.pant !== "" && data.tshirt !== "" && data.dryWash !== "" &&
            data.ishirt !== "" && data.ipant !== "" && data.itshirt !== "" &&
            data.wshirt !== "" && data.wpant !== "" && data.wtshirt !== "") {
            let fd = new FormData()
            for (let i in data) {
                fd.append(i, data[i])
            }
            fd.append("uid", obj.state._id)
            fd.append("uname", obj.state.name)
            fd.append("phone",obj.state.phno)

            axios.post("http://localhost:5000/addshop", fd,{"headers":{"Authorization":obj.state.token}}).then((res) => {
                navigate("/home")
            })
        } else {
            alert("Please fill out all fields before submitting.")
        }
    }


    return (

        <div className='shop-con'>
            <div className='shop-box'>
                <h2>🛍️ Add Your Shop</h2>
                <div className='section'>
                    <h3>🏪 Shop Information</h3>
                    <input type='text' placeholder='Enter shop name' name='name' onChange={fun} />
                    <input type='text' placeholder='Enter your Full Address' name='loct' onChange={fun} />
                    <input type='text' placeholder='Enter City' name='city' onChange={fun} />
                    <input type='text' placeholder='Enter State' name='states' onChange={fun} />
                    <input type='number' placeholder='Postal Code' name='pincode' onChange={fun} />
                </div>

                <div className='section'>
                    <h3>💰 Pricing Details</h3>
                    <input type='text' title="Price for ironing and washing a shirt" placeholder='Shirt - Iron & Wash Price' name='shirt' onChange={fun} />
                    <input type='text' title="Price for ironing and washing a pant" placeholder='Pant - Iron & Wash Price' name='pant' onChange={fun} />
                    <input type='text' title="Price for ironing and washing a T-shirt" placeholder='T-shirt - Iron & Wash Price' name='tshirt' onChange={fun} />
                    <input type='text' title="Price for dry washing clothes" placeholder='Dry Wash Price' name='dryWash' onChange={fun} />
                </div>

                <div className='section'>
                    <h3>💲 Individual Pricing Details</h3>

                    <div className='washing-section'>
                        <h4>🧼 Washing Only</h4>
                        <input type='text' title="Price for washing a shirt" placeholder='Shirt - Wash Price' name='wshirt' onChange={fun} />
                        <input type='text' title="Price for washing a pant" placeholder='Pant - Wash Price' name='wpant' onChange={fun} />
                        <input type='text' title="Price for washing a T-shirt" placeholder='T-shirt - Wash Price' name='wtshirt' onChange={fun} />
                    </div>

                    <div className='ironing-section'>
                        <h4>🧺 Ironing Only</h4>
                        <input type='text' title="Price for ironing a shirt" placeholder='Shirt - Iron Price' name='ishirt' onChange={fun} />
                        <input type='text' title="Price for ironing a pant" placeholder='Pant - Iron Price' name='ipant' onChange={fun} />
                        <input type='text' title="Price for ironing a T-shirt" placeholder='T-shirt - Iron Price' name='itshirt' onChange={fun} />
                    </div>
                </div>


                <div className='section'>
                    <h3>📷 Upload Shop Image</h3>
                    <input type='file' name='simg' onChange={fun1} />
                </div>

                <button onClick={add}>🚀 Add It</button>
            </div>
        </div>
    )
}

export default Addshop