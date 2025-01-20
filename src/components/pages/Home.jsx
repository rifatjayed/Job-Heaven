import React, { useEffect } from "react";
import Hero from "../Hero";

const Home = () => {
  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <div>
      <Hero></Hero>
    </div>
  );
};

export default Home;
