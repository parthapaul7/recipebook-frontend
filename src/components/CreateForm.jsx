import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const CreateForm = ({ uploadImage, uploadRecipeDetail, uploadFullRecipe }) => {
  const [steps, setSteps] = useState(1);
  const [formData, setFormData] = useState({});
  const [uploadStatus, setUploadStatus] = useState("No file selected");
  const [formSteps, setFormSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("handle submit");
    const detialsData = {
      title: formData.title,
      steps: formSteps,
    };
    let id;
    try {
       id = (await uploadRecipeDetail(detialsData))._id;
    } catch (error) {
      alert(error)
      return;
    }
    const fullData = {
      ...formData,
      expanded:id,
      author: JSON.parse(localStorage.getItem("token"))._id,
    };
    try {
      const data = await uploadFullRecipe(fullData);
      console.log(data);
      alert("Recipe uploaded successfully");
    } catch (error) {
      alert(error)
      return;
    }
  }
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleDetials() {
    setFormSteps(formSteps.concat(currentStep));
    console.log(formSteps);
  }

  async function handleImage(e) {
    if (e.target.name === "mainImage") {
      setUploadStatus("uploading");
      try {
        const data = await uploadImage(e.target.files[0]);
        setFormData({ ...formData, image: data.image });
        setUploadStatus("uploaded ");
      } catch (error) {
        setUploadStatus("error");
      }
      return;
    } else {
      try {
        const data = await uploadImage(e.target.files[0]);
        return data;
      } catch (error) {
        return error;
      }
    }
  }

  return (
    <div className="outer">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <TextField
          fullWidth
          required
          variant="outlined"
          name="title"
          label="Title"
          onChange={handleChange}
        />
        <br />
        <br />
        <TextField
          fullWidth
          required
          variant="outlined"
          name="description"
          label="Description"
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" component="label">
          Upload Full Image
          <input
            hidden
            required
            accept="image/*"
            name="mainImage"
            onChange={handleImage}
            type="file"
          />
        </Button>{" "}
        {uploadStatus}
        <div>
          <h3>Steps to the recipe</h3>
          <p>
            caution: You can not edit the field after adding next step , refresh
            to resubmit
          </p>
          {Array.from({ length: steps }, (_, i) => (
            <Step
              key={i}
              index={i}
              steps={steps}
              setSteps={setSteps}
              handleImage={handleImage}
              setCurrentStep={setCurrentStep}
              currentStep={currentStep}
            />
          ))}
          <div
            onClick={() => {
              setSteps(steps + 1);
              handleDetials();
            }}
            style={{ width: "40px", marginTop: "-2.5rem", marginLeft: "auto" }}
          >
            <Fab size="small" color="secondary" aria-label="add">
              <AddIcon />
            </Fab>
          </div>
        </div>
        <br />
        <br />
        <Button variant="contained" component="label">
          Upload Recipe
          <input type="submit" hidden />
        </Button>
      </form>
    </div>
  );
};

function Step({
  index,
  steps,
  setSteps,
  handleImage,
  setCurrentStep,
  currentStep,
}) {
  const [uploadStatus, setUploadStatus] = useState("NA");
  function handleChange(e) {
    setCurrentStep({
      stepNo: index + 1,
      ...currentStep,
      [e.target.name]: e.target.value,
    });
    // console.log(currentStep);
  }

  async function handleImg(e) {
    setUploadStatus("....");
    const res = await handleImage(e);
    if (res.image) {
      setUploadStatus("Uploaded");
      setCurrentStep({ ...currentStep, image: res.image });
      return;
    }

    setUploadStatus("error");
  }

  return (
    <div style={{display:"flex"}}>
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Empty"
        style={{ width: 450 }}
        minRows={3}
        disabled={index < steps - 1}
        name="description"
        onChange={handleChange}
      />
      <IconButton
        style={{  marginLeft: "1rem" }}
        color="primary"
        aria-label="upload picture"
        component="label"
      >
        <PhotoCamera />
        <input
          hidden
          disabled={index < steps - 1}
          onChange={handleImg}
          accept="image/*"
          type="file"
        />
      </IconButton>
      <span style={{padding:"1rem 0"}}>{uploadStatus}</span>
    </div>
  );
}
export default CreateForm;
