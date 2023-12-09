import React from "react";
import "./PracticeArea.css";

const Image = ({ text }) => {
  return (
    <div className="image-container">
      <img src={`${text}.png`} alt={text} />
      <div className="overlay-text">{text}</div>
    </div>
  );
};

const PracticeArea = () => {
  const images = [
    "Buisness Law",
    "Partnership Law",
    "Real Estate Law",
    "Buisness Law2",
    "Landlord Disputes",
    "Elder Abuse",
  ];
  return (
    <div className="practice">
      <p>Area of Practices</p>
      <div className="practice-images">
        {images.map((image) => (
          <Image text={image} key={image} />
        ))}
      </div>
    </div>
  );
};

export default PracticeArea;
