import { useCallback, useEffect, useState } from "react";
import { useKeyPress } from "@uidotdev/usehooks";
import "./App.css";
function App() {
  //button content
  const number = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
  const specCharac = ["AC", "+/-", "%"];
  const calcs = ["/", "*", "-", "+", "="];
  const [calc, setCalc] = useState("");
  const [bool, setBool] = useState(true);
  const [history, setHistory] = useState([]);
  const [styleBool, setStyleBool] = useState(true);
  const handleKeyPress = useCallback((event) => {
    if (event.key === "Backspace") {
      setCalc(calc.toString().slice(0, -1));
    }
  });
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  });
  function handlerClick(el) {
    if (el === "=") {
      if (
        calc !== "" &&
        calc.toString().slice(-1) !== "+" &&
        calc.toString().slice(-1) !== "-" &&
        calc.toString().slice(-1) !== "*" &&
        calc.toString().slice(-1) !== "/"
      ) {
        setCalc(eval(calc));
        setBool(!bool);
        setHistory([
          ...history,
          {
            calc: calc,
            result: eval(calc),
          },
        ]);
      } else {
        setCalc("Error");
      }
    } else if (el === "AC") {
      setCalc("0");
    } else if (el !== "=" && el !== "AC" && bool) {
      if (
        (el === "-" || el === "*" || el === "/" || el === "+") &&
        (calc === "" ||
          calc.toString().slice(-1) === "+" ||
          calc.toString().slice(-1) === "-" ||
          calc.toString().slice(-1) === "*" ||
          calc.toString().slice(-1) === "/")
      ) {
        return;
      }
      setCalc(calc + el);
    }
    if (
      !bool &&
      el !== "=" &&
      el !== "AC" &&
      el !== "-" &&
      el !== "*" &&
      el !== "/" &&
      el !== "+"
    ) {
      setCalc(el);
      setBool(!bool);
    } else if (
      !bool &&
      (el === "-" || el === "*" || el === "/" || el === "+")
    ) {
      setCalc(calc + el);
      setBool(!bool);
    }
  }
  return (
    <div className="calculatrice">
      <div className="resultat">
        <div className="history" style={{ display: styleBool ? "none" : "" }}>
          {history.map((e, i) => (
            <p key={i}>
              {e.calc} = {e.result}
            </p>
          ))}
        </div>
        <span>
          <i
            className="fa-solid fa-clock-rotate-left icon"
            onClick={() => setStyleBool(!styleBool)}
          ></i>
        </span>
        <span className="calc">{calc !== "" ? calc : "0"}</span>
      </div>
      <div className="calc">
        <div className="specCharac">
          {specCharac.map((e, i) => (
            <button
              key={i}
              onClick={(el) => handlerClick(el.target.textContent)}
            >
              {e}
            </button>
          ))}
        </div>
        <div className="number">
          {number.map((e, i) => (
            <button
              key={i}
              onClick={(el) => handlerClick(el.target.textContent)}
            >
              {e}
            </button>
          ))}
        </div>
        <div className="calcs">
          {calcs.map((e, i) => (
            <button
              key={i}
              onClick={(el) => handlerClick(el.target.textContent)}
            >
              {e}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
