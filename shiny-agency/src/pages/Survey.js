import React from "react";
import Navigation from "../components/Navigation";
import { Link, useParams } from "react-router-dom";

const Survey = () => {
  const questionNumber = useParams();
  return (
    <div>
      <Navigation />
      <h1>Survey</h1>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber.question}</h2>
      <Link to="/client">Questionnaire client</Link>
      <Link to="/freelance">Questionnaire freelance</Link>
    </div>
  );
};

export default Survey;
