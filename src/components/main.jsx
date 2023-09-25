import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import './main.css'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import { Modal } from '@mui/base/Modal';
import { FormControl } from '@mui/base/FormControl';
import CompanyValueCard from "./CompanyValueCard/CompanyValueCard";
import CompanyLayout from "./CompanyLayout/CompanyLayout";
import CompanyDevelopment from "./CompanyDevelopment/CompanyDevelopment";
import CompanyDesign from "./CompanyDesign/CompantDesign";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Accordians from "./Accordians/Accordians";

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
            
          />
          <div className="card-img-overlay d-flex align-items-center ">
            <Stack>
              <TriggerButton
                margin="50px"
                padding-top="20px"
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
      <CompanyValueCard/>
    
    <CompanyLayout/>
     
      <div className="justify-content-around align-content-center text-center mt-5 m-4">
        <h1>All-In-One Solution For Skincare Brands Manufacturing</h1>
        <p>
          We have years of experience manufacturing skin care products and are
          professional in each service section. We strive to serve the needs of
          each customer well and make your business success so that customers
          can focus on their core business in the market.
        </p>
      </div>

      <CompanyDevelopment/>

     <CompanyDesign/>

     <WhyChooseUs/>
      <Accordians/>
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