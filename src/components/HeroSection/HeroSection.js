import React from "react";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-heading">
          <p>You don't have to</p>
          <p>Fight them Alone.</p>
        </div>
        <div className="hero-def">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          impedit,
          <br /> delectus officia iste molestiae nulla cupiditate? Nesciunt,
          iusto est quis quos <br />
          obcaecati nemo ipsam quo. Voluptatibus sapiente consequuntur rem
          natus?
        </div>
        <div className="hero-connect">
          <img src="email.png" alt="email" />
          <input type="email" placeholder="Enter your email address" />
          <button>Let's talk</button>
        </div>
      </div>
      <div>
        <img src="person.png" alt="person" />
      </div>
    </div>
  );
};

export default HeroSection;
