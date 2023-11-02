import React from 'react';
import './Navbar.css';
const Navbar1 = () => {
  return (
    <>
        <div className="banner-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbar">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">SERVICES</a>
        </li>
        <li className="nav-item dropdown menu-area">
          <a className="nav-link dropdown-toggle" href="#" id="mega-one"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            PRODUCTS
          </a>
          <ul className="dropdown-menu mega-menu" aria-labelledby="mega-one">
            <div className="row">
                <div className="col-sm-6 col-lg-3">
                    <h5>Web Design </h5>
                    <a href='#' className='dropdown-item'>HTML Template</a>
                    <a href='#' className='dropdown-item'>HTML Template</a>
                    <a href='#' className='dropdown-item'>HTML Template</a>
                    <a href='#' className='dropdown-item'>HTML Template</a>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <h5>Web Design </h5>
                    <a href='#' className='dropdown-item'>HTML Template</a>
                    <a href='#' className='dropdown-item'>HTML Template</a>
                    <a href='#' className='dropdown-item'>HTML Template</a>
                    <a href='#' className='dropdown-item'>HTML Template</a>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <h5>Web Design </h5>
                    <a href='#' className='dropdown-item'>HTML Template</a>
                    <a href='#' className='dropdown-item'>HTML Template</a>
                    <a href='#' className='dropdown-item'>HTML Template</a>
                    <a href='#' className='dropdown-item'>HTML Template</a>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <h5>Web Design </h5>
                    <a href='#' className='dropdown-item'>HTML Template</a>
                    <a href='#' className='dropdown-item'>HTML Template</a>
                    <a href='#' className='dropdown-item'>HTML Template</a>
                    <a href='#' className='dropdown-item'>HTML Template</a>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <h5>IMAGE </h5>
                    <img src='' alt='' style={{width:"100%"}}/>
                </div>
            </div>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">CONTACT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">ABOUT US</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
                    </div>
                </div>
            </div>
        </div>


    </>

  );
}

export default Navbar1;
