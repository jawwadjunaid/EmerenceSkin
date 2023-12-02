import React from 'react';

const WhyChooseUs = () => {
  return (
    <>
    
    <div className="text-center m-4 ">
        <h1 className="fw-bold">Why Choose Us?</h1>
        <p className="fw-light">We Create Value To Your Business</p>
      </div>

      <div>
        <div>
          <div className="row p-3 bg-body rounded justify-content-center">
            <div className="col">
              <div className="card shadow p-2 mb-4 bg-body rounded">
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
              <div className="card shadow p-2 mb-4 bg-body rounded">
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
              <div className="card shadow p-2 mb-4 bg-body rounded">
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
           
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
