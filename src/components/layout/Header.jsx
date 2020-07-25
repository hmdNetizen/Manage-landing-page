import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
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

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Header = (props) => {
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

  //state values
  const [value, setValue] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  //Responsive breakpoints
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  // This function tracks the changes in the value of the tab and applies selection to the current tabs
  const handleChange = (event, newValue) => setValue(newValue);

  //This handles the closure of the drawer when a menu is clicked
  const handleClose = () => {
    setOpenDrawer(false);
  };

  const tabs = [
    { id: 0, name: "Pricing", link: "/" },
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
            setSelectedTab(tab.id);
          }
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
      <Button variant="contained" classes={{ root: classes.btn }}>
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
              onClick={() => {
                setSelectedTab(tab.id);
                handleClose();
              }}
              selected={selectedTab === tab.id}
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
      {/* <HideOnScroll
        {...props}
        style={{ background: trigger ? "#fff" : "transparent" }}
      > */}
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
          <img src={logo} alt="Company Logo" />
          {matchesMD ? mobileTabs : desktopTabs}
        </Toolbar>
      </AppBar>
      {/* </HideOnScroll> */}
      <Toolbar className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
