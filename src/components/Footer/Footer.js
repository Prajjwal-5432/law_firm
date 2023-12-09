import React from "react";
import "./Footer.css";
const Footer = () => {
  const socials = ["facebook", "twitter", "instagram", "pinterest"];
  return (
    <div className="footer">
      <div>
        <div className="foot-icon">
          <img src="logo.png" alt="logo" />
        </div>
        <div>
          <ul className="foot-buttons">
            <li>Home</li>
            <li>Attorneys</li>
            <li>Practice Area</li>
            <li>About us</li>
          </ul>
        </div>
        <div className="socials">
          {socials.map((social) => (
            <img src={`${social}.png`} key={social} alt={social} />
          ))}
        </div>
      </div>
      <div className="copyright">
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
