import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import AspectRatio from "@mui/joy/AspectRatio";
//import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
//import Chip from '@mui/joy/Chip';
import Link from "@mui/joy/Link";
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Modal from "../../../components/Modal/BtnModal";

const Moisturisers = () => {
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
                  src="/Images/ProductIanges/Moisturisers/DrySkinUrea.jpg"
                  loading="lazy"
                  alt="DrySkinUrea"
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
                For Dry skin with Urea, Squalane, Peptides
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
                  src="/Images/ProductIanges/Moisturisers/Gel Moisturiser.jpg"
                  loading="lazy"
                  alt="Gel Moisturiser"
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="body-xs">For Oily skin</Typography>
              <Link
                href="#product-card"
                fontWeight="md"
                color="neutral"
                textColor="text.primary"
                overlay
                endDecorator={<ArrowOutwardIcon />}
              >
                acne prone skin with Vitamin C, E and Niacinamide
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
                  src="/Images/ProductIanges/Moisturisers/OilySkin.jpg"
                  loading="lazy"
                  alt="OilySkin"
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
                Gel Moisturiser with Hyaluronic Acid
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

export default Moisturisers;
