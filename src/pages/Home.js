import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/DadandBaby.jpg";
import "../styles/Home.css";
import MenuItem from "../components/MenuItem";
import cbst from "../assets/cbst.png";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <div>
        <h1> JobSkill </h1>
        <p> We Connect Your Skills to Your Future Job</p>
        <Link to="/menu">
          <button> SKILL ASSESSMENT </button>
        </Link>
        </div>
  
      </div>
    </div>
  );
}

export default Home;
