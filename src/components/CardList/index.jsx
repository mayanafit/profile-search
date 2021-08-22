import React from "react";
import Card from "../Card";
import "./card-list.css";

const CardList = ({ data }) => {
  if (!data) {
    return <p className="fetching-state">Loading...</p>;
  }

  if (data && data.length < 1) {
    return <p className="fetching-state">Sorry, no profile match. :(</p>;
  }

  return (
    <div className="card-list">
      {data.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          email={item.email}
          userId={item.id}
        />
      ))}
    </div>
  );
};

export default CardList;
