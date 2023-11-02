import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { Box } from "@mui/material";
import { MdArrowDropDown } from "react-icons/md";

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
            { title: "Hand made Soaps", path: "/handmadesoaps" },
            { title: "Shower Gels", path: "/showergels" },
            { title: "Masks", path: "/masks" },
            { title: "Eye Care", path: "/eyecare" },
            { title: "Lip Care", path: "/lipcare" },
            { title: "Acne Care", path: "/acnecare" },
            { title: "Emollients", path: "/emollients" },
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
          nestedMenu: [{ title: "Body Butter", path: "/bodybutter" }],
        },
      ],
    },
  ];

  const handleSubMenuClick = (subMenu) => (event) => {
    if (subMenuItems.length > 0) {
      setSubMenuItems([]);
      return;
    }
    setSubMenuItems(subMenu);
    setAnchorEl(event.currentTarget);
  };

  const handleNestedMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg  py-3"
      sx={{
        backgroundColor:
          "linear-gradient(90deg, rgba(255,255,255,1) 13%, rgba(0,212,255,1) 100%);",
      }}
    >
      <div className="container ">
        <Link to="/">
          <div className="navbar-brand fw-bold fs-4 px-2 logo ms-4">
            <img src="/Images/logo.png" alt="logo" style={{ height: "50px" }} />
          </div>
        </Link>

        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav my-2  text-center">
            <Button
              style={{ color: "black" }}
              id="basic-button"
              component={Link}
              to="/"
            >
              Home
            </Button>

            <Button
              style={{ color: "black" }}
              id="basic-button"
              component={Link}
              to="/service"
            >
              Services
            </Button>

            {mainMenu.map((menuItem) => (
              <div key={menuItem.label} className="submenu-items a">
                <Button
                  className="products"
                  style={{
                    color: "black",
                    justifyContent: "center",
                    paddingLeft: "25px",
                  }}
                  aria-controls="basic-menu"
                  aria-haspopup="false"
                  onClick={handleSubMenuClick(menuItem.subMenu)}
                >
                  {menuItem.label}
                  <MdArrowDropDown />
                </Button>
              </div>
            ))}
            {isMobileView && subMenuItems.length > 0 ? (
              <div>
                {subMenuItems.map((subMenuItem) => (
                  <Box>
                    <Accordion>
                      <AccordionSummary
                        style={{
                          color: "black",
                        }}
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
                            <MenuItem
                              style={{ color: "black", textDecoration: "none" }}
                            >
                              {nestedMenuItem?.title}
                            </MenuItem>
                          </Link>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                ))}
              </div>
            ) : (
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PopoverClasses={{ width: "100%" }}
                style={{ color: "black", textUnderlinePosition: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100vw",
                    justifyContent: "space-around",

                    fontWeight: "bold",
                  }}
                >
                  {subMenuItems.map((subMenuItem) => (
                    <div
                      className={styles[("submenu-items", "nestedMenuItem")]}
                      onClick={(event) => handleNestedMenuClick(event)}
                      key={subMenuItem.label}
                    >
                      <div className="product-column" >
                        <img
                          className="product-image"
                          src="/Images/ProductImages/AntiAging/Matryxl.jpg"
                          alt='/'
                          style={{height:"30px",width:"30px"}}
                        />
                      </div>
                      {subMenuItem.label}
                      {subMenuItem?.nestedMenu?.map((nestedMenuItem) => (
                        <Link key={nestedMenuItem} to={nestedMenuItem?.path}>
                          <MenuItem
                            onClose={handleClose}
                            style={{ color: "black" }}
                          >
                            {nestedMenuItem?.title}
                          </MenuItem>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </Menu>
            )}

            <Button
              style={{ color: "black" }}
              id="basic-button"
              component={Link}
              to="/contact"
            >
              Contact Us
            </Button>
            <Button
              style={{ color: "black" }}
              id="basic-button"
              component={Link}
              to="/about"
            >
              About Us
            </Button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
