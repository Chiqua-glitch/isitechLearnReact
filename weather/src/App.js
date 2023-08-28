import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import data from "./data/dataCard";

function App() {
  return (
    <div className="App">
      {data.map((e, i) => (
        <Card key={i} title={e.title} min={e.min} max={e.max} img={e.img} />
      ))}
    </div>
  );
}

export default App;
