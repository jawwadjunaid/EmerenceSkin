import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Carousel from "react-bootstrap/Carousel";
import BtnModal from "../../../components/Modal/BtnModal";
import "./Toner.css";

const Toner = () => {
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
                  srcSet="/Images/ProductImages/Toners/AHABHA.jpg"
                  className="d-block w-100"
                  alt="Slide 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  loading="lazy"
                  srcSet="/Images/ProductImages/Toners/B3.jpg"
                  className="d-block w-100"
                  alt="Slide 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  loading="lazy"
                  srcSet="/Images/ProductImages/Toners/GentleToner.jpg"
                  className="d-block w-100"
                  alt="Slide 3"
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
                  TONER
                </Typography>
              </CardContent>

              <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
                Formula
              </Typography>
              <Typography>
                ⁃ B3 and Hyaluronic Acid toner with Plant Extracts
                <br></br>⁃ AHA and BHA Toner
                <br></br>⁃ Grapefruit Extract Toner
                <br></br>⁃ Grape Seed Extract and Sodium PCA Toner
                <br></br>⁃ Tea Tree Oil Toner
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
                <h6 className="mt-3">B3 and Hyaluronic Acid Toner</h6>
                <Typography>
                  {/* Add description for B3 and Hyaluronic Acid Toner */}
                </Typography>
                <h6 className="mt-3">AHA and BHA Toner</h6>
                <Typography>
                  {/* Add description for AHA and BHA Toner */}
                </Typography>
                <h6 className="mt-3">Grapefruit Extract Toner</h6>
                <Typography>
                  {/* Add description for Grapefruit Extract Toner */}
                </Typography>
                <h6 className="mt-3">Grape Seed Extract and Sodium PCA Toner</h6>
                <Typography>
                  {/* Add description for Grape Seed Extract and Sodium PCA Toner */}
                </Typography>
                <h6 className="mt-3">Tea Tree Oil Toner</h6>
                <Typography>
                  {/* Add description for Tea Tree Oil Toner */}
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

export default Toner;
