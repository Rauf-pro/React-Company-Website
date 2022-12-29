import React from "react";
import "./about.css";
import about from "../../src/image/about.jpg";

const About = () => {
  return (
    <div className="container about-section">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img src={about} alt="about_image" height="400px" width="400px" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h5>About</h5>
              <span className="line"></span>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              cupiditate eligendi, maxime velit veniam, dolores cumque hic quos
              molestiae praesentium laudantium labore magni, iusto quis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
