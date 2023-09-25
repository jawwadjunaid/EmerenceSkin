import React from 'react';

const CompantDesign = () => {
  return (
  <>
  <div className="row row-cols-1 row-cols-md-3 mt-5 m-4 g-4  p-3 mb-5 bg-body rounded">
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
  </>
  );
}

export default CompantDesign;
