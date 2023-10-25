import React from "react";

const CompantDesign = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2  m-2 g-4  p-3 mb-5 bg-body rounded">
        <div className="col">
          <div className="card shadow p-4 mb-5 bg-body rounded">
            <img
              loading="lazy"
              srcSet="/Images/favcons/cam.png"
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
          <div className="card shadow p-4 mb-5 bg-body rounded">
            <img
              loading="lazy"
              srcSet="/Images/favcons/callcenter.png"
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
    </>
  );
};

export default CompantDesign;
