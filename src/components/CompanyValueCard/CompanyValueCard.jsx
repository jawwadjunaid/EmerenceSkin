import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";

import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const CompanyValueCard = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-2 m-4 ps-5 justify-content-center ">
        <Card
          className="col me-5 "
          sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
        >
          <CardOverflow>
            <AspectRatio sx={{ minWidth: 200 }}>
              <img
                loading="lazy"
                srcSet="/Images/823.jpg"
                alt=""
                to="/facewash"
              />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Link
              href="/facewash"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
              endDecorator={<ArrowOutwardIcon />}
            >
              20Years+
            </Link>

            <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
              Manufacturing Experience
            </Typography>
          </CardContent>
          <CardOverflow></CardOverflow>
        </Card>

        <Card
          className="col me-5"
          sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
        >
          <CardOverflow>
            <AspectRatio sx={{ minWidth: 200 }}>
              <img
                srcSet="/Images/194.jpg"
                loading="lazy"
                alt=""
                to="/shampoo"
              />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Link
              href="/shampoo"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
              endDecorator={<ArrowOutwardIcon />}
            >
              10K Level
            </Link>

            <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
              GMPC Production Lines
            </Typography>
          </CardContent>
        </Card>

        <Card
          className="col me-5"
          sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
        >
          <CardOverflow>
            <AspectRatio sx={{ minWidth: 200 }}>
              <img loading="lazy" srcSet="/Images/823.jpg" alt="" />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Link
              href="#product-card"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
              endDecorator={<ArrowOutwardIcon />}
            >
              300 +
            </Link>

            <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
              Specialized Workers
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CompanyValueCard;
