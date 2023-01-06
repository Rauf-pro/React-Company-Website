import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import './navbarmobileview.css';



const NavbarMobileView = () => {
  return (
    <div className='responsive-mobile-view'>
        <div className="container-fluid mobile-view-header">
           <p><GiHamburgerMenu size={25}/></p>
        </div>

        <div className='mobile-nav'>
        <ul>
        <li className="nav-item">
          <Link to="home" spy={true} smooth={true} offset={100} duration={100}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Service
          </Link>
        </li>

        <li className="nav-item">
        <Link
            to="career"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Career
          </Link>
        </li>
        <li className="nav-item">
        <Link
            to="video"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Video
          </Link>
        </li>
        <li className="nav-item">
        <Link
            to="team"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Team
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="testimonial"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Testimonial
          </Link>
        </li>

        <li className="nav-item">
        <Link
            to="feedback"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Feedback
          </Link>
        </li>
       
        <li className="nav-item">Contact</li>
        <li className="nav-item">Subscription</li>
      </ul>
        </div>
    </div>
  )
}

export default NavbarMobileView