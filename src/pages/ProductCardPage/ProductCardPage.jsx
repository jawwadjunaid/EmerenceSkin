import React from "react";

import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Carousel from "react-bootstrap/Carousel";
import BtnModal from "../../components/Modal/BtnModal";
import "./ProductCardPage.css";

const ProductCardPage = () => {
  return (
    <>
      
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {/* Image Slider */}
            <Carousel>
              <Carousel.Item>
                <img
                  loading="lazy"
                  srcSet="/Images/ProductImages/Facewash/FO.jpeg"
                  className="d-block w-100"
                  alt="Slide 1"
                />
              </Carousel.Item>
              {/* <Carousel.Item>
                <img
                  loading="lazy"
                  srcSet="/Images/ProductImages/Facewash/Salicylic.jpg"
                  className="d-block w-100"
                  alt="Slide 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  loading="lazy"
                  srcSet="/Images/ProductImages/Facewash/Mendelic.jpg"
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
                  FACEWASH
                </Typography>
              </CardContent>

              <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
                Formula
              </Typography>
              <Typography>
                ⁃ Salicylic Acid for oily and acne-prone skin
                <br></br>⁃ Mendelic acid and tea tree oil face wash
                <br></br>⁃ Vitamin C + Vitamin B3 Face Wash
                <br></br>⁃ Glycolic Acid Face Wash
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
                <h6 className="mt-3">Salicylic Acid Face Wash</h6>
                <Typography>
                 
                </Typography>
                <h6 className="mt-3">Mendelic Acid and Tea Tree Oil Face Wash</h6>
                <Typography>
                 
                </Typography>
                <h6 className="mt-3">Vitamin C + Vitamin B3 Face Wash</h6>
                <Typography>
                
                </Typography>
                <h6 className="mt-3">Glycolic Acid Face Wash</h6>
                <Typography>
               
                </Typography>
             
              </div> */}
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default ProductCardPage;
