import React from 'react';
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
//import Button from "@mui/material/Button";
import Button from "@mui/joy/Button";
const CompanyLayout = () => {
  return (
    <>
     <div className="cardlayout card-group p-5">
        <div className="card  bg-white m-4 mt-1 me-4" color="#f7f7f7">
          <div className="card-body " color="#f7f7f7">
            <h4 className="text-center m-5">Customer Case</h4>
            <p className="card-text pb-3  " >
              <div className="card-img"></div>
              Voices from customers about Arielcosmetic
            </p>
            <CardOverflow>
              <Button  variant="solid" color="primary" size="lg">
              <Link to="/customercase">{`Read More >>>`}</Link>
            </Button>
            </CardOverflow>
          </div>
        </div>

        <div className="col">
          <div className="card  p-2 mb-4 bg-white" color="#f7f7f7">
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
          <div className="card  p-2 mb-4 bg-white">
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
          <div className="card  p-2 mb-4 bg-white">
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
    
    </>
  );
}

export default CompanyLayout;
