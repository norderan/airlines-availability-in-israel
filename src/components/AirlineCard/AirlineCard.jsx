import React from "react";

const AirlineCard = ({ airline }) => {
  return (
    <div className="airline-card">
      <h2>{airline.name}</h2>
      <p>{airline.country}</p>
    </div>
  );
};

export default AirlineCard;
