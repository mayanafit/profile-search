import React from "react";
import "./card.css";

const Card = ({ name, email, userId }) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${userId}?set=set4`}
        alt="avatar"
        className="image"
      />
      <div className="text-container">
        <h4 className="text">{name}</h4>
        <p className="text">{email}</p>
      </div>
    </div>
  );
};

export default Card;
