import ButtonBaseDemo from "../components/ButtonBaseDemo";
import CustomDrawer from "../components/CustomDrawer";
import MultiActionAreaCard from "../components/MultiActionAreaCard";
import { NavLink, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <MultiActionAreaCard />
      <CustomDrawer />
      <ButtonBaseDemo />
      <nav>
        <ul>
          <li>
            <Link to="/mens-circle">Men's Circle</Link>
          </li>
          <li>
            <Link to="/mentorship">Mentorship</Link>
          </li>
          <li>
            <Link to="/workshops">Workshops</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
