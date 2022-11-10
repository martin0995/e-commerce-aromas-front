import React from "react";
import Logo from "../img/logo.jpg";
import "../Styles/Navbar.css";
import GrillaDeProductos from "./GrillaDeProductos";

const Home = () => {
  const imgStyles = {
    heigth: "150px",
    width: "150px",

    objectPosition: " center",
  };

  return (
    <div>
      <div className="corner-ribbon">
        <div className="corner-ribbon__inner">
          <div className="corner-ribbon__ribbon"></div>
        </div>
      </div>
      <div className="m-0 row justify-content-center">
        <img src={Logo} style={imgStyles} alt="logo" />
      </div>
      <GrillaDeProductos />
    </div>
  );
};

export default Home;
