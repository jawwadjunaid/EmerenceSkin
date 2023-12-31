import React from "react";
import { Footer, Navbar } from "../components";
import { FaMapMarkerAlt, FaEnvelope, FaFax } from "react-icons/fa";
import Modal from "../components/Modal/BtnModal";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="position-relative"
        style={{
          loading:"lazy",
          backgroundImage: `url('/Images/ContactUs.jpg')`, // Replace with your background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "700px", // Set your desired height
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          filter: "brightness(100%)",
        }}
      >
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h2>Contact Us</h2>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="4"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-2">
              <div className="card">
                <div className="card-body">
                  <h2>Contact Information</h2>
                  <div className="mb-3">
                    <FaMapMarkerAlt /> London, UK TW33TG
                  </div>
                  <div className="mb-3">
                    <FaEnvelope /> info@emerenceskincare.com
                  </div>
                  <div className="mb-3">
                    <FaFax /> +44 7533 494723
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
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

export default ContactPage;
