import React from "react";
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <p>Subscribe Our Newsletter</p>
      <div className="newsLetter-input">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Enter your Email" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default NewsLetter;
