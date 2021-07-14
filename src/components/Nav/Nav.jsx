import React from "react";
import logoWeather from "../../img/logoWeather.png"
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="Container">
          <span className="navbar-brand">
            <img
              id="WeatherLogo"
              src={logoWeather}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            <span className="title">Weather App</span>
            
          </span>
        </div>
      </Link>
      
      <Link to="/contact">
              <span className="contact">Contact</span>
        </Link>
    </nav>
  );
}

export default Nav;
