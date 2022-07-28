import React from 'react'
import TextField from '@mui/material/TextField';
import "./SearchBar.css"

const Searchbar = () => {
  return (
    <div className="outer">
    <TextField fullWidth variant="outlined" placeholder='Search Recipe' color='secondary' focused/>
    </div>
  )
}

export default Searchbar