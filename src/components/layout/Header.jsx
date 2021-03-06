import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { makeStyles, useTheme } from "@material-ui/styles";
import logo from "../../images/logo.svg";

const Header = ({ value, setValue }) => {
  const trigger = useScrollTrigger();
  const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
      marginBottom: "1em",
    },
    toolbar: {
      justifyContent: "space-around",
      [theme.breakpoints.down("md")]: {
        justifyContent: "space-between",
      },
    },
    btn: {
      ...theme.typography.btn,

      "&:hover": {
        background: theme.palette.secondary.light,
        boxShadow: "0 10px 15px rgba(242, 95, 58, .7)",
      },
    },
    logoButton: {
      "&:hover": {
        background: "transparent",
      },
    },
    tab: {
      color: theme.palette.common.blue,
      minWidth: 10,
      textAlign: "center",
      textTransform: "none",
      margin: "auto 1em",
      opacity: 1,
      fontWeight: 500,

      "&:hover": {
        opacity: 0.8,
      },
    },
    tabSelected: {
      fontWeight: 700,
    },
    tabIndicator: {
      background: "transparent",
    },
    menu: {
      width: 35,
      height: 35,
      color: theme.palette.common.blue,
    },
    menuIconBtn: {
      marginRight: "-.5em",
      "&:hover": {
        background: "transparent",
      },
    },
    listItem: {
      textAlign: "center",
      color: theme.palette.common.lightGrey,
    },
    drawer: {
      background: theme.palette.primary.main,
    },
    mobileTabSelected: {
      color: theme.palette.common.red,
    },
  }));

  const classes = useStyles();

  //Responsive breakpoints
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  //state values
  const [openDrawer, setOpenDrawer] = useState(false);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  // This function tracks the changes in the value of the tab and applies selection to the current tabs
  const handleChange = (event, newValue) => setValue(newValue);

  //This handles the closure of the drawer when a menu is clicked
  const handleClose = () => setOpenDrawer(false);

  const tabs = [
    { id: 0, name: "Pricing", link: "/pricing" },
    { id: 1, name: "Products", link: "/product" },
    { id: 2, name: "About Us", link: "/about" },
    { id: 3, name: "Careers", link: "/careers" },
    { id: 4, name: "Community", link: "/community" },
  ];

  useEffect(() => {
    [...tabs].forEach((tab) => {
      switch (window.location.pathname) {
        case tab.link:
          if (value !== tab.id) {
            setValue(tab.id);
          }
          break;
        case "/":
          setValue(5);
          break;
        case "/getstarted":
          setValue(6);
          break;
        default:
          break;
      }
    });
  });

  //Navigation menu on desktop
  const desktopTabs = (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation Tabs"
        classes={{ indicator: classes.tabIndicator }}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            disableRipple
            label={tab.name}
            className={classes.tab}
            classes={{ selected: classes.tabSelected }}
            component={Link}
            to={tab.link}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        to="/getstarted"
        onClick={() => {
          setValue(6);
          handleClose();
        }}
        variant="contained"
        classes={{ root: classes.btn }}
      >
        Get Started
      </Button>
    </Fragment>
  );

  //Navigation on small screen breakpoints
  const mobileTabs = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          {tabs.map((tab) => (
            <ListItem
              divider
              button
              disableRipple
              key={tab.id}
              className={classes.listItem}
              classes={{ selected: classes.mobileTabSelected }}
              component={Link}
              to={tab.link}
              onClick={(event) => {
                setValue(event, tab.id);
                handleClose();
              }}
              selected={value === tab.id}
            >
              <ListItemText>{tab.name}</ListItemText>
            </ListItem>
          ))}
          <ListItem>
            <Button variant="contained" classes={{ root: classes.btn }}>
              Get Started
            </Button>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        disableRipple
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.menuIconBtn}
      >
        <MenuIcon className={classes.menu} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      {/* </HideOnScroll> */}
      <AppBar
        elevation={trigger ? 24 : 0}
        style={{
          backgroundColor: trigger ? "#fff" : "transparent",
          boxShadow: trigger
            ? "5px 0px 27px -5px rgba(0, 0, 0, 0.3) !important"
            : undefined,
        }}
      >
        <Toolbar className={classes.toolbar}>
          <Button
            disableRipple
            className={classes.logoButton}
            component={Link}
            to="/"
            onClick={() => {
              setValue(5);
            }}
          >
            <img src={logo} alt="Company Logo" />
          </Button>
          {matchesMD ? mobileTabs : desktopTabs}
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolbarMargin} />
    </Fragment>
  );
};

Header.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
  selectedTab: PropTypes.number.isRequired,
};

export default Header;
