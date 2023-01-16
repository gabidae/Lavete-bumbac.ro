import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.facebook.com/profile.php?id=100083148214091">
          <FacebookIcon />
        </a>
      </div>
      <p> &copy; 2023 lavete-bumbac.ro</p>
    </div>
  );
}

export default Footer;
