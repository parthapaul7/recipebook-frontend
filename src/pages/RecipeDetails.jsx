import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Details";
import Steps from "../components/Steps";
import axios from "axios";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const url = import.meta.env.VITE_API_URL;

const RecipeDetails = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [stepsExpanded, setSteps] = useState([]);
  async function fetchData() {
    try {
      const data = (await axios.get(url + `recipes/${id}`)).data;
      setDetail(data[0]);
      setSteps(data[0]?.expanded?.steps);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "fit-content",
            padding: "2rem 1rem 5rem 1rem",
            margin: "2rem 0",
          }}
        >
          <Details {...detail} />
          <Steps steps={stepsExpanded} />
        </Box>
      </Container>
    </>
  );
};

export default RecipeDetails;
