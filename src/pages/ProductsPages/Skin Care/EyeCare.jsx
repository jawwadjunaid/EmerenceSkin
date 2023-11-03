import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Carousel from "react-bootstrap/Carousel";
import BtnModal from "../../../components/Modal/BtnModal";
import "./EyeCare.css";

const EyeCare = () => {
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
                  srcSet="/Images/ProductImages/Eyecare/Peptide.jpg"
                  className="d-block w-100"
                  alt="Slide 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  loading="lazy"
                  srcSet="/Images/ProductImages/Eyecare/Saffron.jpg"
                  className="d-block w-100"
                  alt="Slide 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  loading="lazy"
                  srcSet="/Images/ProductImages/Eyecare/VitaminK.jpg"
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
                  EYECARE
                </Typography>
              </CardContent>

              <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
                Formula
              </Typography>
              <Typography>
                ⁃ Peptide Eye Serum
                <br></br>⁃ Saffron Peptide Eye Serum
                <br></br>⁃ Vitamin K, Arnica Montana Concoction for dark circles and wrinkles
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
                <h6 className="mt-3">Peptide Eye Serum</h6>
                <Typography>
                  {/* Add description for Peptide Eye Serum */}
                </Typography>
                <h6 className="mt-3">Saffron Peptide Eye Serum</h6>
                <Typography>
                  {/* Add description for Saffron Peptide Eye Serum */}
                </Typography>
                <h6 className="mt-3">Vitamin K, Arnica Montana Concoction</h6>
                <Typography>
                  {/* Add description for Vitamin K, Arnica Montana Concoction */}
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

export default EyeCare;
