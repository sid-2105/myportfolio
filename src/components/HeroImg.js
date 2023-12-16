import "./HeroImgStyle.css";
import React from 'react'
import home from "../assets/home.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img"
        src={home} alt="home"/>
        </div>
        <div className="content">
          <h3>Hi, I am Siddharth Mishra</h3>
          <h1>Agile and Java Developer</h1>
          <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-lite">Contact</Link>
          </div>
        </div>
      
    </div>
  )
}

export default HeroImg;