import React from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

import CardContent from "@mui/joy/CardContent";
import Carousel from "react-bootstrap/Carousel";
import Typography from "@mui/joy/Typography";
import "./HairConditionersandMasks";
import BtnModal from "../../../components/Modal/BtnModal";

const HairConditionersandMasks = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="Container d-flex m-5 justify-content-center align-items-center ">
          <div>
            <Carousel>
              <Carousel.Item>
                <img
                  loading="lazy"
                  srcSet="/Images/ProductImages/HairConditioners/fordrydamaged.jpg"
                  className="d-block w-100"
                  alt="Slide 1"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="productDetails" style={{ marginLeft: "40px" }}>
            <CardContent>
              <Typography
                sx={{ mt: 1, fontWeight: "xl", text: "center" }}
                level="body-lg"
              >
                HAIR CONDITIONER AND MASKS
              </Typography>
            </CardContent>

            <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
              Formula
            </Typography>
            <Typography>
              ⁃ Lavender and hemp Foot lotion<br></br>⁃ Lavender and Argan
              Extract Hand Cream<br></br>⁃ Pumpkin & Lemon Hand Cream
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
        {/* <Card
            className="col me-5"
            sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
          >
            <CardOverflow>
              <AspectRatio sx={{ minWidth: 200 }}>
                <img
                  src="/Images/ProductImages/HairConditioners/fordrydamaged.jpg"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="body-xs">Bluetooth Headset</Typography>
              <Link
                href="#product-card"
                fontWeight="md"
                color="neutral"
                textColor="text.primary"
                overlay
                endDecorator={<ArrowOutwardIcon />}
              >
                For Dry Damaged Hair with Biotin, Argan Oil, Placental Extracts
                and Hydrolysed Keratin
              </Link>

              <Typography
            level="title-lg"
            sx={{ mt: 1, fontWeight: 'xl' }}
            endDecorator={
              <Chip component="span" size="sm" variant="soft" color="success">
                Lowest price
              </Chip>
            }
          >
            2,900 THB
          </Typography>
              <Typography level="body-sm">
            (Only <b>7</b> left in stock!)
          </Typography>
            </CardContent>
            <CardOverflow>
              <Modal />
            </CardOverflow>
          </Card> */}
      </div>
      <Footer />
    </>
  );
};

export default HairConditionersandMasks;
