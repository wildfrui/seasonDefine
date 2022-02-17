import React from "react";
import "./Season.css";

const defineSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};

const seasonInfo = {
  winter: {
    text: "Brrrrrr, it's time to do some stuff at home!",
  },
  summer: {
    text: "Let's go swimming!",
  },
};

const Season = ({ latitude, month }) => {
  const season = defineSeason(latitude, month);
  return (
    <div className="season__container">
      <h1 className={`season__name season__${season}`}>{season}</h1>
      <p className="season__info">{seasonInfo[season].text}</p>
    </div>
  );
};

export default Season;
