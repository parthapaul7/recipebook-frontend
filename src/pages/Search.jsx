import React, { useEffect, useState } from "react";
import axios from "axios";
import Searchbar from "../components/SearchBar";
import Card from "../components/Card";
const url = import.meta.env.VIT_API_URL;

const Recipies = () => {
  const [recipes, setRecipes] = useState([]);
  const [messege, setMessege] = useState("Search for a recipe");
  const [loading, setLoading] = useState(false);

  async function fetchDta(search) {
    if (search !== "") {
      setLoading(true);
      try {
        const data = (
          await axios.post(url+"recipes/search", {
            search,
          })
        ).data;
        setRecipes(data);
        if (data.length === 0) {
          setMessege("No recipes found");
        } else {
          setMessege(
            `${data.length} Recipe${data.length === 1 ? "" : "s"} found`
          );
        }
      } catch (error) {
        setMessege(error?.message);
      }
      setLoading(false);
      return;
    }
    setMessege("Search for a recipe");
  }

  return (
    <div>
      <Searchbar fetchData={fetchDta} />
      <h1 style={{ textAlign: "center" }}>{messege}</h1>
      {loading && <h2 style={{ textAlign: "center" }}>Loading.... </h2>}
      {recipes.map((e, i) => {
        return (
          <Card
            key={i}
            image={e.image}
            title={e.title}
            description={e.description}
            id={e._id}
          />
        );
      })}
    </div>
  );
};

export default Recipies;
