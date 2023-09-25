import React from 'react'
import { Footer, Navbar } from "../components";
import {Link} from "react-router-dom";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="position-relative  p-0 m-0">
        <img
          src="/Images/aboutus.jpg"
          alt="About Us"
          className="img-fluid w-100 h-50"
          style={{ filter: "brightness(20%)" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
         
            <h1 className="text-light ">Guangzhou Ariel</h1>
            <p className='d-flex text-white justify-content-center'><Link className='nav-link text-danger' to="/"> Home  
        </Link> / About
        </p>
            <button className="btn btn-primary btn-lg">Get A Quote</button>
          </div>
        </div>
        <div className="text-center m-5 mt-4">
          <h1>Company Profile</h1>
          <p>
            Ariel Cosmetic is a positioning skin care product manufacturer, we
            focus on high-quality, competitive, flexible order quantity, on-time
            delivery, etc. Ariel Cosmetic Co., Ltd. was established in 1998 and
            is headquartered in Guangzhou. The company has always adhered to
            the principle of customer first, and we believe that through our
            efforts, we can escort the products of small and medium-sized
            enterprises. Ariel Cosmetic mainly provides skin care product
            labeling services for the European and North American markets. We
            mainly supply cream, serum, toner, lotion, oil, facial mask, and
            other products.
          </p>
        </div>
        <div
          className="d-flex justify-content-between m-5 mt-4"
          style={{
            background: "url('/Images/mission.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
            padding: "20px",
            filter: "brightness(85%)",
            
          }}
        >
          <div className="w-25 text-white">
            <h5 className=''>Mission Vision</h5>
          </div>
          <div className="border-start border-primary ps-3 text-white">
            <h5>Mission:</h5>
            <p>Help our customers build their brand in the simplest way.</p>
          </div>
          <div className="border-start border-primary ps-4 text-white">
            <h5>Vision:</h5>
            <p>
              To be the leading company in skincare private label by our
              innovation and service.
            </p>
          </div>
        </div>
        <div className=" ms-3">
        <div className="container mt-5 p-5">
          <div className="row">
            <div className="col-md-6">
              <h1>Our Values</h1>
              <ul>
                <li>Quality</li>
                <li>Innovation</li>
                <li>Customer Satisfaction</li>
                <li>Integrity</li>
                <li>Honesty integrity</li>
                <li>Hard-working</li>
                <li>Professional</li>
                <li>Willing to share</li>
                <li>Love the world and family</li>
              </ul>
            </div>
            <div className="col-md-6 ">
              <img
                src="/Images/values.jpg"
                alt="Your Image"
                className="img-fluid"
                style={{ width: "800px", height: "400px" }}
              ></img>
            </div>
            </div>
          </div>
        </div>
        <div className="card mt-5 3e-2 ms-3 ">
        <div className="text-center m-5 mt-5">
          <h1>Send Your Ideas To Get A Quote</h1>
          <p>
            Let's Help You Build Your Skin Care Brand, No Matter Your Project Is
            Complicated Or Simple
          </p>
          <button type="button" className="btn btn-primary">
            Get A Quote
          </button>
        </div>
        </div>
      <Footer />
    </>
  )
}

export default AboutPage