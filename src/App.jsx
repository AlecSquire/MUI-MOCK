import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import React from "react";
import MultiActionAreaCard from "./components/MultiActionAreaCard";
import ButtonBaseDemo from "./components/ButtonBaseDemo";
import "./App.css";
<<<<<<< HEAD
<<<<<<< Updated upstream
import SearchAppBar from "./components/SearchAppBar";
=======

>>>>>>> unfinished-custom-drawer
import { Avatar, Container, Typography } from "@mui/material";
=======
import CustomDrawer from "./components/CustomDrawer.jsx";

>>>>>>> Stashed changes
import MensCircle from "./pages/MensCircle.jsx";
import Workshops from "./pages/Workshops.jsx";
import MentorShip from "./pages/Mentorship.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const links = ["/mens-circle", "/mentorship", "/workshops"];

  return (
    <Router>
      <div>

        <SearchAppBar />

        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/mens-circle" element={<MensCircle />} />
            <Route path="/mentorship" element={<MentorShip />} />
            <Route path="/workshops" element={<Workshops />} />
          </Route>
        </Routes>

        <CustomDrawer />

      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens-circle" element={<MensCircle />} />
        <Route path="/mentorship" element={<MentorShip />} />
        <Route path="/workshops" element={<Workshops />} />
      </Routes>
    </Router>
  );
}

export default App;
