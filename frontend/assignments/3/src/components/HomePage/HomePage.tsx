import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import MenuIcon from "@mui/icons-material/Menu";

/**
 * Component for the home page.
 */
const useStyles = createUseStyles({
  Header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2596be",
    padding: "0.5rem",
    color: "whitesmoke",
  },
  myPort: {
    color: "white",
    "@media (max-width: 768px)": {
      display: "none", // Hide the "My Portfolio" link in mobile view
    },
  },
  menuBar: {
    float: "right",
    display: "none", // Hide the menu by default
    "@media (max-width: 768px)": {
      display: "flex", // Show the menu only in mobile view
    },
  },
  ti: {
    paddingRight: "50rem",
    "@media (max-width: 768px)": {
      paddingRight: "1rem",
    },
  },
});

/**
 * Home page component.
 */
export function HomePage() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  /**
   * Handle click event for opening the menu.
   * @param event - Click event.
   */
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * Handle close event for closing the menu.
   */
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className={classes.Header}>
        <Link to="/explore" style={{ color: "white", textDecoration: "none" }}>
          <h1 className={classes.ti}>
            <img src="src/components/HomePage/logoicon.png" alt="logo" />
            KDU Stock Market
          </h1>
        </Link>
        {/* Hamburger icon for mobile view */}
        <div className={classes.menuBar}>
          <IconButton
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
            size="large"
          >
            <MenuIcon />
          </IconButton>
          {/* Menu for mobile view */}
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link
                to="/transactions"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Summarizer
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/transactions"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                My Portfolio
              </Link>
            </MenuItem>
          </Menu>
        </div>
        {/* "My Portfolio" link */}
        <Link to="/transactions" style={{ textDecoration: "none" }}>
          <h2 className={classes.myPort}>Summarizer</h2>
        </Link>
        <Link to="/transactions" style={{ textDecoration: "none" }}>
          <h2 className={classes.myPort}>My Portfolio</h2>
        </Link>
      </div>
    </div>
  );
}
