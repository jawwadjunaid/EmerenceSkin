import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Carousel from "react-bootstrap/Carousel";

import Modal from '../Modal/BtnModal';
import  './Slider.css';

const Slider =()=>{
  
  return (
 
<>
    <div>
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
    </div>

</>
 
  );
}

export default Slider;

