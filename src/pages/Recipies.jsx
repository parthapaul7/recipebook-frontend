import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const url = import.meta.env.VITE_API_URL;

const Recipies = () => {
  const loggedin = false;

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchDta() {
    setLoading(true);
    setRecipes((await axios.get(url + "recipes")).data);
    setLoading(false);
  }
  useEffect(() => {
    fetchDta();
  }, []);

  return (
    <>
      <div>
        {loading && <h2 style={{textAlign:"center", marginTop:"5rem"}}>Loading Recipes.... </h2>}
        {recipes.map((e, i) => (
          <Card
            key={i}
            image={e.image}
            title={e.title}
            description={e.description}
            id={e._id}
          />
        ))}
      </div>
    </>
  );
};

export default Recipies;
