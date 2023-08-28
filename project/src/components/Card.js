import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.flags.png} />
      <div>
        <p>{item.population.toLocaleString("fra")}</p>
        <p>{item.translations.fra.common}</p>
      </div>
    </div>
  );
};

export default Card;
