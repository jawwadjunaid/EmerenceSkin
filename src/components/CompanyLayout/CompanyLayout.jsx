import React from "react";
import CardOverflow from "@mui/joy/CardOverflow";

import Modal from "../Modal/BtnModal";
const CompanyLayout = () => {
  return (
    <>
      <div className="cardlayout card-group  m-5" style={{ color: "#f7f7f7" }}>
        <div className="col">
          <div className="card  p-2 mb-2 bg-white" color="#f7f7f7">
            <img
              loading="lazy"
              srcSet="/Images/UK.jpg"
              className="card-img-top pb-5 shadow-none bg-light"
              alt="..."
              height={'250px'}
            />
            <div className="card-body">
              <h5 className="card-title">UNITED KINGDOM  {`(UK)`}</h5>
              <CardOverflow>
              <Modal buttonSize="large" />
              </CardOverflow>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card  p-2 mb-4 bg-white">
            <img
              loading="lazy"
              srcSet="/Images/USA.jpg"
              className="card-img-top pb-5 shadow-none bg-light"
              alt="..."
              height={'250px'}
            />
            <div className="card-body">
              <h5 className="card-title" >UNITED STATE OF AMERICA</h5>
              <CardOverflow>
              <Modal buttonSize="large" />
              </CardOverflow>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card  p-2 mb-4 bg-white">
            <img
              loading="lazy"
              srcSet="/Images/PK.jpg"
              className="card-img-top pb-5 shadow-none bg-light"
              alt="..."
              height={'250px'}
            />
            <div className="card-body">
              <h5 className="card-title">PAKISTAN</h5>
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

export default CompanyLayout;
