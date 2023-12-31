import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
//import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
//import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const EcommerceProducts = () => {
  return (
    <>
    <div className='text-center m-4'>
      <h1>E-commerce</h1>
    </div>
    <div className="row row-cols-1 row-cols-md-4 g-4 m-5">
        <Card className="col me-5" sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
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
            {/* <Typography level="body-xs">Bluetooth Headset</Typography> */}
            <Link
              href="#product-card"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
              endDecorator={<ArrowOutwardIcon />}
            >
              Face Wash
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
            <Button variant="solid" color="primary" size="lg">
              <Link>
             Get Quotes
             </Link>
            </Button>
          </CardOverflow>
        </Card>
        <Card className="col me-5" sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
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
            {/* <Typography level="body-xs">Bluetooth Headset</Typography> */}
            <Link
              href="#product-card"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
              endDecorator={<ArrowOutwardIcon />}
            >
              Face Wash
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
            <Button variant="solid" color="primary" size="lg">
              <Link>
             Get Quotes
             </Link>
            </Button>
          </CardOverflow>
        </Card>
        <Card className="col me-5" sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
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
            {/* <Typography level="body-xs">Bluetooth Headset</Typography> */}
            <Link
              href="#product-card"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
              endDecorator={<ArrowOutwardIcon />}
            >
              Face Wash
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
            <Button variant="solid" color="primary" size="lg">
              <Link>
             Get Quotes
             </Link>
            </Button>
          </CardOverflow>
        </Card>
        <Card className="col me-5" sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
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
            {/* <Typography level="body-xs">Bluetooth Headset</Typography> */}
            <Link
              href="#product-card"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
              endDecorator={<ArrowOutwardIcon />}
            >
              Face Wash
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
            <Button variant="solid" color="primary" size="lg">
              <Link>
             Get Quotes
             </Link>
            </Button>
          </CardOverflow>
        </Card>
        <Card className="col me-5" sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
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
            {/* <Typography level="body-xs">Bluetooth Headset</Typography> */}
            <Link
              href="#product-card"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
              endDecorator={<ArrowOutwardIcon />}
            >
              Face Wash
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
            <Button variant="solid" color="primary" size="lg">
              <Link>
             Get Quotes
             </Link>
            </Button>
          </CardOverflow>
        </Card>
        <Card className="col me-5" sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
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
            {/* <Typography level="body-xs">Bluetooth Headset</Typography> */}
            <Link
              href="#product-card"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
              endDecorator={<ArrowOutwardIcon />}
            >
              Face Wash
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
            <Button variant="solid" color="primary" size="lg">
              <Link>
             Get Quotes
             </Link>
            </Button>
          </CardOverflow>
        </Card>
        
       
       
        
   </div>
  </>
  );
}

export default EcommerceProducts;
