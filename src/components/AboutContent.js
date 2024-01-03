import "./AboutContentStyle.css"
import React from 'react'
import { Link } from "react-router-dom"
import Agile from "../assets/Agile.jpg"
import inter from "../assets/inter.png"

const AboutContent = () => {
  return (
    <div className="about">
     <div className="left">
          <h1>Who AM I?</h1>
          <p>I am an agile and Java developer. I currently create apps in Mendix, Java, Nodejs. </p>
          <Link to="/contact">
               <button className="btn">Contact</button>
          </Link>
     </div>
     <div className="right">
          <div className="img-container">
               <div className="img-stack top">
                    <img src={Agile} className="img" alt="true"/>
               </div>
               <div className="img-stack top">
                    <img src={inter} className="img" alt="true"/>
               </div>
          </div>
     </div>
    </div>
  )
}

export default AboutContent