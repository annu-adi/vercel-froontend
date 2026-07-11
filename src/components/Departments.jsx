import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const departmentsArray =[
  {
    name:"Pediatrics",
    imageUrl:"doctor1.jpg",
  },
  {
  name:"Orthopedics",
  imageUrl:"doctor2.avif",
},
{
  name:"Cardiology",
  imageUrl:"doctor3.webp",
},
{
  name:"Neurology",
  imageUrl:"doctor4.avif",
},
{
  name:"Oncology",
  imageUrl:"doctor8.jpg",
},
{
  name:"Radiology",
  imageUrl:"download.jpg",
},
{
  name:"Physical Therapy",
  imageUrl:"doctor5.jpg",
},
{
name:"Dermatology",
imageUrl:"doctor6.jpg",
},
{
  name:"ENT",
  imageUrl:"doctor7.jpg",
}
];

const Departments = () => {
  const responsive = {
  extraLarge: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidersToSlide:1, //optional, default to 1.
  },
  large: {
    breakpoint: { max: 1324, min: 1005 },
    items: 3,
    slidersToSlide:1, //optional, default to 1.
  },
  medium: {
    breakpoint: { max: 1005, min: 700 },
    items: 2,
     slidersToSlide:1, //optional, default to 1.
  },
  small: {
    breakpoint: { max: 464, min: 0 },
    items: 1, 
    slidersToSlide:1, //optional, default to 1.

  },
};

  return (
    <div className='container departments'>
      <h2>Departments</h2>
      <Carousel responsive={responsive} removeArrowOnDeviceType={["medium", "small"]}>
      {departmentsArray.map((depart, index)=>{
       return(
        <div className='card' key={index}>
          <div className='depart-name'>{depart.name}</div>
          <img src={depart.imageUrl} alt={depart.name} />
        </div>
       );
        })
      }
</Carousel>
      </div>
  );
};

export default Departments