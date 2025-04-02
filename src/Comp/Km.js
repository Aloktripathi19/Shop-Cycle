import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import '../CompCss/Km.css'
import Cookies from 'js-cookie'

function Km() {
    let [shop, ushop] = useState("")
    let obj = useContext(Ct)


    useEffect(() => {
        let x = Cookies.get("auth")
        if (x !== undefined) {
            obj.updstate(JSON.parse(x))
        }
        ushop(obj.state.aboutshop)
        let shopdet = sessionStorage.getItem("aboutshop")
        if (shopdet) {
            ushop(JSON.parse(shopdet))
        } else {
            ushop(obj.state.aboutshop)
        }
    }, [])


    let openGoogleMaps = (location, city) => {
        let encodedLocation = encodeURIComponent(`${location}, ${city}`);
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodedLocation}`, "_blank");
    }



    return (
        <div className='know-more'>
            <div className='know-box'>
                <div className='know-det'>
                    <h2>{shop.name}</h2>
                    <p>{shop.loct}</p>
                    <p>{shop.city}</p>
                    <p>{shop.states}</p>
                    <p>{shop.pincode}</p>
                </div>
                <div className='comb-price'>
                    <h3>Combined Service Prices (Wash + Iron)</h3>
                    <p><strong>Shirts:</strong> ₹{shop.shirt}</p>
                    <p><strong>Pants:</strong> ₹{shop.pant}</p>
                    <p><strong>T-Shirts:</strong> ₹{shop.tshirt}</p>
                    <p><strong>Dry Wash:</strong> ₹{shop.dryWash}</p>
                </div>
                <div className='ind-price'>
                    <h3>Iron Only</h3>
                    <p><strong>Shirts:</strong> ₹{shop.ishirt}</p>
                    <p><strong>Pants:</strong> ₹{shop.ipant}</p>
                    <p><strong>T-Shirts:</strong> ₹{shop.itshirt}</p>
                    <h3>Wash Only</h3>
                    <p><strong>Shirts:</strong> ₹{shop.wshirt}</p>
                    <p><strong>Pants:</strong> ₹{shop.wpant}</p>
                    <p><strong>T-Shirts:</strong> ₹{shop.wtshirt}</p>
                </div>
                <div className='know-btn'>
                    {obj.state.token !== "" && <button onClick={() => window.location.href = `tel:${shop.phone}`}>
                        📞 Call</button>}
                    {obj.state.token !== "" && <button onClick={() => openGoogleMaps(shop.loct, shop.city)}>
                        📍 Direction</button>}
                    {obj.state.token !== "" && <button title='Whats App'
                        onClick={() => window.open(`https://wa.me/${shop.phone}`, "_blank")}>
                        <i class="fa-brands fa-whatsapp"></i>
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default Km