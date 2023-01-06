import React from "react";
import "./service.css";
import { FcOk } from "react-icons/fc";
import Zoom from 'react-reveal/Zoom';

const Service = () => {
  const servicedata = [
    {
      id: 1,
      service1: "Web Development",
      service2: "Mobile App Development",
      service3: "UI/UX Design",
      service4: "Digital Marketing",
    },
    {
      id: 2,
      service1: "Web Development",
      service2: "Mobile App Development",
      service3: "UI/UX Design",
      service4: "Digital Marketing",
    },
    {
      id: 3,
      service1: "Web Development",
      service2: "Mobile App Development",
      service3: "UI/UX Design",
      service4: "Digital Marketing",
    },
    {
      id: 4,
      service1: "Web Development",
      service2: "Mobile App Development",
      service3: "UI/UX Design",
      service4: "Digital Marketing",
    },
    {
      id: 5,
      service1: "Web Development",
      service2: "Mobile App Development",
      service3: "UI/UX Design",
      service4: "Digital Marketing",
    },
    {
      id: 6,
      service1: "Web Development",
      service2: "Mobile App Development",
      service3: "UI/UX Design",
      service4: "Digital Marketing",
    },
    {
      id: 7,
      service1: "Web Development",
      service2: "Mobile App Development",
      service3: "UI/UX Design",
      service4: "Digital Marketing",
    },
    {
      id: 8,
      service1: "Web Development",
      service2: "Mobile App Development",
      service3: "UI/UX Design",
      service4: "Digital Marketing",
    },
  ];

  const colors = [
    "#CD5C5C",
    "#6495ED",
    "#088f8f",
    "#36ff25",
    "#e48c6f",
    "#ab11ce",
    "#df5be7",
    "#FFE51E",
  ];

  return (
    <div className="container service-section" id="service">
      {/* Section title */}

      <div className="section_title">
        <h5>Services</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {servicedata.map((item, index) => (
          <Zoom top>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index}>
              <div className="services">
                <span
                  className="service-number"
                  style={{ backgroundColor: colors[index] }}
                >
                  <p>{item.id}</p>
                </span>

                <div className="list-of-service">
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service1}
                  </p>
                  <span className="service_item_underline"></span>
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service2}
                  </p>
                  <span className="service_item_underline"></span>
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service3}
                  </p>
                  <span className="service_item_underline"></span>
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service4}
                  </p>
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Service;
