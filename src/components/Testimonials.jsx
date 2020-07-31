import React from "react";
import Swiper from "react-id-swiper";
import "swiper/swiper.scss";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import imageOne from "../images/avatar-anisha.png";
import imageTwo from "../images/avatar-ali.png";
import imageThree from "../images/avatar-richard.png";
import imageFour from "../images/avatar-shanai.png";

const useStyles = makeStyles((theme) => ({
  card: {
    "&.MuiCard-root": {
      overflow: "visible",
    },
    padding: "5em",
    textAlign: "center",
    maxWidth: "40em",
    height: "15em",
    marginTop: "5em",
    marginBottom: "5em",

    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
      paddingLeft: "2em",
      paddingRight: "2em",
    },

    [theme.breakpoints.down("xs")]: {
      maxWidth: "25em",
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  cardPicture: {
    width: "150px",
    position: "absolute",
    top: "-10em",
    left: "50%",
    transform: "translateX(-50%)",

    [theme.breakpoints.down("xs")]: {
      width: 100,
      top: "-9em",
    },
  },
}));

const Testimonials = () => {
  const classes = useStyles();

  const params = {
    pagination: ".swiper-pagination",
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30,
  };
  return (
    <Swiper {...params}>
      <Card classes={{ root: classes.card }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={imageOne}
            alt="Testimonial Author"
            title="Anisha Li"
            className={classes.cardPicture}
          />
          <CardContent>
            <Typography
              variant="h6"
              style={{ marginBottom: "1em", marginTop: "1.5em" }}
            >
              Anisha Li
            </Typography>
            <Typography variant="subtitle2" style={{ lineHeight: 2 }}>
              "Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated."
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card classes={{ root: classes.card }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={imageTwo}
            alt="Testimonial Author"
            title="Ali Bravo"
            className={classes.cardPicture}
          />
          <CardContent>
            <Typography
              variant="h6"
              style={{ marginBottom: "1em", marginTop: "1.5em" }}
            >
              Ali Bravo
            </Typography>
            <Typography variant="subtitle2" style={{ lineHeight: 2 }}>
              We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card classes={{ root: classes.card }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={imageThree}
            alt="Testimonial Author"
            title="Richard Watts"
            className={classes.cardPicture}
          />
          <CardContent>
            <Typography
              variant="h6"
              style={{ marginBottom: "1em", marginTop: "1.5em" }}
            >
              Richard Watts
            </Typography>
            <Typography variant="subtitle2" style={{ lineHeight: 2 }}>
              Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card classes={{ root: classes.card }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={imageFour}
            alt="Testimonial Author"
            title="Shanai Gough"
            className={classes.cardPicture}
          />
          <CardContent>
            <Typography
              variant="h6"
              style={{ marginBottom: "1em", marginTop: "1.5em" }}
            >
              Shanai Gough
            </Typography>
            <Typography variant="subtitle2" style={{ lineHeight: 2 }}>
              Their software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Swiper>
  );
};

export default Testimonials;
