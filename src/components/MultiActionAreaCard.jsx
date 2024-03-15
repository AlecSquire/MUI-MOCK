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
          height="240"
          image="src/assets/hand.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            HumanRewild
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Men's Wellness Circle is a safe haven for men seeking balance,
            strength, and fulfillment in their lives. Our mission is to provide
            a nurturing space where men can explore various facets of wellness,
            from mental and emotional health to physical fitness and beyond.....
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="text" color="success" size="large">
          Book a free Consultation
        </Button>
      </CardActions>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="text" color="success" size="large">
          The Wellness Survey
        </Button>
      </CardActions>
    </Card>
  );
}
