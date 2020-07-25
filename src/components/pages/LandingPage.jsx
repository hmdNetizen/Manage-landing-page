import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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
    position: "absolute",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        {/* Top section */}
        <Grid container direction="row" alignItems="center">
          <Grid item md={6}>
            &Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            harum dolorum cumque dolor consequatur, molestiae quaerat amet illum
            at alias voluptatem accusantium delectus aspernatur vitae,
            temporibus reprehenderit aperiam nisi neque. &Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Laborum harum dolorum cumque
            dolor consequatur, molestiae quaerat amet illum at alias voluptatem
            accusantium delectus aspernatur vitae, temporibus reprehenderit
            aperiam nisi neque.
          </Grid>
          <Grid
            item
            md={6}
            style={{ height: "40em", width: "100%", position: "relative" }}
          >
            <img
              src={illustration}
              alt="Illustration"
              className={classes.illustration}
            />
            <div className={classes.topSectionBackground} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
