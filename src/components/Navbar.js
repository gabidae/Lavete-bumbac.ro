import React, { useState } from "react";
import Logo from "../assets/logo-lavete.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link to="/"> Acasa </Link>
          <Link to="/menu"> Produse </Link>
          {/* <Link to="/about"> Despre noi </Link> */}
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Acasa </Link>
        <Link to="/menu"> Produse </Link>
        {/* <Link to="/about"> Despre noi </Link> */}
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
