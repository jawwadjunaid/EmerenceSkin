import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import BtnModal from "../../../components/Modal/BtnModal";

const FootCare = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="Container d-flex m-5 justify-content-center align-items-center ">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                style={{ color: "black" }}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                style={{ color: "black" }}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                style={{ color: "black" }}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/Images/ProductImages/FootCare/lavenderandaArgan.jpg"
                  className="d-block w-100"
                  alt="Sl-1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/Images/ProductImages/FootCare/lavenderandhemp.jpg"
                  className="d-block w-100"
                  alt="sl-2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/Images/ProductImages/FootCare/PumkinLemon.jpg"
                  className="d-block w-100"
                  alt="sl-3"
                />
              </div>
            </div>
            <button
              style={{ color: "black" }}
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              style={{ color: "black" }}
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="productDetails" style={{ marginLeft: "80px" }}>
            <CardContent>
              <Typography
                sx={{ mt: 1, fontWeight: "xl", text: "center" }}
                level="body-lg"
              >
                FOOT CARE & HAND CARE
              </Typography>
            </CardContent>

            <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
              Formula
            </Typography>
            <Typography>
              ⁃ Lavender and hemp Foot lotion<br></br>⁃ Lavender and Argan
              Extract Hand Cream<br></br>⁃ Vitamin C + Vitamin B3 Face Wash
              <br></br>⁃ Pumpkin & Lemon Hand Cream
            </Typography>
            <Typography level="body-sm" sx={{ mt: 3 }}>
              (- Order - Sample <b>( MOQ 500g) </b> Or <b>Bulk</b>)
            </Typography>
            <div className="getQuoteModel mt-4" style={{ width: "100px" }}>
              <BtnModal style={{ width: "100%" }} />
            </div>
            <div className="productDescription mt-3">
              <h3>DESCRIPTION</h3>
              <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
                PRODUCT SPECIFICATION
              </Typography>
              <h6 className="mt-3">Salicylic Acid Face Wash</h6>
              <Typography>
                ⁃ Ideal for oily and acne-prone skin.<br></br>⁃ Helps to remove
                excess oil and dead skin cells.
              </Typography>
              <h6 className="mt-3">Mendelic Acid and Tea Tree Oil Face Wash</h6>
              <Typography>
                ⁃ Gentle and effective for all skin types, including sensitive
                skin <br></br>⁃ Helps to cleanse and exfoliate the skin without
                over-drying it
              </Typography>
              <h6 className="mt-3">Vitamin C + Vitamin B3 Face Wash</h6>
              <Typography>
                ⁃ Suitable for all skin types, including dry, oily, and
                combination skin.<br></br>⁃ Helps to brighten and even out the
                skin tone.
              </Typography>
              <h6 className="mt-3">Glycolic Acid Face Wash</h6>
              <Typography>
                ⁃ Exfoliating face wash that is ideal for all skin types, except
                for sensitive skin.<br></br>⁃ Helps to remove dead skin cells
                and reveal brighter, smoother skin beneath.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FootCare;
