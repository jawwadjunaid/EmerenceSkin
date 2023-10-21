import React from "react";
import "./main.css";
import CompanyValueCard from "./CompanyValueCard/CompanyValueCard";
import CompanyDevelopment from "./CompanyDevelopment/CompanyDevelopment";
import CompanyDesign from "./CompanyDesign/CompantDesign";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Accordians from "./Accordians/Accordians";
import Slider from "./Slider/Slider";
import "@fontsource/ubuntu"; // Defaults to weight 400
import "@fontsource/ubuntu/400.css"; // Specify weight
import "@fontsource/ubuntu/400-italic.css";
import CompanyLayout from "./CompanyLayout/CompanyLayout";

const Home = () => {
  return (
    <>
      <Slider />
      <CompanyValueCard />

      <div className="justify-content-around align-content-center text-center mt-5 m-4">
        <h1>All-In-One Solution For Skincare Brands Manufacturing</h1>
        <p>
          We have years of experience manufacturing skin care products and are
          professional in each service section. We strive to serve the needs of
          each customer well and make your business success so that customers
          can focus on their core business in the market.
        </p>
      </div>

      <CompanyDevelopment />
      <CompanyLayout/>
      <CompanyDesign />

      <WhyChooseUs />
      <Accordians />
    </>
  );
};

export default Home;

