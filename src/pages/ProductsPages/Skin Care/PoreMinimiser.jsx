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
import Modal from "../../../components/Modal/BtnModal";
const PoreMinimiser = () => {
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
                  src="/Images/ProductIanges/PoreMinimiser/B3 PCA serum.jpg"
                  
                  loading="lazy"
                  alt="B3 PCA serum"
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
                Hyaluronic Acid, Salicylic Acid and Allantoin Pore Minimiser
                Serum
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
                  src="/Images/ProductIanges/PoreMinimiser/Glycolicacid.jpg"
                 
                  loading="lazy"
                  alt="Glycolicacid"
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
                B3, Lactic Acid and Zinc PCA Serum
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
                  src="/Images/ProductIanges/PoreMinimiser/HyalurnicAcid.jpg"
                 
                  loading="lazy"
                  alt="HyalurnicAcid"
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="body-xs">
                Glycolic Acid, Lactic Acid
              </Typography>
              <Link
                href="#product-card"
                fontWeight="md"
                color="neutral"
                textColor="text.primary"
                overlay
                endDecorator={<ArrowOutwardIcon />}
              >
                Witch Hazel with Hyaluronic Acid Pore Minimiser Serum
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

export default PoreMinimiser;
