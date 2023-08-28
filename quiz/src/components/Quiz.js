import React, { useState } from "react";
import { question } from "../data/Questions";

const Quiz = () => {
  const [content, setContent] = useState("");
  const [response, setResponse] = useState([]);
  const [count, setCount] = useState(0);
  const [end, setEnd] = useState(true);

  function handlerClick(event) {
    event.preventDefault();

    if (end) {
      response.push({
        content: content,
      });
    }
    if (content != "" && count < question[0].length - 1) {
      setCount(count + 1);
    }

    if (count == question[0].length - 1) {
      setEnd(false);
    }

    console.log(response);
  }

  return (
    (end && (
      <div className="card">
        {question[0]
          .filter((e) => e.content == question[0][count].content)
          .map((e, i) => (
            <p key={i}>{e.content}</p>
          ))}
        <form>
          <input
            type="text"
            placeholder="Votre réponse"
            onChange={(event) => setContent(event.target.value)}
          />
          <input
            type="submit"
            value="Suivant"
            onClick={(event) => handlerClick(event)}
          />
        </form>
      </div>
    )) || (
      <div className="card">
        <p>Voici votre résultat :</p>
        <ul>
          {response.map((e, i) => (
            <li key={i}>{e.content} {question[1][i].response == e.content ? "✓" : "☓ la réponse est : "+ question[1][i].response}</li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Quiz;
