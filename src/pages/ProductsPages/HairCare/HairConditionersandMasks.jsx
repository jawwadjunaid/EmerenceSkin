import React from 'react';
import Modal from '../../../components/Modal/BtnModal';

const HairConditionersandMasks = () => {
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
              For Dry Damaged Hair with Biotin, Argan Oil, Placental Extracts and Hydrolysed Keratin
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
    <Footer />
  </>
  );
}

export default HairConditionersandMasks;
