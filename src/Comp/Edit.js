import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Edit() {
    let obj = useContext(Ct)
    let navigate = useNavigate()
    let [shop,ushop] = useState({"shirt": "", "pant": "", "tshirt": "", "dryWash": "",
        "ishirt": "", "ipant": "", "itshirt": "", "wshirt": "","wpant": "", "wtshirt": "" 
    })


    let fun=(e)=>{
        ushop({...shop,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        ushop(obj.state.shopdet)
    },[])



    let add=()=>{
        axios.put("http://localhost:5000/editshop",shop,{"headers":{"Authorization":obj.state.token}}).then((res)=>{
            navigate("/my-shop")
        })
    }
  return (
    <div className='shop-con'>
    <div className='shop-box'>
        <h2>🛍️ Edit Shop 🛍️</h2>
        <div className='section'>
            <h3>💰 Pricing Details</h3>
            <input type='text' title="Price for ironing and washing a shirt"  placeholder='Shirt - Iron & Wash Price' name='shirt' value={shop.shirt} onChange={fun} />
            <input type='text' title="Price for ironing and washing a pant" name='pant' value={shop.pant} onChange={fun} />
            <input type='text' title="Price for ironing and washing a t-shirt" name='tshirt' value={shop.tshirt} onChange={fun} />
            <input type='text' title="Price for dry washing clothes" name='dryWash' value={shop.dryWash} onChange={fun} />
        </div>

        <div className='section'>
            <h3>💲 Individual Pricing Details</h3>

            <div className='washing-section'>
                <h4>🧼 Washing Only</h4>
                <input type='text' title="Price for washing a shirt" name='wshirt' value={shop.wshirt} onChange={fun} />
                <input type='text'  title="Price for washing a pant" name='wpant' value={shop.wpant} onChange={fun} />
                <input type='text' title="Price for washing a t-shirt" name='wtshirt' value={shop.wtshirt} onChange={fun} />
            </div>

            <div className='ironing-section'>
                <h4>🧺 Ironing Only</h4>
                <input type='text' title="Price for ironing a shirt" placeholder='Shirt - Iron Price' name='ishirt' value={shop.ishirt} onChange={fun} />
                <input type='text' title="Price for ironing a pant" placeholder='Pant - Iron Price' name='ipant' value={shop.ipant} onChange={fun} />
                <input type='text' title="Price for ironing a t-shirt" placeholder='T-shirt - Iron Price' name='itshirt' value={shop.itshirt} onChange={fun} />
            </div>
        </div>


        <button onClick={add}>🚀 Edit It</button>
    </div>
</div>
  )
}

export default Edit