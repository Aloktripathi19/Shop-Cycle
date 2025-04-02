import React, { useState } from 'react'
import '../CompCss/Madmin.css'
import { Link, Outlet } from 'react-router-dom'


function Admin() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOutsideClick = (e) => {
    if (menuOpen && !e.target.closest('.admin-lft') && !e.target.closest('.menu-btn')) {
      setMenuOpen(false);
    }
  };
  return (
    <div className='admin-main' onClick={handleOutsideClick}>
      <button 
        className='menu-btn' 
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen(!menuOpen);
        }}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar - Hidden on mobile unless toggled */}
      <div className={`admin-lft ${menuOpen ? 'show' : ''}`}>
        <Link to='/admin' onClick={() => setMenuOpen(false)}>Accepted</Link>
        <Link to='pending' onClick={() => setMenuOpen(false)}>Pending</Link>
        <Link to='reject' onClick={() => setMenuOpen(false)}>Rejected</Link>
        <Link to='user' onClick={() => setMenuOpen(false)}>User Detail</Link>
      </div>

      {/* Right Content Area */}
      <div className='admin-rgt'>
        <Outlet />
      </div>
    </div>
  )
}

export default Admin