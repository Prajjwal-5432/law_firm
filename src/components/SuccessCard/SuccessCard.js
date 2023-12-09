import React from "react";
import "./SuccessCard.css";

const Card = () => {
  return (
    <div className="card">
      <img src="gift.png" alt="Gift" />
      <p>100% Success Rate</p>
      <p>
        Amet minim mollit non deserunt ullamco est <br /> sit aliqua dolor do
        amet sint. Velit officia <br /> consequatduis enim velit mollit Exer.
      </p>
      <button>Read More</button>
    </div>
  );
};

const SuccessCard = () => {
  const cards = ["card1", "card2", "card3"];
  return (
    <div className="success-card">
      <p>Why Choose us?</p>
      <div className="cards">
        {cards.map((card) => (
          <Card key={card} />
        ))}
      </div>
    </div>
  );
};

export default SuccessCard;
