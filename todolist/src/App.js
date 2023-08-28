import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [text, setText] = useState("");

  function handlerClick(el) {
    el.preventDefault();
    console.log(products)
    products.push({
      name: text,
    });
  }
  return (
    <div className="App">
      <form>
        <div>
          <input
            type="text"
            name="product"
            id="product"
            onChange={(el) => setText(el.target.value)}
          />
        </div>
        <button type="submit" onClick={(el) => handlerClick(el)}>
          Envoyer
        </button>
      </form>
      <div>
        {
          products.map((e, i) => (
            <div key={i}>
              <p>{e.name}</p>
              <button onClick={() => console.log(products.splice(i))}>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
