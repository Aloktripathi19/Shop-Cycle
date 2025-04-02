import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../CompCss/Nav.css'
import Ct from './Ct'

function Nav() {
  let obj = useContext(Ct)
  return (
    <nav>
        <Link to='/home'><i class="fa-solid fa-house-chimney"></i> Home</Link>
        <div className='nav-menu'>
        <span className="menu-icon"><i className="fa-solid fa-bars"></i></span>
        <div className='menu-link'>
            {obj.state._id !== "" && obj.state.role === "admin" &&<Link to='/admin'><i class="fa-solid fa-lock"></i> Admin</Link>}
            {obj.state._id === "" && <Link to='/reg'><i class="fa-solid fa-registered"></i> Sign-Up</Link>}
            {obj.state._id === "" && <Link to='/login'><i class="fa-solid fa-right-to-bracket"></i> Sign-In</Link>}
            {obj.state._id !== "" && (obj.state.role === "shop_owner" || obj.state.role === "admin") && <Link to='/add-shop'><i class="fa-solid fa-cart-plus"></i> Add Shop</Link>}
            {obj.state._id !== "" && (obj.state.role === "shop_owner" || obj.state.role === "admin") && <Link to='/my-shop'><i class="fa-solid fa-shop-lock"></i> My Shop</Link>}
            {obj.state._id !== "" && <Link to='/logout'><i class="fa-solid fa-right-from-bracket"></i> Logout</Link>}
            {obj.state.token !== "" && <div className='name'>
                <i class="fa-solid fa-user"></i>
                <div className='full'>{obj.state.name.split(" ")[0]}</div>
            </div>}
        </div>
        </div>
    </nav>
  )
}

export default Nav