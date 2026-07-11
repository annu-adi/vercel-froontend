import React from 'react';
import Hero from "../components/Heroe.jsx";

import Biography from "../components/Biography.jsx";

const AboutUs = () => {
  return (
    <>
    <Hero title={"Learn More About Us I ZeeCare Medical Institute"} 
    imageUrl={"/hospital.jpg"}/>
    <Biography imageUrl={"/hospital1.jpg"}/>
    </>
  );
};

export default AboutUs;
