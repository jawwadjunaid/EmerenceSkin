import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
//import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
//import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Modal from "../../../components/Modal/BtnModal";

const Toner = () => {
  return (
    <>
    <Navbar/>
    <div>
    <div className="row row-cols-1 row-cols-md-4 g-4 m-5">
<Card className="col me-5" sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
  <CardOverflow>
    <AspectRatio sx={{ minWidth: 200 }}>
      <img
        src="/Images/ProductImages/Toners/AHABHA.jpg"
        
        loading="lazy"
        alt="AHABHA"
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
      B3 and Hyaluronic Acid toner with Plant Extracts
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
    <Modal/>
  </CardOverflow>
</Card>
<Card className="col me-5" sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
  <CardOverflow>
    <AspectRatio sx={{ minWidth: 200 }}>
      <img
        src="/Images/ProductImages/Toners/B3.jpg"
       
        loading="lazy"
        alt="B3"
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
      Gentle Toner with Witch Hazel
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
   <Modal/>
  </CardOverflow>
</Card>
<Card className="col me-5" sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
  <CardOverflow>
    <AspectRatio sx={{ minWidth: 200 }}>
      <img
        src="/Images/ProductImages/Toners/GentleToner.jpg"
        
        loading="lazy"
        alt="GentleToner"
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
      AHA and BHA Toner
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
   <Modal/>
  </CardOverflow>
</Card>
<Card className="col me-5" sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
  <CardOverflow>
    <AspectRatio sx={{ minWidth: 200 }}>
      <img
        src="/Images/ProductImages/Toners/GrapeFriut.jpg"
       
        loading="lazy"
        alt="GrapeFriut"
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
     Grapefruit Extract Toner
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
   <Modal/>
  </CardOverflow>
</Card>
<Card className="col me-5" sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
  <CardOverflow>
    <AspectRatio sx={{ minWidth: 200 }}>
      <img
        src="/Images/ProductImages/Toners/GrapeSeedToner.jpg"
    
        loading="lazy"
        alt="GrapeSeedToner"
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
      Grape seed Extract and Sodium PCA Toner 
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
    <Modal/>
  </CardOverflow>
</Card>
<Card className="col me-5" sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
  <CardOverflow>
    <AspectRatio sx={{ minWidth: 200 }}>
      <img
        src="/Images/ProductImages/Toners/TeaTree.jpg"
       
        loading="lazy"
        alt="TeaTree"
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
      Tea Tree Oil Toner
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
   <Modal/>
  </CardOverflow>
</Card>


</div>
    </div>
    <Footer/>
</>
  );
}

export default Toner;
