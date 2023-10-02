import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "./Navbar.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuItems, setSubMenuItems] = useState([]);
  const isMobileView = useMediaQuery("(max-width:768px)");

  const mainMenu = [
    {
      label: "Products", 
      subMenu: [
        
        {
          label: "Skin Care",

          nestedMenu: [
            { title: "Face Wash", path: "/facewash" },
            { title: "Cleansers", path: "/cleansers" },
            { title: "Toners", path: "/toner" },
            { title: "Pore Minimiser", path: "/poreminimiser" },
            { title: "Peels", path: "/peels" },
            { title: "Moisturisers", path: "/moisturisers" },
            {
              title: "Hyperpigmentation & Melasma",
              path: "/hyperpigmentation",
            },
            { title: "Anti Aging", path: "/antiaging" },
            { title: "Glow Enhancer Oils", path: "/glowenhanceroils" },
            { title: "Sun Care", path: "/suncare" },
            { title: "Handmade Soaps", path: "/handmadesoaps" },
            { title: "Shower Gels", path: "/showergels" },
            { title: "Masks", path: "/masks" },
            { title: "Eye Care", path: "/eyecare" },
            { title: "Lip Care", path: "/lipcare" },
            { title: "Acne Care", path: "/acnecare" },
          ],
        },
        {
          label: "Hair Care",
          nestedMenu: [
            { title: "Shampoo", path: "/shampoo" },
            { title: "Hair Growth Serum", path: "/hairgrowthserum" },
            {
              title: "Hair Conditioners and Masks",
              path: "/hairconditionersandmasks",
            },
          ],
        },
        {
          label: "Foot Care & Hand Care",
          nestedMenu: [{ title: "Foot Care & Hand Care", path: "/footcare" }],
        },
        {
          label: "Body Butter",
          nestedMenu: [{ title: "Body Butter", path: "/bodybutter", }],
        },
      ],
    },
  ];

  const handleSubMenuClick = (subMenu) => (event) => {
    setSubMenuItems(subMenu);
    setAnchorEl(event.currentTarget);
  };

  const handleNestedMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const state = useSelector((state) => state.handleCart);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-Skyblue py-3">
      <div className="container ">
        <div className="navbar-brand fw-bold fs-4 px-2 logo ms-4">
          <img src="/Images/logo.png" alt="logo" style={{ height: "50px" }} />
        </div>
        {/* <NavLink  className="navbar-brand fw-bold fs-4 px-2" to="/"> React Ecommerce</NavLink> */}
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav my-2  text-center">
            <Button id="basic-button" component={Link} to="/">
              Home
            </Button>
            <Button id="basic-button" component={Link} to="/service">
              Services
            </Button>
            {mainMenu.map((menuItem) => (
              <div key={menuItem.label}>
                <Button
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  onClick={handleSubMenuClick(menuItem.subMenu)}
                >
                  {menuItem.label}
                </Button>
              </div>
            ))}
            {isMobileView ? (
              <div>
                {subMenuItems.map((subMenuItem) => (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      key={subMenuItem.label}
                      aria-controls={subMenuItem.label}
                      id={subMenuItem.label}
                    >
                      <Typography>{subMenuItem.label}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {subMenuItem?.nestedMenu?.map((nestedMenuItem) => (
                        <Link key={nestedMenuItem} to={nestedMenuItem?.path}>
                          <MenuItem onClick={handleClose}>
                            {nestedMenuItem?.title}
                          </MenuItem>
                        </Link>
                      ))}
                    </AccordionDetails >
                  </Accordion>
                ))}
              </div>
            ) : (
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PopoverClasses={{ width: "100%",  }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100vw",
                    justifyContent: "space-around",
                    textDecoration: "none",
                  }}
                >
                  {subMenuItems.map((subMenuItem) => (
                    <div
                      className={styles["submenu-items"]}
                      onClick={(event) => handleNestedMenuClick(event)}
                      key={subMenuItem.label}
                    >
                      {subMenuItem.label}
                      {subMenuItem?.nestedMenu?.map((nestedMenuItem) => (
                        <Link key={nestedMenuItem} to={nestedMenuItem?.path}>
                          <MenuItem onClick={handleClose}>
                            {nestedMenuItem?.title}
                          </MenuItem>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </Menu>
            )}

            <Button id="basic-button" component={Link} to="/contact">
              Contact Us
            </Button>
            <Button id="basic-button" component={Link} to="/about">
              About Us
            </Button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
