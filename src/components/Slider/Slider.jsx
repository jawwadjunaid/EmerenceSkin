import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


import { Carousel,  } from 'react-responsive-carousel';

import Modal from '../Modal/BtnModal';
import  './Slider.css';



const images = [
  '/Images/bg-img2-min.jpg', // Replace with your image URLs or import images
  '/Images/bg-img1-min.jpg',
  '/Images/bg-img.jpg',
];
const Slider =()=>{
  const settings = {
    showArrows: true,
    showThumbs: false,
    infiniteLoop: true,
    autoPlay: true,
    stopOnHover: true,
    interval: 2000, // Adjust the interval as needed (in milliseconds)
  };
  return (
 
<>

<div className="full-width-carousel">
    
      <Carousel {...settings} showStatus={false} showIndicators={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`} />
            <div  className="position-absolute button-container" >
         <Modal buttonSize="large"/>
        </div>
          </div>
        ))}
      </Carousel>
    </div>
    {/* <div>
    <Carousel>
      <Carousel.Item>
        <img srcSet="/Images/bg-img2-min.jpg" loading='lazy' className="d-block w-100" alt="Slide 1" />
        <div  className="position-absolute button-container" >
         <Modal buttonSize="large"/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img srcSet="/Images/bg-img1-min.jpg" loading='lazy' className="d-block w-100" alt="Slide 2" />
        <div  className="position-absolute button-container" >
         <Modal buttonSize="large"/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img srcSet="/Images/bg-img.jpg" loading='lazy' className="d-block w-100" alt="Slide 3" />
        <div  className="position-absolute button-container" >
         <Modal buttonSize="large"/>
        </div>
      </Carousel.Item>
    </Carousel>
    </div> */}

</>
 
  );
}

export default Slider;

