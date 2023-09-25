import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import EcommerceProducts from './EcommerceProducts';
const CustomerCase = () => {
  return (
    <>
    <div>
      <Navbar/>
      <div className="position-relative  p-0 m-0">
        <img
          src="/Images/customercase1.jpg"
          alt="About Us"
          className="img-fluid w-100 h-50"
          style={{ filter: "brightness(50%)" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
         
            <h1 className="text-light ">Customer Cases</h1>
            <p className='d-flex text-white justify-content-center'><Link className='nav-link text-danger' to="/"> Home  
        </Link> / Customer Case
        </p>
            <button className="btn btn-primary btn-lg">Get A Quote</button>
          </div>
        </div>

        <EcommerceProducts/>


        <div className="text-center m-5 mt-5">
            <h1>Send Your Ideas To Get A Quote</h1>
            <p>
              Let's Help You Build Your Skin Care Brand, No Matter Your Project
              Is Complicated Or Simple
            </p>
            <button type="button" className="btn btn-primary ">
              Get A Quote
            </button>
          </div>
      <Footer/>
    </div>
    </>
  );
}

export default CustomerCase;
