import React from "react";
import { Link } from "react-router-dom";
import Banner from "../assets/background-lavete.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="headerContainer">
        <h1> Lavete de bumbac </h1>
        <p>
          Comercializam lavete din bumbac destinate atat profesionistilor cat si
          utilizatorilor casnici.
        </p>
        <Link to="/menu">
          <button> COMANDA AICI </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
