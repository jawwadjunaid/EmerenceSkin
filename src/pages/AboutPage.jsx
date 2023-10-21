import React from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
import Modal from "../components/Modal/BtnModal";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="position-relative  p-0 m-0">
        <img
          src="/Images/aboutus.jpg"
          alt="About Us"
          className="img-fluid w-100 h-10"
          
          style={{ filter: "brightness(20%)",height:"450px" }}
        />
        {/* <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
          <h1 className="text-light ">Guangzhou Ariel</h1>
          <p className="d-flex text-white justify-content-center">
            <Link className="nav-link text-danger" to="/">
              {" "}
              Home
            </Link>{" "}
            / About
          </p>
          <Modal />
        </div> */}
      </div>
      <div className="text-center m-5 mt-4">
        <h1>Company Profile</h1>
        <p>
          At Emerence, we prioritize the utilization of premium ingredients and
          implement a rigorous triple-check system to ensure the impeccable
          quality of our produce. Our exceptional expertise in formulating
          effective solutions, combined with the use of high-quality
          ingredients, stands as one of the fundamental pillars of our company.
          We are committed to becoming a valued partner in the growth of your
          business. Renowned for our private label skin, body, and hair care
          products, we consistently strive to develop ethical formulations
          tailored to meet your specific requirements. With our team of experts
          and dedicated research and development professionals, we have emerged
          as the preferred choice for both emerging and established companies
          seeking to expand their business. Our unwavering focus lies in the
          creation of outstanding brands within the realm of skin and hair care,
          emphasizing cost efficiency and the delivery of innovative,
          high-quality products. By choosing Emerence as your private label
          manufacturing partner, you gain access to our unwavering commitment to
          excellence and our drive to deliver exceptional results in the skin,
          body, and hair care industry. At Emerence, we pride ourselves on an
          array of strengths that set us apart in the private label
          manufacturing of skin, body, and hair care products. Our commitment to
          excellence extends beyond the use of high-quality ingredients and a
          meticulous triple-check system. One of our primary strengths lies in
          our exceptional research and development (R&D) capabilities. Our
          experienced and innovative R&D team possesses a deep understanding of
          the industry, allowing us to devise cutting-edge formulations that
          address specific customer needs. With a relentless pursuit of
          scientific advancements and a keen eye for emerging trends, our R&D
          team ensures that our products remain at the forefront of the market.
          Moreover, our commitment to collaboration and partnership is another
          strength that distinguishes us. We don't simply offer private label
          manufacturing services; we actively seek to become your trusted
          partner in business growth. By understanding your unique goals and
          requirements, we leverage our expertise to develop customized
          solutions that align with your brand vision. We believe that by
          fostering strong partnerships, we can collectively achieve success in
          the competitive landscape of the skin, body, and hair care industry.
          Furthermore, our emphasis on cost efficiency is a driving force behind
          our operations. We understand the importance of balancing quality with
          affordability, and our dedicated team continuously explores ways to
          optimize production processes without compromising the integrity of
          our products. This commitment enables us to deliver exceptional value
          to our partners while maintaining our unwavering commitment to
          high-quality, innovative offerings. In summary, at Emerence, we
          combine the power of our exceptional R&D capabilities, collaborative
          approach, and focus on cost efficiency to deliver outstanding private
          label skin, body, and hair care products. Partnering with us means
          gaining access to a dedicated team that prioritizes your success and
          remains at the forefront of industry trends and advancements.
        </p>
      </div>
      <div
        className="d-flex justify-content-between m-5 mt-4"
        style={{
          // background: "url('/Images/mission.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "10px",
          padding: "20px",
          filter: "brightness(85%)",
        }}
      >
        <div className="w-25 text-black">
          <h4 className="pt-4">MISSION   VISION</h4>
        </div>
        <div className="border-start border-primary ps-3 text-black">
          <h5>Mission:</h5>
          <p>Help our customers build their brand in the simplest way.</p>
        </div>
        <div className="border-start border-primary ps-4 text-black">
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
          <Modal />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
