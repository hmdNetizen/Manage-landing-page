import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../../images/logo.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "80vh",
  },
  btn: {
    marginBottom: "2em",
    "&:hover": {
      background: "transparent",
    },
  },
  logo: {
    height: "2.5em",
  },
  text: {
    fontSize: "3em",
    color: theme.palette.common.red,
  },
}));

const Community = ({ setValue }) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.mainContainer}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Button
          disableRipple
          component={Link}
          to="/"
          onClick={() => setValue(5)}
          className={`${classes.btn} animate__animated animate__lightSpeedInLeft animate__slow`}
        >
          <img src={logo} className={`${classes.logo}`} alt="Manage Logo" />
        </Button>
      </Grid>
      <Grid item>
        <Typography
          variant="h2"
          className={`${classes.text} animate__animated animate__rotateIn animate__slow`}
        >
          Community
        </Typography>
      </Grid>
    </Grid>
  );
};

Community.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default Community;
