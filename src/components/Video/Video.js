import React from 'react';
import ReactPlayer from 'react-player'
import './video.css'

const Video = () => {
    const data = [
        {
            id: 1,
            url:"https://www.youtube.com/watch?v=-_X6PhkjpzU",
            title: "Work process of our team"

        },
        {
            id: 2,
            url:"https://www.youtube.com/watch?v=-_X6PhkjpzU",
            title: "Work process of our team"

        },
        {
            id: 3,
            url:"https://www.youtube.com/watch?v=-_X6PhkjpzU",
            title: "Work process of our team"

        },
        {
            id: 4,
            url:"https://www.youtube.com/watch?v=-_X6PhkjpzU",
            title: "Work process of our team"

        },
        {
            id: 5,
            url:"https://www.youtube.com/watch?v=-_X6PhkjpzU",
            title: "Work process of our team"

        },
        {
            id: 6,
            url:"https://www.youtube.com/watch?v=-_X6PhkjpzU",
            title: "Work process of our team"

        },
        
    ]
  return (
    <div className='container video'>
       <div className="section_title">
        <h5>Video</h5>
        <span className="line"></span>
      </div>
      <div className="row">
          {data.map((item,index) => (
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
               <div className='video-details'>
               <ReactPlayer url={item.url} controls playing={false} width="auto" height="300" />
               </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Video