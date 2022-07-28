import React from 'react'
import TextField from '@material-ui/core/TextField'
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const CreateForm = () => {
  return (
    <div className='outer'>
        <TextField fullWidth variant="outlined" label="Title"/>
        <div>.</div>
        <TextField fullWidth variant="outlined" label="Description"/>
        <div>.</div>
        <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>

    </div>
  )
}

export default CreateForm