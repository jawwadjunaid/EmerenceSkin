import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Carousel from "react-bootstrap/Carousel";
import BtnModal from "../../../components/Modal/BtnModal";
import './PoreMinimiser.css';
const PoreMinimiser = () => {
  return (
    <>
      <Navbar />
      <div>
      
        <div className="Container d-flex m-5 justify-content-center align-items-center ">

        <div>
            <Carousel>
              <Carousel.Item>
                <img loading='lazy'
                  srcSet="/Images/ProductIanges/PoreMinimiser/B3 PCA serum.jpg"
                  className="d-block w-100"
                  alt="Slide 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img loading='lazy'
                  srcSet="/Images/ProductIanges/PoreMinimiser/Glycolicacid.jpg"
                  className="d-block w-100"
                  alt="Slide 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img loading='lazy'
                  srcSet="/Images/ProductIanges/PoreMinimiser/HyalurnicAcid.jpg"
                  className="d-block w-100"
                  alt="Slide 2"
                />
              </Carousel.Item>
            
            </Carousel>
          </div>

        <div className="productDetails" style={{ marginLeft: "80px" }}>
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
            ⁃ Hyaluronic Acid, Salicylic Acid and Allantoin Pore Minimiser Serum<br></br>⁃ B3, Lactic Acid and Zinc PCA Serum<br></br>⁃ Glycolic Acid, Lactic Acid, Witch Hazel with Hyaluronic Acid Pore Minimiser Serum

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
              for sensitive skin.<br></br>⁃ Helps to remove dead skin cells and
              reveal brighter, smoother skin beneath.
            </Typography>
          </div>
        </div>
      </div>

      </div>
      <Footer />
    </>
  );
};

export default PoreMinimiser;
