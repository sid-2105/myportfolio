import "./Footerstyle.css";
import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";


const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Devnagar Awas Yojna</p>
              <p>Prayagraj, 211019</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />+91  9454500340
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />siddhuji0509@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>This is me Siddharth Mishra, persuing Bachelor of Technology in specialization with Computer Science and Engineering.Programming languages known Java, C, Python, HTML, CSS etc.</p>
          <div className="social">
            <a href="https://twitter.com/Siddhu0509?t=QTCaR_p09WzsFXq1_LwDIQ&s=08">
            <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
           <a href="https://www.linkedin.com/in/siddharth-mishra-363194225">
           <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
           </a>
            <a href="https://instagram.com/perfectly_imperfect_sid?igshid=YmMyMTA2M2Y=">
            <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              </a> 
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
