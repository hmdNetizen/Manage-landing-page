import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import desktopBackground from "../../images/bg-tablet-pattern.svg";
import illustration from "../../images/illustration-intro.svg";

const useStyles = makeStyles((theme) => ({
  topSectionBackground: {
    background: `url(${desktopBackground}) no-repeat`,
    backgroundSize: "cover",
    width: "100%",
    height: "50em",
    marginRight: "-30em",
    marginTop: "-15em",
  },
  illustration: {
    // position: "absolute",

    [theme.breakpoints.down("md")]: {
      top: "5em",
      width: "30em",
    },

    [theme.breakpoints.down("sm")]: {
      top: "2em",
      left: "50%",
      width: "35em",
      transform: "translateX(-50%)",
    },
  },
  primaryHeading: {
    marginBottom: ".75em",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5em",
    },
  },
  primaryTextContent: {
    marginBottom: "1.2em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  btn: {
    ...theme.typography.btn,

    "&:hover": {
      background: theme.palette.secondary.light,
      boxShadow: "0 10px 15px rgba(242, 95, 58, .7)",
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="column">
      <Grid item>
        {/* Top section */}
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          alignItems="center"
        >
          <Grid item md={6} style={{ order: matchesSM ? 2 : undefined }}>
            <Grid container direction="column">
              <Grid item style={{ marginLeft: "7em" }}>
                <Typography variant="h1" className={classes.primaryHeading}>
                  Bring everyone <br /> together to build
                  <br /> better products.
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={classes.primaryTextContent}
                >
                  Manage makes it simple for software teams
                  <br /> to plan day-to-day tasks while keeping the
                  <br /> larger team goals in view.
                </Typography>
              </Grid>
              <Grid item style={{ marginLeft: "7em" }}>
                <Button variant="contained" classes={{ root: classes.btn }}>
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} style={{ height: "40em", position: "relative" }}>
            {/* <img
              src={illustration}
              alt="Illustration"
              className={classes.illustration}
            /> */}
            <div className={classes.topSectionBackground} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
