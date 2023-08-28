import axios from "axios";
import React, { useEffect } from "react";

const Card = ({ title, min, max, img }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>
        <span>{min}</span>
        <span>{max}</span>
      </p>
    </div>
  );
};

export default Card;
