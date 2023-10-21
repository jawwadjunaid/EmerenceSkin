import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
//import { Carousel } from 'react-responsive-carousel';

import Modal from '../Modal/BtnModal';
import  './Slider.css';
const Slider = () => {
  return (
  
//       <Carousel   >
//     <div className='position-relative  '>
//         <img src="/Images/bg-img2.jpg" alt='bg1' />
//         <div  className="position-absolute top-50 bottom-100 start-50 translate-middle text-center w-100 ">
//         <Modal/>
//         </div>
//     </div>

//     <div className='position-relative '>
//         <img src="/Images/bg-img1.jpg" alt='bg2'/>
//         <div  className="position-absolute top-50 start-50 translate-middle text-center w-100">
//         <Modal/>
//     </div>
//     </div>
//     <div className='position-relative '>
   
//         <img src="/Images/bg-img.jpg" alt='bg3' />
//         <div  className="position-absolute top-50 start-50 translate-middle text-center w-100">
//         <Modal/>
//     </div>
//     </div>
// </Carousel> 
<>

<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/Images/bg-img2.jpg" className="d-block w-100" alt="Sl-1"/>
      <div  className="position-absolute top-50 bottom-100 start-50 translate-middle text-center w-100 ">
         <Modal/>
        </div>
    </div>
    <div className="carousel-item">
      <img src="/Images/bg-img1.jpg" className="d-block w-100" alt="sl-2"/>
      <div  className="position-absolute top-50 bottom-100 start-50 translate-middle text-center w-100 ">
         <Modal/>
        </div>
    </div>
    <div className="carousel-item">
      <img src="/Images/bg-img.jpg" className="d-block w-100" alt="sl-3"/>
      <div  className="position-absolute top-50 bottom-100 start-50 translate-middle text-center w-100 ">
         <Modal/>
        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</>
 
  );
}

export default Slider;

