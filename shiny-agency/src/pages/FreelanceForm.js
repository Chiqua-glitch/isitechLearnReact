import React from "react";
import Navigation from "../components/Navigation";
import freelanceProfiles from "./Freelances/index";
import Card from "../components/Card";
import { useEffect } from "react";
import axios from "axios";

const Freelance = () => {
  useEffect(() => {
    axios
      .get("http://localhost:8000/survey")
      .then((res) => console.log(res.data));
  }, []);
  return (
    <div>
      <Navigation />
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          picture={profile.picture}
          title={profile.name}
        />
      ))}
    </div>
  );
};

export default Freelance;
