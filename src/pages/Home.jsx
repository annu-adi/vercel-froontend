import React from 'react';
import Hero from "../components/Heroe";
import Biography from "../components/Biography";
import Departments from "../components/Departments";

import MessageForm from "../components/MessageForm";

const Home = () => {
  return (
    <>
   
   <Hero title={"Welcome to ZeeCare Medical Institute | Your trusted Healthcare provider"}
  imageUrl={"/images.jpg"}
   />
    <Biography imageUrl={"/hospital1.jpg"}/>
    <Departments/>
    <MessageForm/>
    
    </>
    
  )
}

export default Home