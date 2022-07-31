import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {Link} from "react-router-dom"
export default function ImgMediaCard(props) {
  return (
    <Card sx={{ maxWidth: 700, margin:"2rem auto"}}>
      <CardMedia
        component="img"
        height="240"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link to={"/recipes/"+props.id}>
        <Button size="small">Learn More</Button>
        </Link >  
      </CardActions>
    </Card>
  );
}
