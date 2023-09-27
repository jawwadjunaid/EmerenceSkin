import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Chip from '@mui/joy/Chip'
import Modal from '../Modal/BtnModal';
const Slider = () => {
  return (
    <Carousel>
    <div className='position-relative '>
        <img src="/Images/bg-img.jpg" alt='bg1' />
        <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
        <Modal/>
        </div>
    </div>

    
    <div className="position-absolute top-50 start-50 translate-middle text-start w-100">
        <img src="/Images/bg-img1.jpg" alt='bg2'/>
        <Modal/>
    </div>


    <div className="position-absolute top-50 start-50 translate-middle text-start w-100">
        <img src="/Images/bg-img2.jpg" alt='bg3' />
        Modal
    </div>
   
</Carousel>
  );
}

export default Slider;




// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// 

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>