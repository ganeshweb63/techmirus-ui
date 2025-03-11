import { Outlet } from "react-router";
import NavBar from "./NavBar";
import FooterComponent from "./Footer";

const BodyComponent = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <FooterComponent></FooterComponent>
    </>
  );
};

export default BodyComponent;
