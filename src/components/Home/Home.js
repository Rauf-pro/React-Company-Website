import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="container-fluid home" id="home">
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
                "Customer Service"
              ],
              autoStart: true,
              loop: true,
              delay: 5
            }}
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          suscipit alias totam! Quam officiis est iste earum laudantium ut quia
          aliquam ipsam nostrum labore iusto molestiae neque reiciendis enim
          perspiciatis, et veniam cumque voluptate quidem impedit? Voluptas
          exercitationem quis ex?
        </p>
        <span className="view-details-home-button">View Details</span>
      </div>
    </div>
  );
};

export default Home;
