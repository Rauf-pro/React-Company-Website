import React from "react";
import "./service.css";

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

  return (
    <div className="container service-section">
      {/* Section title */}

      <div className="section_title">
        <h5>Services</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {servicedata.map((item, index) =>(
            <>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    
                </div>
            </>
        ))}
      </div>
    </div>
  );
};

export default Service;
