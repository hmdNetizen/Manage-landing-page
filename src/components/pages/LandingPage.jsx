import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import desktopBackground from "../../images/bg-tablet-pattern.svg";
import illustration from "../../images/illustration-intro.svg";
import Testimonials from "../Testimonials";
import bgSimplify from "../../images/bg-simplify-section-desktop.svg";

const useStyles = makeStyles((theme) => ({
  backgroundContainer: {
    height: "50em",
    width: "100%",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: "60em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40em",
    },
  },
  topSectionBackground: {
    background: `url(${desktopBackground}) no-repeat`,
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    marginRight: "-35em",
    marginTop: "-15em",

    [theme.breakpoints.down("sm")]: {
      minHeight: "100%",
      marginRight: "-10em",
      marginTop: "-20em",
    },

    [theme.breakpoints.down("xs")]: {
      height: "100%",
      width: "100%",
      marginTop: "-15em",
    },
  },
  illustration: {
    position: "absolute",
    top: "2em",
    right: "5em",

    [theme.breakpoints.down("md")]: {
      top: "5em",
      width: "30em",
    },

    [theme.breakpoints.down("sm")]: {
      top: "5em",
      left: "50%",
      right: 0,
      maxWidth: "100%",
      transform: "translateX(-50%)",
    },

    [theme.breakpoints.down("xs")]: {
      top: "3em",
      maxWidth: "100%",
    },
  },
  primaryContentGrid: {
    marginLeft: "7em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      padding: "0 3em",
      textAlign: "center",
    },
  },
  primaryHeading: {
    marginBottom: ".75em",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5em",
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: "-8em",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
      marginTop: "-5em",
    },
  },
  primaryTextContent: {
    marginBottom: "1.2em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  btnGrid: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "-7em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
  },
  btn: {
    ...theme.typography.btn,

    "&:hover": {
      background: theme.palette.secondary.light,
      boxShadow: "0 10px 15px rgba(242, 95, 58, .7)",
    },
  },
  btnWhite: {
    ...theme.typography.btn,
    background: theme.palette.common.lightGrey,
    color: theme.palette.common.red,
    fontWeight: 500,

    "&:hover": {
      background: theme.palette.common.lightGrey,
      color: theme.palette.secondary.light,
    },

    [theme.breakpoints.down("xs")]: {
      width: "150px",
    },
  },
  headingAbout: {
    width: "100%",
    borderTopLeftRadius: "50px",
    borderBottomLeftRadius: "50px",

    [theme.breakpoints.down("md")]: {
      fontSize: "1.15rem",
    },

    [theme.breakpoints.down("sm")]: {
      background: theme.palette.common.paleRed,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  numbering: {
    background: theme.palette.common.red,
    display: "inline-block",
    padding: ".5em 1.2em",
    borderRadius: "50px",
    marginRight: "1.5em",
    color: theme.palette.common.lightGrey,

    [theme.breakpoints.down("sm")]: {
      padding: ".3em 1em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: ".25em .75em",
      marginRight: "1em",
    },
  },
  secondaryHeading: {
    marginBottom: ".75em",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  secondSectionBackground: {
    background: `url(${desktopBackground}) no-repeat`,
    backgroundSize: "cover",
    width: "30em",
    height: "25em",
    position: "absolute",
    left: "-15em",
  },
  testimonialContainer: {
    position: "relative",
    marginTop: "5em",
  },
  cardContainer: {
    height: "30em",
    width: "100%",
    marginTop: "5em",
    marginBottom: "5em",
  },
  bottomSectionContainer: {
    background: theme.palette.common.red,
    height: "12em",
    width: "100%",

    [theme.breakpoints.down("xs")]: {
      height: "15em",
    },
  },
  simplifyBackground: {
    background: `url(${bgSimplify}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    position: "relative",
  },
  btnWhiteGrid: {
    position: "absolute",
    right: "5em",
    zIndex: 9,

    [theme.breakpoints.down("xs")]: {
      right: 0,
      textAlign: "center",
      left: "50%",
      transform: "translate(-50%, 10em)",
    },
  },
  simplifyGrid: {
    position: "absolute",
    left: "5em",
    color: theme.palette.common.lightGrey,

    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      left: "50%",
      transform: "translate(-50%, 1em)",
    },
  },
}));

const LandingPage = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Grid item style={{ marginBottom: matchesSM ? "5em" : 0 }}>
        {/* Top section */}
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          alignItems="center"
          justify="center"
        >
          <Grid item md={6} style={{ order: matchesSM ? 2 : undefined }}>
            <Grid container direction="column">
              <Grid item className={classes.primaryContentGrid}>
                <Typography variant="h1" className={classes.primaryHeading}>
                  Bring everyone
                  <br style={{ display: matchesSM ? "none" : "inline" }} />{" "}
                  together to build
                  <br style={{ display: matchesSM ? "none" : "inline" }} />{" "}
                  better products.
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={classes.primaryTextContent}
                >
                  Manage makes it simple for software teams
                  <br style={{ display: matchesSM ? "none" : "inline" }} /> to
                  plan day-to-day tasks while keeping the
                  <br style={{ display: matchesSM ? "none" : "inline" }} />{" "}
                  larger team goals in view.
                </Typography>
              </Grid>
              <Grid
                className={classes.btnGrid}
                item
                style={{
                  marginLeft: matchesSM ? 0 : "7em",
                  textAlign: matchesSM ? "center" : "inherit",
                }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to="/getstarted"
                  onClick={() => setValue(6)}
                  classes={{ root: classes.btn }}
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} className={classes.backgroundContainer}>
            <img
              src={illustration}
              alt="Illustration"
              className={classes.illustration}
            />
            <div className={classes.topSectionBackground} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* Second Section */}
        <Grid container direction="row" justify="space-between">
          <Grid item md={6}>
            {/* Left second section */}
            <Grid container direction="column">
              <Grid
                item
                style={{
                  marginLeft: matchesSM ? 0 : "7em",
                  marginTop: matchesSM ? "3em" : 0,
                  marginBottom: matchesSM ? "1em" : 0,
                  padding: matchesSM ? "0 3em" : 0,
                  textAlign: matchesSM ? "center" : "inherit",
                }}
              >
                <Typography variant="h2" className={classes.secondaryHeading}>
                  What’s different about{" "}
                  <br style={{ display: matchesSM ? "none" : "inline" }} />{" "}
                  Manage?
                </Typography>
                <Typography variant="subtitle2" style={{ marginBottom: "5em" }}>
                  Manage provides all the functionality your{" "}
                  <br style={{ display: matchesSM ? "none" : "inline" }} /> team
                  needs, without the complexity. Our
                  <br style={{ display: matchesSM ? "none" : "inline" }} />{" "}
                  software is tailor-made for modern digital
                  <br style={{ display: matchesSM ? "none" : "inline" }} />
                  product teams.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              style={{
                height: "100%",
                width: "100%",
                position: "relative",
              }}
            >
              <Hidden smDown>
                <div className={classes.secondSectionBackground} />
              </Hidden>
            </Grid>
          </Grid>
          <Grid item md={6}>
            {/* Right second section */}
            <Grid container direction="column">
              <Grid
                item
                style={{
                  marginBottom: "2.5em",
                  marginRight: matchesSM ? 0 : "6.5em",
                }}
              >
                <Grid container direction="row">
                  <Typography
                    variant="h5"
                    gutterBottom
                    className={classes.headingAbout}
                  >
                    <span className={classes.numbering}>01</span>
                    Track company-wide progress
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{
                      marginLeft: matchesSM ? "0" : "6.1em",
                      padding: matchesSM ? "0 3em" : 0,
                      textAlign: matchesSM ? "justify" : "inherit",
                    }}
                  >
                    See how your day-to-day tasks fit into the wider vision. Go
                    from tracking progress at the milestone level all the way
                    done to the smallest of details. Never lose sight of the
                    bigger picture again.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                style={{
                  marginBottom: "2.5em",
                  marginRight: matchesSM ? 0 : "6.5em",
                }}
              >
                <Grid container direction="row">
                  <Typography
                    variant="h5"
                    gutterBottom
                    className={classes.headingAbout}
                  >
                    <span className={classes.numbering}>02</span>
                    Advanced built-in reports
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{
                      marginLeft: matchesSM ? "0" : "6.1em",
                      padding: matchesSM ? "0 3em" : 0,
                      textAlign: matchesSM ? "justify" : "inherit",
                    }}
                  >
                    Set internal delivery estimates and track progress toward
                    company goals. Our customisable dashboard helps you build
                    out the reports you need to keep key stakeholders informed.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                style={{
                  marginBottom: "2.5em",
                  marginRight: matchesSM ? 0 : "6.5em",
                }}
              >
                <Grid container direction="row">
                  <Typography
                    variant="h5"
                    gutterBottom
                    className={classes.headingAbout}
                  >
                    <span className={classes.numbering}>03</span>
                    Everything you need in one place
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{
                      marginLeft: matchesSM ? "0" : "6.1em",
                      padding: matchesSM ? "0 3em" : 0,
                      textAlign: matchesSM ? "justify" : "inherit",
                    }}
                  >
                    Stop jumping from one service to another to communicate,
                    store files, track tasks and share documents. Manage offers
                    an all-in-one team productivity solution.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Testimonial Section */}
      <Grid
        item
        container
        direction="column"
        className={classes.testimonialContainer}
      >
        <Grid item>
          <Typography
            variant="h2"
            align="center"
            className={classes.secondaryHeading}
          >
            What they've said
          </Typography>
        </Grid>
        <Grid item container justify="center" className={classes.cardContainer}>
          <Testimonials />
        </Grid>
      </Grid>
      <Grid item container justify="center" style={{ marginBottom: "10em" }}>
        <Button
          variant="contained"
          component={Link}
          to="/getstarted"
          onClick={() => setValue(6)}
          classes={{ root: classes.btn }}
        >
          Get Started
        </Button>
      </Grid>
      <Grid
        item
        container
        direction={matchesXS ? "column" : "row"}
        justify="space-between"
        alignItems="center"
        className={classes.bottomSectionContainer}
      >
        <Grid item className={classes.simplifyGrid}>
          <Typography
            variant="h4"
            style={{
              fontSize: matchesXS ? "1.5rem" : matchesSM ? "1.3rem" : undefined,
            }}
          >
            Simplify how your team{" "}
            <br style={{ display: matchesXS ? "none" : "inline" }} /> works
            today
          </Typography>
        </Grid>
        <Grid item className={classes.btnWhiteGrid}>
          <Button
            variant="contained"
            component={Link}
            to="/getstarted"
            onClick={() => setValue(6)}
            classes={{ root: classes.btnWhite }}
          >
            Get Started
          </Button>
        </Grid>
        <div className={classes.simplifyBackground} />
      </Grid>
    </Grid>
  );
};

LandingPage.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default LandingPage;
