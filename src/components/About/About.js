import React from "react";
import "./about.css";
import about from "../../image/about.jpg";
import { FcSlrBackSide, FcWorkflow, FcShop } from "react-icons/fc";

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
            <div className="section_title">
              <h5>About</h5>
              <span className="line"></span>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              cupiditate eligendi, maxime velit veniam, dolores cumque hic quos
              molestiae praesentium laudantium labore magni, iusto quis!
            </p>
            <div className="card-design">
              <div className="about-list-item">
                <div className="about-details-icon">
                  <p>
                    <FcSlrBackSide size={50} />
                  </p>
                </div>
                <div>
                  <h6>Perfect day out</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, ipsam?
                  </p>
                </div>
              </div>
            </div>
            <div className="card-design">
              <div className="about-list-item">
                <div className="about-details-icon">
                  <p>
                    <FcWorkflow size={50} />
                  </p>
                </div>
                <div>
                  <h6>Perfect day out</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, ipsam?
                  </p>
                </div>
              </div>
            </div>
            <div className="card-design">
              <div className="about-list-item">
                <div className="about-details-icon">
                  <p>
                    <FcShop size={50} />
                  </p>
                </div>
                <div>
                  <h6>Perfect day out</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, ipsam?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
