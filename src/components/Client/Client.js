import React from "react";
import "./Client.css";

const Card = ({ name }) => {
  return (
    <div className="client-card">
      <img src={`${name}.png`} alt={name} />
      <p>{name}</p>
      <p>Ceo of Hunt</p>
      <p>
        Amet minim mollit non deserunt ullamco est <br />
        sit aliqua dolor do amet sint. Velit officia <br />
        consequatduis enim velit mollit Exer. sit <br />
        aliqua dolor do amet sint. Velit officia
      </p>
    </div>
  );
};

const Client = () => {
  const cards = ["Jane Cooper", "Devon Lane", "Robert Fox"];
  return (
    <div className="client">
      <div className="client-heading">
        <p>
          What says our
          <br /> happy Clients
        </p>
        <div className="arrow-btns">
          <button>{"<-"}</button>
          <button>{"->"}</button>
        </div>
      </div>
      <div className="client-cards">
        {cards.map((card) => (
          <Card key={card} name={card} />
        ))}
      </div>
    </div>
  );
};

export default Client;
