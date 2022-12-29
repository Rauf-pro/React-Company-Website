import React from 'react';
import './testimonial.css'



const Testimonial = () => {
    const data = [
        {
           "img": "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
           "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, praesentium.",
           "name": "Jon Doe",
           "position": "Full stack software developer"
        },
        {
           "img": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
           "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, praesentium.",
           "name": "Paul",
           "position": "UI/UX designer"

        },
        {
            "img": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, praesentium.",
            "name": "Miller",
            "position": "Javascript developer"
 
         },
         {
            "img": "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, praesentium.",
            "name": "Silvia",
            "position": "Node js developer"
 
         },
         {
            "img": "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, praesentium.",
            "name": "Tomas",
            "position": "Nust js developer"
 
         },
         {
            "img": "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, praesentium.",
            "name": "Emily",
            "position": "Vue js developer"
 
         },
         {
            "img": "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, praesentium.",
            "name": "Djo",
            "position": "Next developer"
 
         },
         {
            "img": "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, praesentium.",
            "name": "Jacob",
            "position": "Angular developer"
 
         },
         {
            "img": "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, praesentium.",
            "name": "Michel",
            "position": "Django developer"
 
         },
         
          
    ]
  return (
    <div className='container testimonial-section'>
        <div className="section_title">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className='content-card'>
                <img src={item.img} alt="img"  />
                <p>{item.content}</p>
                <span className='name'>{item.name}</span>
                <p>{item.position}</p>

                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial