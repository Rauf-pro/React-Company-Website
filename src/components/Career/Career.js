import React, {useState, useEffect} from 'react';
import { FaLowVision } from 'react-icons/fa';
import './career.css'

const Career = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const [data, setData] = useState([]);

    const loadPostData = () => {
        fetch(url, {
            method: "GET"
        }).then(res=>res.json())
        .then((result)=>{

            if(result){
                setData(result);
                console.log(result)
            }


        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
      loadPostData();
    },[]);
  return (
    <div className='container career'>
        <div className="section_title">
        <h5>Career</h5>
        <span className="line"></span>
      </div>
      <div className="row">
         
      </div>
    </div>
  )
}

export default Career