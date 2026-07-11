import React from 'react'
import { Link } from 'react-router-dom';
import {FaPhone, FaLocationArrow} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
//import "./App.css"


const Footer = () => {
      const hours =[
        {
            id:1,
            day:"Holiday",
            time:"9:00 AM - 11:00 PM",
        },
        {
            id:2,
            day:"Tuesday",
            time:"12:00 PM - 12:00 AM",
        },
        {
            id:3,
            day:"Wednesday",
            time:"10:00 AM - 10:00 PM",
         },
         {
            id:4,
            day:"Thursday",
            time:"9:00 AM - 9:00 PM",
         },
         {
            id:5,
            day:"Monday",
            time:"3:00 PM - 9:00 PM"
         },
         {
            id:6,
            day:"Saturday",
            time:"9:AM - 3:00 PM",
         },
      ];



  return (
    <>
    <footer>
        <hr />
        
        <div className='cont container'>

        
            <div>
                <img src="/hospital.jpg" alt="logo" className="logo-img" />
            </div>
            <div>
                <h4>Quick Link</h4>
                <ul>
                  <li>  <Link to={"/"}>Home</Link></li>
                   <li> <Link to={"/appointment"}>Appointment</Link></li>
                   <li> <Link to={"/about"}>About</Link></li>
                </ul>
            </div>
            <div>
                <h4>Hours</h4>
                {hours.map((element)=>{
                return(
                  <li key={element.id}>
                    <span >{element.day}</span>
                    <span>{element.time}</span>
                  </li>
                );
                })}
            </div>
<div>
    <h4>Contact</h4>
    <div>
        <FaPhone/>
        <span>999-999-999</span>
    </div>
    <div>
        <MdEmail/>
    <span>zeecar@gmail.com</span>
</div>
<div><FaLocationArrow />
<span>Karachi, Pakistan</span>
</div>
        </div>
        </div>
    </footer>
    </>
  )
}

export default Footer