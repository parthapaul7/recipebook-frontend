import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const url = import.meta.env.VITE_API_URL;

const Recipies = () => {
  const loggedin = false;

  const [recipes, setRecipes] = useState([]);
  async function fetchDta() {
    setRecipes((await axios.get(url + "recipes")).data);
  }
  useEffect(() => {
    fetchDta();
  }, []);

  return (
    <>
      <div>
        {recipes.map((e, i) => (
          <Card
            key={i}
            image={e.image}
            title={e.title}
            description={e.description}
          />
        ))}
      </div>
    </>
  );
};

export default Recipies;
