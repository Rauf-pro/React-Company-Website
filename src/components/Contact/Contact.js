import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="container contact-section">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
          <div className="image-class">
            <img
              src="https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
          <div className="contact-form-design">
            <div className="text-center">
              <h5>Contact Form</h5>
            </div>
            <form>
              <div className="contact-form">
                <label className="form-label">Name</label>
                <input type="text" 

                />
              </div>
              <div className="contact-form">
                <label className="form-label">E-mail</label>
                <input type="text" 
                  
                />
              </div>
              <div className="contact-form">
                <label className="form-label">Service you need</label>
                <select className="custom-select">
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>UI/UX Design</option>
                  <option>Digital Marketing</option>

                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
