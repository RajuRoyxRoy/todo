import React from 'react'

function sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        {/* Replace the src with your own logo image */}
        <img src="https://via.placeholder.com/40" alt="Logo" />
        <h1>YourBrand</h1>
      </div>
      <ul className="menu">
        <li>
          <a href="#home">
            <FaHome className="icon" /> Home
          </a>
        </li>
        <li>
          <a href="#profile">
            <FaUser className="icon" /> Profile
          </a>
        </li>
        <li>
          <a href="#messages">
            <FaEnvelope className="icon" /> Messages
          </a>
        </li>
        <li>
          <a href="#settings">
            <FaCog className="icon" /> Settings
          </a>
        </li>
      </ul>
    </div>
    
  )
}
export default sidebar