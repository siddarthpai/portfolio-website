import * as React from 'react';
import "./blog.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imageflutter from '../../static/images/flutter.jpeg';
import { useNavigate } from 'react-router-dom';

export default function ImgMediaCard() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `./blog1`; 
    navigate(path);
  }
  return (
    <div>
      <h1 className='text-white content-center text-center text-xl mb-20 mt-20 lg:text-3xl'>Welcome to my Blog Section!<br/> This is where I occassionaly type out my learnings and stuff I love to learn and explore.</h1>
      <Card id="card1" className='m-5 font' sx={{ maxWidth: 700 }}>
      <CardMedia 
        component="img"
        image={imageflutter}
        alt="test"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Introduction to Flutter 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          In this blog, we covered what is Flutter, how to get started with flutter and how to build your first app using Flutter!  
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" onClick={routeChange}>Read Article!</Button>
      </CardActions>
    </Card>

    </div>
    
  );
}