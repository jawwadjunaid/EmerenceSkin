import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
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

const AntiAging = () => {
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
                  src="/Images/ProductIanges/AntiAging/Hydroxysomes.jpg"
                  loading="lazy"
                  alt="Hydroxysomes"
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
                Hydroxysomes Adenosine, Retinaldehyde, Resveratrol
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
                  src="/Images/ProductIanges/AntiAging/LupineExtract.jpg"
                  loading="lazy"
                  alt="LupineExtract"
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
                Matryxl with Hyaluronic Acid
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
                  src="/Images/ProductIanges/AntiAging/Matryxl.jpg"
                  loading="lazy"
                  alt="Matryxl"
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
                Retinol with Hyaluronic Acid
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
                  src="/Images/ProductIanges/AntiAging/Retinol.jpg"
                  loading="lazy"
                  alt="Retinol"
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
                Vitamin A, C, E and Hyaluronic Acid Cream and Serum
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
                  src="/Images/ProductIanges/AntiAging/VitaminACE.jpg"
                  loading="lazy"
                  alt="VitaminACE"
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
                Lupine Extract and Pisum Sativum with Hyaluronic Acid Serum
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

export default AntiAging;
