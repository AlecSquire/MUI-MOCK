import ButtonBaseDemo from "../components/ButtonBaseDemo";
import CustomDrawer from "../components/CustomDrawer";
import MultiActionAreaCard from "../components/MultiActionAreaCard";
import { NavLink, Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <MultiActionAreaCard />
      <CustomDrawer />
      <ButtonBaseDemo />
    </>
  );
}
