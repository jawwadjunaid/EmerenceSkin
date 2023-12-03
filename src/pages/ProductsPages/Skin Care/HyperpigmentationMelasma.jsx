import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Carousel from "react-bootstrap/Carousel";
import BtnModal from "../../../components/Modal/BtnModal";
import "./HyperpigmentationMelasma.css";

const HyperpigmentationMelasma = () => {
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
                  srcSet="/Images/ProductImages/Hyperpigmentation/AlphaArbutin.jpg"
                  className="d-block w-100"
                  alt="Slide 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  loading='lazy'
                  srcSet="/Images/ProductImages/Hyperpigmentation/Glutathione.jpg"
                  className="d-block w-100"
                  alt="Slide 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  loading='lazy'
                  srcSet="/Images/ProductImages/Hyperpigmentation/KATE.jpg"
                  className="d-block w-100"
                  alt="Slide 3"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  loading='lazy'
                  srcSet="/Images/ProductImages/Hyperpigmentation/Tranexamic.jpg"
                  className="d-block w-100"
                  alt="Slide 4"
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
                  HYPER PIGMENTATION MELASMA
                </Typography>
              </CardContent>

              <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
                Formula
              </Typography>
              <Typography>
                ⁃ Alpha Arbutin, Kojic Acid, B3 Niacinamide
                <br></br>⁃ Glutathione, Kojic Acid Serum
                <br></br>⁃ Tranexamic Acid Combination Cream and Serum
                <br></br>⁃ K.A.Tx.E naturals with Alpha Arbutin, Kojic Acid, Hyaluronic Acid, and Squalane for Spot Correction and Melasma
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
                <h6 className="mt-3">Alpha Arbutin, Kojic Acid, B3 Niacinamide</h6>
                <Typography>
          
                </Typography>
                <h6 className="mt-3">Glutathione, Kojic Acid Serum</h6>
                <Typography>
             
                </Typography>
                <h6 className="mt-3">Tranexamic Acid Combination Cream and Serum</h6>
                <Typography>
            
                </Typography>
                <h6 className="mt-3">K.A.Tx.E naturals with Alpha Arbutin, Kojic Acid, Hyaluronic Acid, and Squalane for Spot Correction and Melasma</h6>
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

export default HyperpigmentationMelasma;
