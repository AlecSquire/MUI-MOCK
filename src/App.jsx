import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import React from "react";
import MultiActionAreaCard from "./components/MultiActionAreaCard";
import ButtonBaseDemo from "./components/ButtonBaseDemo";
import "./App.css";

import { Avatar, Container, Typography } from "@mui/material";
import MensCircle from "./pages/MensCircle.jsx";
import Workshops from "./pages/Workshops.jsx";
import MentorShip from "./pages/Mentorship.jsx";
import Home from "./pages/Home.jsx";

function Founder() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Founder: Harry Wilder</Typography>
      <Typography variant="h6">Services</Typography>
      <Avatar
        src={"/src/assets/harry.jpeg"}
        sx={{
          width: 100,
          height: 100,
        }}
      />
    </Container>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/mens-circle" element={<MensCircle />} />
            <Route path="/mentorship" element={<MentorShip />} />
            <Route path="/workshops" element={<Workshops />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
