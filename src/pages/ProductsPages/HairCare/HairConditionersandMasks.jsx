import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import BtnModal from '../../../components/Modal/BtnModal';
import Carousel from 'react-bootstrap/Carousel';

const HairConditionersandMasks = () => {
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
                  src="/Images/ProductImages/HairConditioners/fordrydamaged.jpg"
                  className="d-block w-100"
                  alt="Slide 1"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-6">
            {/* Content */}
            <div className="productDetails" style={{ marginLeft: '40px' }}>
              <CardContent>
                <Typography sx={{ mt: 1, fontWeight: 'xl', text: 'center' }} level="body-lg">
                  HAIR CONDITIONER AND MASKS
                </Typography>
              </CardContent>

              <Typography level="title-lg" sx={{ mt: 1, fontWeight: 'xl' }}>
                Formula
              </Typography>
              <Typography>
                ⁃ For Dry Damaged Hair with Biotin, Argan Oil, Placental Extracts, and Hydrolyzed Keratin
              </Typography>
              <Typography level="body-sm" sx={{ mt: 3 }}>
                (- Order - Sample <b>( MOQ 500g) </b> Or <b>Bulk</b>)
              </Typography>
              <div className="getQuoteModel mt-4" style={{ width: '100px' }}>
                <BtnModal buttonSize="large" />
              </div>
              {/* <div className="productDescription mt-3">
                <h3>DESCRIPTION</h3>
                <Typography level="title-lg" sx={{ mt: 1, fontWeight: 'xl' }}>
                  PRODUCT SPECIFICATION
                </Typography>
                <h6 className="mt-3">For Dry Damaged Hair</h6>
                <Typography>
                  ⁃ Ideal for dry and damaged hair.<br></br>⁃ Contains Biotin, Argan Oil, Placental Extracts, and Hydrolyzed Keratin for hair repair.
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

export default HairConditionersandMasks;
