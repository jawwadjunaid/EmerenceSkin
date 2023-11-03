import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Carousel from "react-bootstrap/Carousel";
import BtnModal from "../../../components/Modal/BtnModal";
import "./AntiAging.css";

const AntiAging = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {/* Image Slider */}
            <Carousel>
              <Carousel.Item>
                <img
                  loading="lazy"
                  srcSet="/Images/ProductImages/AntiAging/Hydroxysomes.jpg"
                  className="d-block w-100"
                  alt="Slide 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  loading="lazy"
                  srcSet="/Images/ProductImages/AntiAging/LupineExtract.jpg"
                  className="d-block w-100"
                  alt="Slide 2"
                />
              </Carousel.Item>
              {/* Add more carousel items as needed */}
            </Carousel>
          </div>
          <div className="col-md-6">
            {/* Content */}
            <div className="productDetails" style={{ marginLeft: "40px" }}>
              <CardContent>
                <Typography
                  sx={{ mt: 1, fontWeight: "xl", text: "center" }}
                  level="body-lg"
                >
                  ANTI AGING
                </Typography>
              </CardContent>

              <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
                Formula
              </Typography>
              <Typography>
                ⁃ Hydroxysomes Adenosine, Retinaldehyde, Resveratrol
                <br></br>⁃ Matryxl with Hyaluronic Acid
                <br></br>⁃ Retinol with Hyaluronic Acid
                <br></br>⁃ Vitamin A, C, E and Hyaluronic Acid Cream and Serum
                <br></br>⁃ Lupine Extract and Pisum Sativum with Hyaluronic Acid Serum
              </Typography>
              <Typography level="body-sm" sx={{ mt: 3 }}>
                (- Order - Sample <b>( MOQ 500g) </b> Or <b>Bulk</b>)
              </Typography>
              <div className="getQuoteModel mt-4" style={{ width: "100px" }}>
                <BtnModal buttonSize="large" />
              </div>
              <div className="productDescription mt-3">
                <h3>DESCRIPTION</h3>
                <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
                  PRODUCT SPECIFICATION
                </Typography>
                <h6 className="mt-3">Salicylic Acid Face Wash</h6>
                <Typography>
                  ⁃ Ideal for oily and acne-prone skin.
                  <br></br>⁃ Helps to remove excess oil and dead skin cells.
                </Typography>
                {/* Add more description items as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AntiAging;
