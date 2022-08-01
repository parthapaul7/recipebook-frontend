import React from "react";
import CreateForm from "../components/CreateForm";

import axios from "axios";
const url = import.meta.env.VITE_API_URL;

const Create = () => {

  async function uploadFullRecipe(data) {
    try {
      const response = await axios.post(url + "recipes", data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function uploadRecipeDetail(data) {
    try {
      const response = await axios.post(url + "recipe_details", data);
      return response.data;
    } catch (error) {
      return error;
    }
  }
  async function uploadImage(data) {
    try {
      const response = await axios.post(
        url + "recipe_details/upload_img",
        { images: data },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
  return( 
  <div style={{padding:"1rem"}}>
    <h1 style={{textAlign:"center"}}>Create Your Own  Recipe</h1>
  <CreateForm uploadImage={uploadImage} uploadRecipeDetail={uploadRecipeDetail} uploadFullRecipe={uploadFullRecipe} />;
  </div>
  ) 
};

export default Create;
