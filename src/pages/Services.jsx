import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Modal from "../components/Modal/BtnModal";

const Services = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="position-relative p-0 m-0">
          <img 
            
           
            srcSet="/Images/Service-min.jpg"
            alt="Services"
            className="img-fluid w-100 h-10"
            style={{ height: "450px" }}
          />
          <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
            <h1 className="text-black ">
              Skin Care Manufacturing Total Solutions
            </h1>
            
            <Modal />
          </div>
        </div>
        <div className="text-center m-5">
          <h2 className="fw-bold">
            Emerence Skin Are Not Only Producers, But Also Skin Care Product
            Supply Chain Integrators
          </h2>
        </div>

        <div className="">
          <div className=" ms-3">
            <div className="container mt-5 p-5">
              <div className="row">
                <div className="col-md-6">
                  <h2>Optimize The Product</h2>
                  <ul>
                    <li>
                      Good formula and packaging are the foundation of the
                      product. We focus on continuously creating value for
                      customers. We care about every detail to ensure that your
                      product can achieve good sales in the market.
                    </li>
                  </ul>
                 
                  <h2>Brand Driven</h2>
                  <ul>
                    <li>
                      With good formula & packaging and strict quality control
                      conditions, you can focus more on the growth of your brand
                      and focus on longer-term growth to quickly drive your
                      brand.
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 ">
                  <img
                    src="/Images/customercase.jpg"
                    alt="Your Image"
                    className="img-fluid"
                    style={{ width: "800px", height: "400px" }}
                  ></img>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center m-5">
            <h1>The Service Advantage Of Emerence Skin & Hair</h1>
          </div>
          <div>
            <div className="row row-cols-1 row-cols-md-3 mt-5 m-4 g-4 shadow-lg p-3 mb-5 bg-body rounded">
              <div className="col">
                <div className="card shadow p-3 mb-5 bg-body rounded">
                  <img
                    src="/Images/favcons/cam.png"
                    className="card-img-left logo-img"
                    alt="Logo"
                    style={{ height: "70px", width: "70px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Free Design & Sampling</h5>
                    <p className="card-text">
                    Emerence Skin & Hair value-added services can reduce your
                      operating costs directly at project's beginning stage, and
                      allow you to start your business at the lowest cost.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow p-3 mb-5 bg-body rounded">
                  <img
                    src="/Images/favcons/warehouse.png"
                    className="card-img-left logo-img"
                    alt="Logo"
                    style={{ height: "70px", width: "70px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Free warehousing support</h5>
                    <p className="card-text">
                      We understand that many customers do not have suitable
                      space to store their goods, and sometimes they temporarily
                      need to store their goods for the peak sales season.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow p-4 mb- bg-body rounded">
                  <img
                    src="/Images/favcons/callcenter.png"
                    className="card-img-left logo-img"
                    alt="Logo"
                    style={{ height: "70px", width: "70px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">After-sales</h5>
                    <p className="card-text">
                      With 24/7/365 After-sales Support and one-to-one
                      professional consultation,  Emerence Skin & Hair hopes to solve
                      your problems as quickly as possible.
                    </p>
                  </div>
                </div>
              </div>
           
            </div>
          </div>
          <div className="card m-5">
            <div className="text-center m-5 mt-5">
              <h1>Send Your Ideas To Get A Quote</h1>
              <p>
                Let's Help You Build Your Skin Care Brand, No Matter Your
                Project Is Complicated Or Simple
              </p>
              <Modal />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Services;
