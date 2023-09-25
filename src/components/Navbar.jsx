import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [subMenuItems, setSubMenuItems] = useState([]);
    const [nestedMenuItems, setNestedMenuItems] = useState([]);
  
    const mainMenu = [
      {
        label: 'Products',
        subMenu: [
          {
            label: 'Skin Care',
          
            nestedMenu: [
              'Face Wash',
              'Cleansers',
              'Toners',
              'Pore Minimiser',
              'Peels',
              'Moisturisers',
              'Emollients',
              'Hyperpigmentation & Melasma',
              'Anti Aging',
              'Glow Enhancer Oils',
              'Sun Care',
              'Handmade Soaps',
              'Shower Gels',
              'Masks',
              'Eye Care',
              'Lip Care',
              'Acne Care',
            ],
          },
          {
            label: 'Hair Care',
            nestedMenu: [
              'Shampoo',
              'Hair Growth Serum',
              'Hair Conditioners and Masks',
            ],
          },
          {
            label: 'Foot Care & Hand Care ',
            // nestedMenu: [
            //   'Submenu 1',
            //   'Submenu 2',
            //   'Submenu 3',
            // ],
          },
          {
            label: 'Body Butter',
          },
        ],
      },
    ];
  
    const handleSubMenuClick = (subMenu) => (event) => {
      setSubMenuItems(subMenu);
      setNestedMenuItems([]); // Reset nested menu items
      setAnchorEl(event.currentTarget);
    };
  
    const handleNestedMenuClick = (nestedMenu) => (event) => {
      setNestedMenuItems(nestedMenu);
      setSubMenuItems([]);
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

  const state = useSelector((state) => state.handleCart);
  return (

    

    <nav className="navbar navbar-expand-lg navbar-light bg-Skyblue py-3 ">
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

        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2  text-center">
          <div>
      <Button
        id="basic-button"
        component={Link}
        to="/"
      >
        Home
      </Button>
      <Menu
        id="basic-menu"
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      </Menu>
    </div>
    <div>
      <Button
        id="basic-button"
        component={Link}
        to="/service"
      >
        Services
      </Button>
      <Menu
        id="basic-menu"
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      </Menu>
    </div>
    <div>
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
      <Menu
        
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {subMenuItems.map((subMenuItem) => (
          <div key={subMenuItem.label}>
            <MenuItem onClick={handleNestedMenuClick(subMenuItem.nestedMenu)}>
              {subMenuItem.label}
            </MenuItem>
          </div>
        ))}
        {nestedMenuItems.map((nestedMenuItem) => (
          <MenuItem key={nestedMenuItem} onClick={handleClose}>
            {nestedMenuItem}
          </MenuItem>
        ))}
      </Menu>
    </div>
    
    <div>
      <Button
        id="basic-button"
        component={Link}
        to="/contact"
        
      >
        Contact Us
      </Button>
      <Menu
        id="basic-menu"
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
      </Menu>
    </div>
    <div>
      <Button
        id="basic-button"
        component={Link}
        to="/about"
      >
        About Us
      </Button>
      <Menu
        id="basic-menu"
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

      </Menu>
    </div>
          </ul>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
