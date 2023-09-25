import React from "react";
import {Link} from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BsTiktok, BsYoutube } from "react-icons/bs";
import { FaSnapchatSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="container my-5 m-auto">
        <footer className="text-center text-lg-start  text-white bg-dark">
          <section className="d-flex justify-content-between p-4 upper-sec">
            <div className="me-2">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <MDBBtn  className="m-1" href="#">
                <BiLogoFacebookCircle fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn className="m-1" style={{ backgroundColor: "#F11290" }} href="#">
                <AiOutlineInstagram fab icon="instagram" />
              </MDBBtn>
              <MDBBtn className="m-1" href="#">
                <AiOutlineTwitter fab icon="twitter" />
              </MDBBtn>
              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#000000" }}
                href="#"
              >
                <BsTiktok fab icon="tiktok" />
              </MDBBtn>

              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#Fffc00" }}
                href="#"
              >
                <FaSnapchatSquare fab icon="Snapchat" />
              </MDBBtn>
              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#E31C1C" }}
                href="#"
              >
                <BsYoutube fab icon="youtube" />
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
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto con" />
                  <p>
                    <Link href="#!" className="text-white">
                      SkinCare
                    </Link>
                  </p>
                  <p>
                    <Link href="#!" className="text-white">
                      Face Mask
                    </Link>
                  </p>
                  <p>
                    <Link href="#!" className="text-white">
                      Skin Care Cream
                    </Link>
                  </p>
                  <p>
                    <Link href="#!" className="text-white">
                      Face Wash
                    </Link>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto con" />
                  <p>
                    <a href="#!" className="text-white">
                      Your Account
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Become an Affiliate
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Shipping Rates
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Help
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto con" />
                  <p className="text-white">
                    <i className="fas fa-home mr-3 "></i> New York, NY 10012, US
                  </p>
                  <p className="text-white">
                    <i className="fas fa-envelope mr-3 "></i> info@example.com
                  </p>
                  <p className="text-white">
                    <i className="fas fa-phone mr-3 "></i> + 01 234 567 88
                  </p>
                  <p className="text-white">
                    <i className="fas fa-print mr-3 "></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          <section>

          </section>
            
        </footer>
      </div>
    </>
  );
};

export default Footer;
