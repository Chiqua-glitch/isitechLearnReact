import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navigation from "../components/Navigation";

const Countries = () => {
  const [data, setData] = useState([]);
  const [range, setRange] = useState(30);
  const [selectCountrie, setSelectCountrie] = useState("Europe");
  const continent = ["Africa", "Europe", "North America", "Asia"];
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  });

  return (
    <div>
      <Navigation />
      <h1>Counties</h1>
      <form>
        <input
          type="range"
          max="200"
          value={range}
          onChange={(event) => setRange(event.target.value)}
        />
        <div>
          {continent.map((e, i) => (
            <div key={i}>
              <label htmlFor={e}>{e}</label>
              <input
                type="radio"
                id={e}
                name="continent"
                onClick={(event) => setSelectCountrie(event.target.id)}
              />
            </div>
          ))}
        </div>
      </form>
      <div className="allCard">
        {data
          .slice(data.length - range)
          .filter((e) => e.continents[0] == selectCountrie)
          .map((e, i) => (
            <Card key={i} item={e} />
          ))}
      </div>
    </div>
  );
};

export default Countries;
