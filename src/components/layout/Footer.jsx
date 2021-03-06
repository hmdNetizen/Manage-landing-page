import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles, useTheme } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

import footerLogo from "../../images/logo-footer.svg";
import SocialIcon from "./../SocialIcon";

const Footer = ({ setValue }) => {
  const useStyles = makeStyles((theme) => ({
    footer: {
      background: theme.palette.common.darkBlue,
      padding: "3em 0",
    },
    footerLink: {
      color: theme.palette.common.lightGrey,
      fontSize: ".9rem",
      textDecoration: "none",
      fontWeight: 300,

      "&:not(:last-child)": {
        marginBottom: ".75em",
      },

      "&:hover": {
        color: theme.palette.common.red,
      },
    },
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        border: `3px solid ${theme.palette.common.red}`,
        borderRadius: "50px",
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
        borderRadius: "50px",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: `2px solid ${theme.palette.common.greyishBlue}`,
        borderRadius: "50px",
      },
    },
    input: {
      background: "white",
      borderRadius: "50px",
      outline: "none",

      "&::placeholder": {
        color: theme.palette.common.greyishBlue,
      },
      [theme.breakpoints.down("sm")]: {
        width: "20em",
      },

      [theme.breakpoints.down("xs")]: {
        width: "12em",
      },
    },
    btn: {
      ...theme.typography.btn,
      marginTop: ".5em",
      marginLeft: ".5em",

      "&:hover": {
        background: theme.palette.secondary.light,
      },
    },
  }));
  const classes = useStyles();
  const theme = useTheme();
  return (
    <footer className={classes.footer}>
      <Grid container direction="row" justify="space-around">
        <Hidden smDown>
          {/* Desktop footer layout */}
          <Grid item>
            <Grid container direction="row">
              <Grid item>
                <Grid container direction="column">
                  <Grid item style={{ marginBottom: "5em" }}>
                    <img src={footerLogo} alt="Logo" />
                  </Grid>
                  <Grid item>
                    {/* Social icons */}
                    <Grid container direction="row" justify="space-between">
                      <Grid item>
                        <a href="https://facebook.com">
                          <SocialIcon d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" />
                        </a>
                      </Grid>
                      <Grid item>
                        <a href="https://youtube.com">
                          <SocialIcon d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z" />
                        </a>
                      </Grid>
                      <Grid item>
                        <a href="https://twitter.com">
                          <SocialIcon d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z" />
                        </a>
                      </Grid>
                      <Grid item>
                        <a href="https://pinterest.com">
                          <SocialIcon d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z" />
                        </a>
                      </Grid>
                      <Grid item>
                        <a href="https://instagram.com">
                          <SocialIcon d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z" />
                        </a>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  style={{ marginLeft: "10em" }}
                >
                  <Typography
                    variant="subtitle2"
                    component={Link}
                    to="/"
                    className={classes.footerLink}
                    onClick={() => setValue(5)}
                  >
                    Home
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component={Link}
                    to="/pricing"
                    className={classes.footerLink}
                    onClick={() => setValue(0)}
                  >
                    Pricing
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component={Link}
                    to="/product"
                    className={classes.footerLink}
                    onClick={() => setValue(1)}
                  >
                    Product
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component={Link}
                    to="/about"
                    className={classes.footerLink}
                    onClick={() => setValue(2)}
                  >
                    About Us
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row">
              <Grid item style={{ marginRight: "10em" }}>
                <Grid container direction="column">
                  <Typography
                    className={classes.footerLink}
                    variant="subtitle2"
                    component={Link}
                    to="/careers"
                    onClick={() => setValue(3)}
                  >
                    Careers
                  </Typography>
                  <Typography
                    className={classes.footerLink}
                    variant="subtitle2"
                    component={Link}
                    to="/community"
                    onClick={() => setValue(4)}
                  >
                    Community
                  </Typography>
                  <Typography
                    className={classes.footerLink}
                    variant="subtitle2"
                    component={Link}
                    to="/about"
                    onClick={() => setValue(2)}
                  >
                    Privacy Policy
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <form>
                      <TextField
                        id="email"
                        variant="outlined"
                        placeholder="Updates in your inbox.."
                        className={classes.root}
                        InputProps={{
                          classes: { input: classes.input },
                        }}
                      />
                      <Button
                        variant="contained"
                        classes={{
                          root: classes.btn,
                        }}
                      >
                        Go
                      </Button>
                    </form>
                  </Grid>
                  <Grid
                    item
                    style={{
                      marginTop: "2em",
                      textAlign: "right",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      style={{
                        fontSize: ".9rem",
                        color: theme.palette.common.greyishBlue,
                      }}
                    >
                      &copy;Copyright 2020. All Right Reserved.
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems="flex-end"
                    style={{ color: theme.palette.common.lightGrey }}
                  >
                    <Typography variant="caption">
                      Challenge by Frontend Mentor
                    </Typography>
                    <Typography variant="caption">
                      Coded by{" "}
                      <span style={{ color: theme.palette.common.red }}>
                        Hamed Jimoh
                      </span>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          {/* Mobile footer layout */}
          <Grid item>
            <Grid container direction="column">
              <Grid item style={{ marginBottom: "2em" }}>
                <form>
                  <TextField
                    id="email"
                    variant="outlined"
                    placeholder="Updates in your inbox.."
                    className={classes.root}
                    InputProps={{
                      classes: { input: classes.input },
                      placeholder: "Updates in your inbox..",
                    }}
                  />
                  <Button
                    variant="contained"
                    classes={{
                      root: classes.btn,
                    }}
                  >
                    Go
                  </Button>
                </form>
              </Grid>
              <Grid item style={{ marginBottom: "2em" }}>
                <Grid container direction="row" justify="space-around">
                  <Grid item>
                    <Grid container direction="column">
                      <Typography
                        variant="subtitle2"
                        component={Link}
                        to="/"
                        className={classes.footerLink}
                      >
                        Home
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        component={Link}
                        to="/pricing"
                        className={classes.footerLink}
                      >
                        Pricing
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        component={Link}
                        to="/product"
                        className={classes.footerLink}
                      >
                        Product
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        component={Link}
                        to="/about"
                        className={classes.footerLink}
                      >
                        About Us
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="column">
                      <Typography
                        className={classes.footerLink}
                        variant="subtitle2"
                        component={Link}
                        to="/careers"
                      >
                        Careers
                      </Typography>
                      <Typography
                        className={classes.footerLink}
                        variant="subtitle2"
                        component={Link}
                        to="/community"
                      >
                        Community
                      </Typography>
                      <Typography
                        className={classes.footerLink}
                        variant="subtitle2"
                        component={Link}
                        to="/about"
                      >
                        Privacy Policy
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item style={{ marginBottom: "3em" }}>
                <Grid container direction="row" justify="space-around">
                  <Grid item>
                    <a href="https://facebook.com">
                      <SocialIcon d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" />
                    </a>
                  </Grid>
                  <Grid item>
                    <a href="https://youtube.com">
                      <SocialIcon d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z" />
                    </a>
                  </Grid>
                  <Grid item>
                    <a href="https://twitter.com">
                      <SocialIcon d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z" />
                    </a>
                  </Grid>
                  <Grid item>
                    <a href="https://pinterest.com">
                      <SocialIcon d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z" />
                    </a>
                  </Grid>
                  <Grid item>
                    <a href="https://instagram.com">
                      <SocialIcon d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z" />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container justify="center">
                <img
                  src={footerLogo}
                  alt="Logo"
                  style={{ minHeight: "2.5em", marginBottom: "2em" }}
                />
              </Grid>
              <Grid item container justify="center">
                <Typography
                  variant="subtitle2"
                  style={{
                    fontSize: ".9rem",
                    color: theme.palette.common.greyishBlue,
                  }}
                >
                  &copy;Copyright 2020. All Right Reserved.
                </Typography>
              </Grid>
              <Grid
                item
                container
                direction="column"
                alignItems="center"
                style={{
                  marginTop: ".5em",
                  color: theme.palette.common.lightGrey,
                }}
              >
                <Typography variant="caption" style={{ marginBottom: ".5em" }}>
                  Challenge by Frontend Mentor
                </Typography>
                <Typography variant="caption">
                  Coded by{" "}
                  <span style={{ color: theme.palette.common.red }}>
                    Hamed Jimoh
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </footer>
  );
};

Footer.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default Footer;
