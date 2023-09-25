import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
const FormulaDevelopment = () => {
  return (
    <>
    <div>
        <Navbar/>
    <div className="position-relative  p-0 m-0">
        <img
          src="/Images/formuladev.jpg"
          alt="About Us"
          className="img-fluid w-100 h-50"
          style={{ filter: "brightness(60%)" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
         
            <h1 className="text-light ">Guangzhou Ariel</h1>
            <p className='d-flex text-white justify-content-center'><Link className='nav-link text-danger' to="/"> Home  
        </Link> / Formula Development
        </p>
            <button className="btn btn-primary btn-lg">Get A Quote</button>
          </div>
        </div>
        <Footer/>
        </div>
    </>
  );
}

export default FormulaDevelopment;
