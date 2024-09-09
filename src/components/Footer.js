import "./footer.css";
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";

import React from 'react';


function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size ={20} style={{color:"white",marginRight:"2rem"}}/>
                    <div>
                    <p>Jamaa Taiba,iriss</p>
                    <p>Morocco.</p>
                    </div>
                </div>
                <div className="phone">
                  <h4>
                    <FaPhone size ={20} style={{color:"white",marginRight:"2rem"}}/>
                    +212 762273504</h4>
                    </div>

                    <div className="email">
                  <h4>
                    <FaMailBulk size ={20} style={{color:"white",marginRight:"2rem"}}/>
                    ensaoa@gmail.com</h4>
                    </div>
            </div>
            <div className="right">
              <h4>About me </h4>
              <p>As a software engineering student, I am curious and dedicated 
                individual with a passion for technology and problem-solving.
                 I am constantly exploring new programming languages, frameworks,
                  and methodologies to expand my skill set.
              </p>
              <div className="social">
              <FaFacebook size ={30} style={{color:"white",marginRight:"1rem"}}/>
              <FaTwitter size ={30} style={{color:"white",marginRight:"1rem"}}/>
              <FaLinkedin size ={30} style={{color:"white",marginRight:"1rem"}}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer