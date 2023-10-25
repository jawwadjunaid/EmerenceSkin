import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Accordians = () => {
  return (
    <>
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
              We have blank package for many of our products, we can make
              customized package of private label for customers per 500 units.
              The economic MOQ is 1000 units in normal based on package type.
              The custom formulation batch sizes starting at 30 Kilograms (8
              Gallons).
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
              No, we do not use parabens in our products. All of our products
              are paraben-free. All our formulations are compliance with EU and
              FDA regulations.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Do Your Formulations Meet Quality Standards?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we securely follow international and China FDA standard for
              materials handling and formulation development. All our
              formulations meet EU and FDA regulations. In this regard, we have
              upgraded our supply chain so that the materials used meet the
              regulations too. More than 90% of our raw materials are imported
              from Europe, the USA, Australia, and Japan with associated
              certificates.
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
              No, we do not use parabens in our products. All of our products
              are paraben-free. All our formulations are compliance with EU and
              FDA regulations.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              How Is Your Business Organization Chart Of Your Company?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Under our corporation, we have 4 branded companies for our own
              brand beauty salons products selling in China market, and one
              company Ariel for OEM/ODM business, and factory YacoiSheng
              dedicated for production for internal customers of our own 5
              companies.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Do Your Formulations Meet Quality Standards?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we tightly follow international standard and China FDA for
              the materials using and formulations development. All our
              formulations meet EU and FDA regulations, by this we have upgraded
              our supply chain so that the materials used can meet the
              regulations too, more than 90% of our raw materials are imported
              from Europe, USA, Australia, and Japan with associated
              certificates.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Can Your Facility Support Flexible Production?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we can support flexible production by our individual
              production cells for different processes or products. We have
              thousands of beauty salon customers whose orders are mainly high
              mix orders, at same time we have big retailer customers whose
              orders are full containers basis. So we can handle both high mix
              and high volume orders.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              What Is Your Philosophy For Formulations Development?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our philosophy for formulations development is to make “simplify”
              and “cleaning” formulations for customers, that is one formulation
              is for dedicated skincare problem, and the formulation can meet
              the “cleaning” formulations requirements trend especially in
              Europe.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default Accordians;
