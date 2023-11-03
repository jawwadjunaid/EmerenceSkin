import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Carousel from "react-bootstrap/Carousel";
import BtnModal from "../../../components/Modal/BtnModal";
import "./HandmadeSoaps.css";

const HandmadeSoaps = () => {
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
                  loading='lazy'
                  srcSet="/Images/ProductImages/HandmadeSoaps/CarrierOils.jpg"
                  className="d-block w-100"
                  alt="Slide 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  loading='lazy'
                  srcSet="/Images/ProductImages/HandmadeSoaps/Glycerine.jpg"
                  className="d-block w-100"
                  alt="Slide 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  loading='lazy'
                  srcSet="/Images/ProductImages/HandmadeSoaps/SoapwithEssen.jpg"
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
                  HAND MADE SOAPS
                </Typography>
              </CardContent>

              <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
                Formula
              </Typography>
              <Typography>
                ⁃ Glycerine Soap
                <br></br>⁃ Soap with Essen Oils
                <br></br>⁃ Carrier Oils and Fruit Peels
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
                <h6 className="mt-3">Glycerine Soap</h6>
                <Typography>
                  {/* Add description for Glycerine Soap */}
                </Typography>
                <h6 className="mt-3">Soap with Essen Oils</h6>
                <Typography>
                  {/* Add description for Soap with Essen Oils */}
                </Typography>
                <h6 className="mt-3">Carrier Oils and Fruit Peels</h6>
                <Typography>
                  {/* Add description for Carrier Oils and Fruit Peels */}
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

export default HandmadeSoaps;
