import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Home = ({ theme, handleChangeTeam }) => {
  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={() => handleChangeTeam()}>
        {theme === "light" ? (
          <p>
            <BsMoonStarsFill size={40} />
          </p>
        ) : (
          <p>
            <BsFillSunFill size={40} />
          </p>
        )}
      </div>
      <Fade left>
        <div className="container home-content">
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Web Development",
                  "Mobile Development",
                  "UI/UX Design",
                  "Product Marketing",
                  "Digital Marketing",
                  "Customer Service",
                ],
                autoStart: true,
                loop: true,
                delay: 5,
              }}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            suscipit alias totam! Quam officiis est iste earum laudantium ut
            quia aliquam ipsam nostrum labore iusto molestiae neque reiciendis
            enim perspiciatis, et veniam cumque voluptate quidem impedit?
            Voluptas exercitationem quis ex?
          </p>
          <span className="view-details-home-button">View Details</span>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
