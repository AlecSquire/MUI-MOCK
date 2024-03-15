import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Avatar } from "@mui/material";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: "100vw" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          minHeight="100%"
          maxWidth="99%"
          image="src/assets/Screenshot 2024-03-14 at 13.21.27.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            HumanRewild
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We are a widespread group with over 6,000 species, ranging across
            all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="text" color="success" size="large" fullWidth="true">
          Book A Free Consultation
        </Button>
      </CardActions>
    </Card>
  );
}
