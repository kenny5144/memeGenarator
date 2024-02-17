import React from "react";
import "./Header.css";
import TrollFace from "/imng/TrollFace.png";

const Header = () => {
  return (
    <div>
      <div className="head">
        <img className="Trollimg" src={TrollFace} alt="" />
        <span>
          <h2> Meme Generator</h2>
          <p>React Course - Project 3</p>
        </span>
      </div>
    </div>
  );
};

export default Header;
