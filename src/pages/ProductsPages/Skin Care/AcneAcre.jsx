import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
//import AspectRatio from "@mui/joy/AspectRatio";
//import Button from "@mui/joy/Button";
//import Card from "@mui/joy/Card";
//import CardContent from "@mui/joy/CardContent";
//import CardOverflow from "@mui/joy/CardOverflow";
//import Chip from '@mui/joy/Chip';
//import Link from "@mui/joy/Link";
//import Typography from '@mui/joy/Typography';
//import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
//import Modal from "../../../components/Modal/BtnModal";
import ProductCardPage from "../../ProductCardPage/ProductCardPage";
//import MendelicAcidSerum from '../SubSkinCare/AcneAcreProductPage/MendelicAcidSerum'

const AcneAcre = () => {
  return (
    <>
      <Navbar />
      <div>
        
          {/* <Card
            className="col me-5"
            sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
          >
            <CardOverflow>
              <AspectRatio sx={{ minWidth: 200 }}>
                <img
                  src="/Images/ProductImages/AcneCare/20%Mendelic.jpg"
                  loading="lazy"
                  alt="20%Mendelic"
                  to="/mendelicacidserum"
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="body-xs">Bluetooth Headset</Typography>
              <Link
                href="/products"
                fontWeight="md"
                color="neutral"
                textColor="text.primary"
                overlay
                endDecorator={<ArrowOutwardIcon />}
              >
                20% Mendelic Acid Serum
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
          {/* <Card
            className="col me-5"
            sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
          >
            <CardOverflow>
              <AspectRatio sx={{ minWidth: 200 }}>
                <img
                  src="/Images/ProductImages/FootCare/AzelaicAcid.jpg"
                  loading="lazy"
                  alt="AzelaicAcid"
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="body-xs">Bluetooth Headset</Typography>
              <Link
                href="/facewash"
                fontWeight="md"
                color="neutral"
                textColor="text.primary"
                overlay
                endDecorator={<ArrowOutwardIcon />}
              >
                Azelaic Acid, Zinc PCA, B3 Cream
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
       <ProductCardPage />
      </div>
      <Footer />
    </>
  );
};

export default AcneAcre;
