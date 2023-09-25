import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import { Input, inputClasses } from '@mui/base/Input';

const CompanyValueCard = () => {
  return (
   <>
         <div>
      <div className="row row-cols-1 row-cols-md-4 g-4 m-5">
        <Card
          className="col me-5"
          sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
        >
          <CardOverflow>
            <AspectRatio sx={{ minWidth: 200 }}>
              <img
                src="/Images/823.jpg"
                loading="lazy"
                alt=""
                to="/facewash"
              />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            {/* <Typography level="body-xs">Bluetooth Headset</Typography> */}
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

            <Typography
            level="title-lg"
            sx={{ mt: 1, fontWeight: 'xl' }}
            // endDecorator={
            //   <Chip component="span" size="sm" variant="soft" color="success">
            //     Lowest price
            //   </Chip>
            // }
          >
            Manufacturing Experience
          </Typography>
            {/* <Typography level="body-sm">
            (Only <b>7</b> left in stock!)
          </Typography> */}
          </CardContent>
          <CardOverflow>
            {/* <Button variant="solid" color="primary" size="lg">
              <Link>Get Quotes</Link>
            </Button> */}
          </CardOverflow>
        </Card>
        
        {/* <Card
          className="col me-5"
          sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
        >
          <CardOverflow>
            <AspectRatio sx={{ minWidth: 200 }}>
              <img
                src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
                srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
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
              40,000M
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
            Factory Area
          </Typography>
            <Typography level="body-sm">
            (Only <b>7</b> left in stock!)
          </Typography>
          </CardContent>
          <CardOverflow>
            <Button variant="solid" color="primary" size="lg">
              <Link>Get Quotes</Link>
            </Button>
          </CardOverflow>
        </Card>  */}
        
        <Card
          className="col me-5"
          sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
        >
          <CardOverflow>
            <AspectRatio sx={{ minWidth: 200 }}>
              <img
                src="/Images/194.jpg"
                loading="lazy"
                alt=""
                to="/shampoo"
              />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            {/* <Typography level="body-xs">Bluetooth Headset</Typography> */}
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

            <Typography
            level="title-lg"
            sx={{ mt: 1, fontWeight: 'xl' }}
            // endDecorator={
            //   <Chip component="span" size="sm" variant="soft" color="success">
            //     Lowest price
            //   </Chip>
            // }
          >
            GMPC Production Lines
          </Typography>
            {/* <Typography level="body-sm">
            (Only <b>7</b> left in stock!)
          </Typography> */}
          </CardContent>
          <CardOverflow>
            {/* <Button variant="solid" color="primary" size="lg">
              <Link>Get Quotes</Link>
            </Button> */}
          </CardOverflow>
        </Card> 
        
        <Card
          className="col me-5"
          sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
        >
          <CardOverflow>
            <AspectRatio sx={{ minWidth: 200 }}>
              <img
                src="/Images/p3.jpg"
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
              300 +
            </Link>

            <Typography
            level="title-lg"
            sx={{ mt: 1, fontWeight: 'xl' }}
            // endDecorator={
            //   <Chip component="span" size="sm" variant="soft" color="success">
            //     Lowest price
            //   </Chip>
            // }
          >
            Specialized Workers
          </Typography>
            {/* <Typography level="body-sm">
            (Only <b>7</b> left in stock!)
          </Typography> */}
          </CardContent>
          <CardOverflow>
            {/* <Button variant="solid" color="primary" size="lg">
              <Link>Get Quotes</Link>
            </Button> */}
          </CardOverflow>
        </Card>
      
      </div>
    </div>
   </>
  );
}

export default CompanyValueCard;
