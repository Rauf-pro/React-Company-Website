import React from "react";
import Fade from 'react-reveal/Fade';
import "./subscription.css";

const Subscription = () => {
  return (
    <div className="container-fluid subscription">
      <div className="container">
        <div className="row">
          <Fade left>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="subscription_title">
                <h5>News Letter. Subscribe Today</h5>
              </div>
              <div className="subscription-form">
                <input type="text" placeholder="Your E-mail" />
              </div>
              <div className="subscription_button">
                <p>subscription</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
