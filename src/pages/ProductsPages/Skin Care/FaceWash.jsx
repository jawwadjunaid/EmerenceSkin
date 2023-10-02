import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import AspectRatio from "@mui/joy/AspectRatio";
//import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Modal from "../../../components/Modal/BtnModal";
//import Chip from '@mui/joy/Chip';
import Link from "@mui/joy/Link";
//import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const FaceWash = () => {
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
                  src="/Images/ProductImages/Facewash/Glycolic.jpg"
                 
                  loading="lazy"
                  alt="Glycolic"
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
                Salicylic Acid for oily and acne prone skin
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
                  src="/Images/ProductImages/Facewash/Mendelic.jpg"
                  
                  loading="lazy"
                  alt="Mendelic"
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
                Mendelic acid and tea tree oil face wash
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
                  src="/Images/ProductImages/Facewash/Salicylic.jpg"
                  
                  loading="lazy"
                  alt="Salicylic"
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
                Vitamin C + Vitamin B3 Face Wash
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
                  src="/Images/ProductImages/Facewash/vitamin-c-face-wash_1.jpg"
                  
                  loading="lazy"
                  alt="vitamin-c-face-wash_1"
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
                Glycolic Acid Face Wash
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

export default FaceWash;
