import React from "react";
import "./header.css";
import SpotifyLogo from "../Assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={SpotifyLogo} alt="Logo do Spotifake" />
      </Link>

      <Link className="header__link" to="/">
        <h1>Spotifake</h1>
      </Link>
    </div>
  );
};

export default Header;
