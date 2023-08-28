import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("https://api.github.com/users/chiqua-glitch")
      .then((res) => console.log(res.data));
  });
  return <div className="App"></div>;
}

export default App;
