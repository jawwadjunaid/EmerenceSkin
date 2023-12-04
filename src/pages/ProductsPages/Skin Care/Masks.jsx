import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Carousel from "react-bootstrap/Carousel";
import BtnModal from "../../../components/Modal/BtnModal";
import "./Masks.css";

const Masks = () => {
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
                  srcSet="/Images/ProductImages/Masks/MA.jpeg"
                  className="d-block w-100"
                  alt="Slide 1"
                />
              </Carousel.Item>
              {/* <Carousel.Item>
                <img
                  loading="lazy"
                  srcSet="/Images/ProductImages/Masks/GreenTea.jpg"
                  className="d-block w-100"
                  alt="Slide 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  loading="lazy"
                  srcSet="/Images/ProductImages/Masks/Rejuvenating.jpg"
                  className="d-block w-100"
                  alt="Slide 3"
                />
              </Carousel.Item> */}
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
                  MASKS
                </Typography>
              </CardContent>

              <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
                Formula
              </Typography>
              <Typography>
                ⁃ Rejuvenating Frankincense Face Mask
                <br></br>⁃ Apha Arbutin and B3 for Skin Glow
                <br></br>⁃ Green Tea, Retinol and Jojoba Oil Mask for Mature Skin
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
                <h6 className="mt-3">Rejuvenating Frankincense Face Mask</h6>
                <Typography>
                 
                </Typography>
                <h6 className="mt-3">Apha Arbutin and B3 for Skin Glow</h6>
                <Typography>
                  
                </Typography>
                <h6 className="mt-3">Green Tea, Retinol and Jojoba Oil Mask for Mature Skin</h6>
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

export default Masks;
