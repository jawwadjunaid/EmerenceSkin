import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Carousel from "react-bootstrap/Carousel";
import BtnModal from "../../../components/Modal/BtnModal";
import "./PoreMinimiser.css";

const PoreMinimiser = () => {
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
                  srcSet="/Images/ProductImages/PoreMinimiser/B3PCAserum.jpg"
                  className="d-block w-100"
                  alt="Slide 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  loading="lazy"
                  srcSet="/Images/ProductImages/PoreMinimiser/Glycolicacid.jpg"
                  className="d-block w-100"
                  alt="Slide 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  loading="lazy"
                  srcSet="/Images/ProductImages/PoreMinimiser/HyalurnicAcid.jpg"
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
                  PORE MINIMISER
                </Typography>
              </CardContent>

              <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
                Formula
              </Typography>
              <Typography>
                ⁃ Hyaluronic Acid, Salicylic Acid and Allantoin Pore Minimiser Serum
                <br></br>⁃ B3, Lactic Acid and Zinc PCA Serum
                <br></br>⁃ Glycolic Acid, Lactic Acid, Witch Hazel with Hyaluronic Acid Pore Minimiser Serum
              </Typography>
              <Typography level="body-sm" sx={{ mt: 3 }}>
                (- Order - Sample <b>( MOQ 500g) </b> Or <b>Bulk</b>)
              </Typography>
              <div className="getQuoteModel mt-4" style={{ width: "100px" }}>
                <BtnModal buttonSize="large" />
              </div>
              {/* <div className="productDescription mt-3">
                <h3>DESCRIPTION</h3>
                <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
                  PRODUCT SPECIFICATION
                </Typography>
                <h6 className="mt-3">Hyaluronic Acid, Salicylic Acid and Allantoin Pore Minimiser Serum</h6>
                <Typography>
                 
                </Typography>
                <h6 className="mt-3">B3, Lactic Acid and Zinc PCA Serum</h6>
                <Typography>
                  
                </Typography>
                <h6 className="mt-3">Glycolic Acid, Lactic Acid, Witch Hazel with Hyaluronic Acid Pore Minimiser Serum</h6>
                <Typography>
                 
                </Typography>
            
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PoreMinimiser;
