import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-icon">
        <img src="logo.png" alt="logo" />
      </div>
      <div>
        <ul className="nav-buttons">
          <li>Home</li>
          <li>Attorneys</li>
          <li>Practice Area</li>
          <li>About us</li>
        </ul>
      </div>
      <div className="contact-button">
        <button>Contact Now</button>
      </div>
    </div>
  );
};

export default Navbar;
