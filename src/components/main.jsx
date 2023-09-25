import React from "react";
import {Link} from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "react-bootstrap/Card";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './main.css'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import { Modal } from '@mui/base/Modal';
import { FormControl } from '@mui/base/FormControl';
import CardOverflow from "@mui/joy/CardOverflow";

//import { Input, inputClasses } from '@mui/base/Input';

const Home = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [open, setOpen]= React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = ()=> setOpen(false);


  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="/Images/bg-img.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center justify-content-center">
            <Stack>
              <TriggerButton
                type="button"
                onclick={handleOpen}

               className=" button button2"
               //variant="contained"
               //style={{ backgroundColor: "#10126d", borderRadius:"50px", msTransitionDuration: "0.4s",  }}
             >
                Get Quote
              </TriggerButton>
              <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <Box sx={style}>
          <FormControl defaultValue="" required>
          <label defaultValue="" required>Name</label>
          <input placeholder="Write your Name"/>
          <label defaultValue="" required>Email</label>
          <input placeholder="Write your Email"/>
          <label defaultValue="" required>Phone</label>
          <input placeholder="Write your Phone"/>
          <label defaultValue="" required>Message</label>
          <inputarea placeholder="Write your Message"/>
          <Button type="Submit">Send Message</Button>
          </FormControl>
        </Box>
      </StyledModal>
            </Stack>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between m-auto">
        <div className="text-center ">
          <h5 style={{ color: "#1417B6" }}>20Years+</h5>
          <p>Manufacturing Experience</p>
        </div>
        <div className="text-center">
          <h5 style={{ color: "#1417B6" }}>40,000M</h5>
          <p>Factory Area</p>
        </div>
        <div className="text-center">
          <h5 style={{ color: "#1417B6" }}>10K Level</h5>
          <p>GMPC Production Lines</p>
        </div>
        <div className="text-center">
          <h5 style={{ color: "#1417B6" }}>300 +</h5>
          <p>Specialized Workers</p>
        </div>
      </div>

      <div className="ProductcardImages m-4">
        <div className="row">
          <div className="col-md-6 col-lg-5 mx-auto m-4 p-4">
            <div className="card h-100">
              <div className="card-body">
               <Link to="/facewash">
                <Card.Img
                to="/facewash"
                  variant="top"
                  className="img-fluid"
                  src="Images/823.jpg"
                  
                />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 mx-auto m-4 p-4">
            <div className="card h-100">
              <div className="card-body">
                <Link to="/shampoo">
                <Card.Img
                  variant="top"
                  className="img-fluid "
                  src="/Images/194.jpg"
                />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cardlayout card-group p-5">
        <div className="card shadow-lg bg-white text-center m-4 mt-1 me-4">
          <div className="card-body shadow-lg bg-white text-center customer-case">
            <h4 className="m-5">Customer Case</h4>
            <p className="card-text">
              <div className="card-img"></div>
              Voices from customers about Arielcosmetic
            </p>
            <Link to="/customercase" className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg p-2 mb-4 bg-white">
            <img
              src="/Images/shein1.jpeg"
              className="card-img-top pb-5 shadow-none bg-light"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Shein From China</h5>
              <CardOverflow>
              <Button variant="solid" color="primary" size="lg">
              <Link to="/acneacre">{`Read More >>>`}</Link>
            </Button>
            </CardOverflow>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-lg p-2 mb-4 bg-white">
            <img
              src="/Images/KNC.jpeg"
              className="card-img-top pb-5 shadow-none bg-light"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">KNC From USA</h5>
              <CardOverflow>
              <Button variant="solid" color="primary" size="lg">
              <Link to="/antiaging">{`Read More >>>`}</Link>
            </Button>
            </CardOverflow>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-lg p-2 mb-4 bg-white">
            <img
              src="/Images/portugal.jpeg"
              className="card-img-top pb-5 shadow-none bg-light"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">I From Portugal</h5>
              <CardOverflow>
              <Button variant="solid" color="primary" size="lg">
              <Link to="/cleanser">{`Read More >>>`}</Link>
            </Button>
            </CardOverflow>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-content-around align-content-center text-center mt-5 m-4">
        <h1>All-In-One Solution For Skincare Brands Manufacturing</h1>
        <p>
          We have years of experience manufacturing skin care products and are
          professional in each service section. We strive to serve the needs of
          each customer well and make your business success so that customers
          can focus on their core business in the market.
        </p>
      </div>

      <div className="row row-cols- row-cols-md-2 g-4 mt-4  mx-4 shadow-lg p-3 mb-5 bg-body rounded">
        <div className="col">
          <div className="card shadow p-3 mb-5 bg-body rounded">
            <img
              src="/Images/favcons/lptp.png"
              style={{ height: "70px", width: "70px" }}
              className="card-img-top"
              alt="Logo"
            />
            <div className="card-body">
              <h3 className="card-title fw-bold">Formula Development</h3>
              <p className="card-text">
                3000+ mature formulas, covering ointment, cream, toner, lotion,
                serum, oil, masks, and other skincares, you can buy formula
                products immediately. We have various formulas with different
                efficaces and for different skin problems which meet your
                customized requirements.
              </p>
              <CardOverflow>
              <Button variant="solid" color="primary" size="lg">
              <Link to="/formuladevelopment">{`Read More >>>`}</Link>
            </Button>
            </CardOverflow>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow p-3 mb-5 bg-body rounded">
            <img
              src="/Images/favcons/package.png"
              style={{ height: "70px", width: "70px" }}
              className="card-img-top logo-img"
              alt="Logo"
            />
            <div className="card-body">
              <h3 className="card-title fw-bold">Packaging Solutions</h3>
              <p className="card-text">
                We provide packaging solutions in artwork design, inner
                packaging bottle/jar sourcing, surface treatment, and outer
                packaging customization to create differentiated packaging to
                enhance your brand image and help you success in market
                competition.
              </p>
              <CardOverflow>
              <Button variant="solid" color="primary" size="lg">
              <Link to="/cleanser">{`Read More >>>`}</Link>
            </Button>
            </CardOverflow>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 mt-5 m-4 g-4 shadow-lg p-3 mb-5 bg-body rounded">
        <div className="col">
          <div className="card shadow p-3 mb-5 bg-body rounded">
            <img
              src="/Images/favcons/cam.png"
              className="card-img-left logo-img"
              alt="Logo"
              style={{ height: "70px", width: "70px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Free Design & Sampling</h5>
              <p className="card-text">
                Ariel Cosmetic's value-added services can reduce your operating
                costs directly at project's beginning stage, and allow you to
                start your business at the lowest cost.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow p-3 mb-5 bg-body rounded">
            <img
              src="/Images/favcons/warehouse.png"
              className="card-img-left logo-img"
              alt="Logo"
              style={{ height: "70px", width: "70px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Free warehousing support</h5>
              <p className="card-text">
                We understand that many customers do not have suitable space to
                store their goods, and sometimes they temporarily need to store
                their goods for the peak sales season.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow p-4 mb-5 bg-body rounded">
            <img
              src="/Images/favcons/callcenter.png"
              className="card-img-left logo-img"
              alt="Logo"
              style={{ height: "70px", width: "70px" }}
            />
            <div className="card-body">
              <h5 className="card-title">After-sales</h5>
              <p className="card-text">
                With 24/7/365 After-sales Support and one-to-one professional
                consultation, Arielcosmetic hopes to solve your problems as
                quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center m-5 ">
        <h1 className="fw-bold">Why Choose Us?</h1>
        <p className="fw-light">We Create Value To Your Business</p>
      </div>

      <div>
        <div>
          <div className="row row-cols-1 row-cols-md-4 mt-4 m-4 g-4 shadow-lg p-3 mb-5 bg-body rounded">
            <div className="col">
              <div className="card shadow p-4 mb-5 bg-body rounded">
                <img
                  src="/Images/favcons/funnel.png"
                  style={{ height: "70px", width: "70px" }}
                  className="card-img-left logo-img"
                  alt="Logo"
                />
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text text-center fw-bold">
                    3000+ Mature Formulas
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow p-4 mb-5 bg-body rounded">
                <img
                  src="/Images/favcons/pckge.png"
                  style={{ height: "70px", width: "70px" }}
                  className="card-img-left logo-img"
                  alt="Logo"
                />
                <div className="card-body ">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text text-center fw-bold">
                    Total Packaging Solution
                  </p>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card shadow p-4 mb-5 bg-body rounded">
                <img
                  src="/Images/favcons/funnel1.png"
                  style={{ height: "70px", width: "70px" }}
                  className="card-img-left logo-img"
                  alt="Logo"
                />
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text text-center fw-bold ">Low MOQ</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow p-2 mb-5 bg-body rounded">
                <img
                  src="/Images/favcons/Q.png"
                  style={{ height: "70px", width: "70px" }}
                  className="card-img-left logo-img"
                  alt="Logo"
                />
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text text-center fw-bold">
                    ISO22716, GMPC, Sedex, FDA Certificates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What Are Your Minimum Order Quantity (MOQ)?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We have blank package for many of our products, we can make customized package of private label for customers per 500 units. The economic MOQ is 1000 units in normal 
          based on package type. The custom formulation batch sizes starting at 30 Kilograms (8 Gallons).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do You Use Parabens In Your Formulas?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No, we do not use parabens in our products. All of our products are paraben-free. All our formulations are compliance with EU and FDA regulations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do Your Formulations Meet Quality Standards?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we securely follow international and China FDA standard for materials handling and formulation development. All our formulations meet EU and FDA regulations. In this regard, we have upgraded our supply chain so that the materials used meet the regulations too. More than 90% of our 
          raw materials are imported from Europe, the USA, Australia, and Japan with associated certificates.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do You Use Parabens In Your Formulas?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No, we do not use parabens in our products. 
          All of our products are paraben-free. All our formulations are compliance with EU and FDA regulations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How Is Your Business Organization Chart Of Your Company?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Under our corporation, we have 4 branded companies for our own brand beauty salons products selling in China market, and one company Ariel for OEM/ODM business, 
          and factory YacoiSheng dedicated for production for internal customers of our own 5 companies.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do Your Formulations Meet Quality Standards?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we tightly follow international standard and China FDA for the materials using and formulations development. All our formulations meet EU and FDA regulations, by this we have upgraded our supply chain so that the materials used can meet the regulations too, more than 90% of our raw materials are 
          imported from Europe, USA, Australia, and Japan with associated certificates.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can Your Facility Support Flexible Production?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we can support flexible production by our individual production cells for different processes or products. We have thousands of beauty salon customers whose orders are mainly high mix orders, at same time we have big retailer customers whose orders are 
          full containers basis. So we can handle both high mix and high volume orders.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What Is Your Philosophy For Formulations Development?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our philosophy for formulations development is to make “simplify” and “cleaning” formulations for customers, that is one formulation is for dedicated skincare problem, and the formulation 
          can meet the “cleaning” formulations requirements trend especially in Europe.
          </Typography>
        </AccordionDetails>
      </Accordion>

      
    </div>
    </>
  );
};

export default Home;
const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const blue = {
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  width: 400,
  borderRadius: '12px',
  padding: '16px 32px 24px 32px',
  backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
});

const TriggerButton = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 12px;
  padding: 6px 12px;
  line-height: 1.5;
  background: transparent;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[100] : grey[900]};

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }
  `,
);