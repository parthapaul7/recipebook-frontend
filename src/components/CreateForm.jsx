import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const CreateForm = () => {
  const [steps, setSteps] = useState(1);

  return (
    <div className="outer">
      <TextField fullWidth variant="outlined" label="Title" />
      <div>.</div>
      <TextField fullWidth variant="outlined" label="Description" />
      <div>.</div>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <Button variant="contained" component="label">
          Upload Full Image
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </IconButton>
      <div>
        <p>Steps to the recipe</p>
        {Array.from({ length: steps }, (_, i) => (
          <Step key={i} index={i} steps={steps} setSteps={setSteps} />
        ))}
        <div
          onClick={() => {
            setSteps(steps + 1);
          }}
          style={{ width: "40px", marginTop: "-2.5rem", marginLeft: "auto" }}
        >
          <Fab size="small" color="secondary" aria-label="add">
            <AddIcon />
          </Fab>
        </div>
      </div>
    </div>
  );
};

function Step({ index,steps,setSteps }) {
  return (
    <div>
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Empty"
        style={{ width: 450 }}
        minRows={3}
      />
      <IconButton
        style={{ marginTop: "-1.5rem", marginLeft: "1rem" }}
        color="primary"
        aria-label="upload picture"
        component="label"
      >
        <PhotoCamera />
        <input hidden accept="image/*" type="file" />
      </IconButton>
      {index < steps-1 && (
        <IconButton
          onClick={()=>{setSteps(steps-1)}}
          style={{ marginTop: "-1.5rem", marginLeft: "auto" }}
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      )}
    </div>
  );
}
export default CreateForm;
