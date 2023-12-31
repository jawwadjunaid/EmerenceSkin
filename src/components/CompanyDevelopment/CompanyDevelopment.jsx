import React from "react";
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
import Modal from "../Modal/BtnModal";
import Button from "@mui/joy/Button";
const CompanyDevelopment = () => {
  return (
    <>
      <div className="row row-cols- row-cols-md-2 g-4 mt-4  mx-5 s p-3 mb-5 bg-body rounded">
        <div className="col">
          <div className="card shadow p-4 mb-5 bg-body rounded">
            <img
              loading="lazy"
              srcSet="/Images/favcons/lptp.png"
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
                <Modal buttonSize="large" />
              </CardOverflow>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow p-4 mb-5 bg-body rounded">
            <img
              loading="lazy"
              srcSet="/Images/favcons/package.png"
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
                <Modal buttonSize="large" />
              </CardOverflow>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDevelopment;
