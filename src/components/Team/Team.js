import React from "react";
import "./Team.css";

const Card = ({ name }) => {
  return (
    <div className="team-card">
      <img src={`${name}.png`} alt={name} />
      <div className="team-member">
        <p>{name}</p>
        <p>100 Cases</p>
      </div>
    </div>
  );
};

const Team = () => {
  const team = [
    "Danial Def",
    "Sanfole",
    "Cesforila",
    "Colleen",
    "Haldone",
    "Nik Jeo",
  ];
  return (
    <div className="team">
      <p>Our Team</p>
      <div className="members">
        {team.map((member) => (
          <Card key={member} name={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
