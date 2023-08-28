import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const data = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
    "*",
    "-",
    "+",
    "=",
    "/",
  ];
  const [calc, setCalc] = useState([]);

  function handlerClick(e) {
    e.preventDefault();
    calc.push({
      content: e.target.textContent,
    });
    calc.map((e, i) => {
      console.log(e.content);
    })
  }
  return (
    <div className="App">
      {data.map((e, i) => (
        <button key={i} onClick={(e) => handlerClick(e)}>
          {e}
        </button>
      ))}
    </div>
  );
}

export default App;
