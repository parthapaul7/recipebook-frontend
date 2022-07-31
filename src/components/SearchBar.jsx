import React, { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./SearchBar.css";

import { debounce } from "../utils/index.js";

const Searchbar = ({fetchData}) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    debounce(handleSearch,500);
    return () => {
    }
  }, [search])
  
  function handleSearch() {
    fetchData(search);
    console.log(search);
  }

  return (
    <div className="outer">
      <TextField
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        fontSize="large"
        fullWidth
        variant="outlined"
        placeholder="Search Recipe"
        color="secondary"
        focused
      />
    </div>
  );
};

export default Searchbar;
