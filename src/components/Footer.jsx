import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="container my-5 m-auto">
        <footer className="text-center text-lg-start  text-white bg-dark">
          <section className="d-flex justify-content-between p-4 upper-sec">
            <div className="me-2">
              <span>
                <h4>Get connected with us on social networks:</h4>
              </span>
            </div>
            <div>
              <MDBBtn className="m-1" href="#">
                <BiLogoFacebookCircle fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#F11290" }}
                href="#"
              >
                <AiOutlineInstagram fab icon="instagram" />
              </MDBBtn>
              <MDBBtn className="m-1" href="#">
                <AiOutlineTwitter fab icon="twitter" />
              </MDBBtn>
            </div>
          </section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold text-white">
                  Emerence Skin
                </h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto " />
                <p className="text-white">
                  At Emerence, we prioritize the utilization of premium
                  ingredients and implement a rigorous triple-check system to
                  ensure the impeccable quality of our produce. 
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Skin Care</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto con" />
                <p>
                  <Link
                    to="/lipcare"
                    className="text-white text-decoration-none"
                  >
                    Lip Care
                  </Link>
                </p>
                <p>
                  <Link
                    to="/facewash"
                    className="text-white text-decoration-none"
                  >
                    Face Wash
                  </Link>
                </p>
                <p>
                  <Link to="/masks" className="text-white text-decoration-none">
                    Masks
                  </Link>
                </p>
                <p>
                  <Link
                    to="/footcare"
                    className="text-white text-decoration-none"
                  >
                    Foot Care
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Hair Care</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto con" />
                <p>
                  <Link
                    to="/shampoo"
                    className="text-white text-decoration-none"
                  >
                    Shampoo
                  </Link>
                </p>
                <p>
                  <Link
                    to="/hairconditionersandmasks"
                    className="text-white text-decoration-none"
                  >
                    Hair Conditioners And Masks
                  </Link>
                </p>
                <p>
                  <Link
                    to="/hairgrowthserum"
                    className="text-white text-decoration-none"
                  >
                    Hair Growth Serum
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto con" />
                <p className="text-white">
                  <i className="fas fa-home mr-3 "></i> London, UK TW33TG
                </p>
                <p className="text-white">
                  <i className="fas fa-envelope mr-3 "></i>{" "}
                  info@emerenceskincare.com
                </p>
                <p className="text-white">
                  <i className="fas fa-phone mr-3 "></i> +44 7533 494723
                </p>
              </div>
            </div>
          </div>
          <section>
            <div className="text-center  p-3 text-black sec-foot bg-blue-900 text-white">
              © 2023 Copyright:
              <Link className="text-white" to="https://www.pronetizens.com/">
                <i className="g-2 me-2"> Pronetizens</i>
              </Link>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
};

export default Footer;
