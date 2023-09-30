import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
//import Chip from '@mui/joy/Chip';
import Link from "@mui/joy/Link";
//import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Modal from "../../../components/Modal/BtnModal.jsx";

const EyeCare = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="row row-cols-1 row-cols-md-4 g-4 m-5">
          <Card
            className="col me-5"
            sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
          >
            <CardOverflow>
              <AspectRatio sx={{ minWidth: 200 }}>
                <img
                  src="/Images/ProductIanges/Eyecare/Peptide.jpg"
                  
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              {/* <Typography level="body-xs">Bluetooth Headset</Typography> */}
              <Link
                href="#product-card"
                fontWeight="md"
                color="neutral"
                textColor="text.primary"
                overlay
                endDecorator={<ArrowOutwardIcon />}
              >
                Peptide Eye Serum
              </Link>

              {/* <Typography
              level="title-lg"
              sx={{ mt: 1, fontWeight: 'xl' }}
              endDecorator={
                <Chip component="span" size="sm" variant="soft" color="success">
                  Lowest price
                </Chip>
              }
            >
              2,900 THB
            </Typography> */}
              {/* <Typography level="body-sm">
              (Only <b>7</b> left in stock!)
            </Typography> */}
            </CardContent>
            <CardOverflow>
              <Modal />
            </CardOverflow>
          </Card>
          <Card
            className="col me-5"
            sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
          >
            <CardOverflow>
              <AspectRatio sx={{ minWidth: 200 }}>
                <img
                  src="/Images/ProductIanges/Eyecare/Saffron.jpg"
                 
                  loading="lazy"
                  alt="Saffron"
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              {/* <Typography level="body-xs">Bluetooth Headset</Typography> */}
              <Link
                href="#product-card"
                fontWeight="md"
                color="neutral"
                textColor="text.primary"
                overlay
                endDecorator={<ArrowOutwardIcon />}
              >
                Saffron Peptide Eye Serum
              </Link>

              {/* <Typography
              level="title-lg"
              sx={{ mt: 1, fontWeight: 'xl' }}
              endDecorator={
                <Chip component="span" size="sm" variant="soft" color="success">
                  Lowest price
                </Chip>
              }
            >
              2,900 THB
            </Typography> */}
              {/* <Typography level="body-sm">
              (Only <b>7</b> left in stock!)
            </Typography> */}
            </CardContent>
            <CardOverflow>
              <Modal />
            </CardOverflow>
          </Card>
          <Card
            className="col me-5"
            sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
          >
            <CardOverflow>
              <AspectRatio sx={{ minWidth: 200 }}>
                <img
                  src="/Images/ProductIanges/Eyecare/VitaminK.jpg"
                  
                  loading="lazy"
                  alt="VitaminK"
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              {/* <Typography level="body-xs">Bluetooth Headset</Typography> */}
              <Link
                href="#product-card"
                fontWeight="md"
                color="neutral"
                textColor="text.primary"
                overlay
                endDecorator={<ArrowOutwardIcon />}
              >
                Vitamin K, Arnica Montana Concoction for dark circles and
                wrinkles
              </Link>

              {/* <Typography
              level="title-lg"
              sx={{ mt: 1, fontWeight: 'xl' }}
              endDecorator={
                <Chip component="span" size="sm" variant="soft" color="success">
                  Lowest price
                </Chip>
              }
            >
              2,900 THB
            </Typography> */}
              {/* <Typography level="body-sm">
              (Only <b>7</b> left in stock!)
            </Typography> */}
            </CardContent>
            <CardOverflow>
              <Modal />
            </CardOverflow>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EyeCare;
