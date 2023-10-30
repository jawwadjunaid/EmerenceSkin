import React from "react";
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";

import Button from "@mui/joy/Button";
const CompanyLayout = () => {
  return (
    <>
      <div className="cardlayout card-group  m-5" style={{ color: "#f7f7f7" }}>
        <div className="col">
          <div className="card  p-2 mb-2 bg-white" color="#f7f7f7">
            <img
              loading="lazy"
              srcSet="/Images/shein1.jpeg"
              className="card-img-top pb-5 shadow-none bg-light"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">United Kingdom {`(UK)`}</h5>
              <CardOverflow>
                <Button
                  variant="solid"
                  style={{ color: "white", backgroundColor: "#2cadcd" }}
                  size="lg"
                >
                  <Link to="/acneacre">{`Read More`}</Link>
                </Button>
              </CardOverflow>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card  p-2 mb-4 bg-white">
            <img
              loading="lazy"
              srcSet="/Images/KNC.jpeg"
              className="card-img-top pb-5 shadow-none bg-light"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">United State America</h5>
              <CardOverflow>
                <Button
                  variant="solid"
                  style={{ color: "white", backgroundColor: "#2cadcd" }}
                  size="lg"
                >
                  <Link to="/antiaging">{`Read More`}</Link>
                </Button>
              </CardOverflow>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card  p-2 mb-4 bg-white">
            <img
              loading="lazy"
              srcSet="/Images/portugal.jpeg"
              className="card-img-top pb-5 shadow-none bg-light"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Pakistan</h5>
              <CardOverflow>
                <Button
                  variant="solid"
                  style={{ color: "white", backgroundColor: "#2cadcd" }}
                  size="lg"
                >
                  <Link to="/cleanser">{`Read More `}</Link>
                </Button>
              </CardOverflow>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyLayout;
