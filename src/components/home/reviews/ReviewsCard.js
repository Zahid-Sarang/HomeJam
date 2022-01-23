import React from "react";

// for material ui styling
import useStyles from "./style";

// react icon
import * as BsIcons from "react-icons/bs";

// material ui components
import { Typography, Grid, Container } from "@material-ui/core";

// importing component
import ReviewsInfo from "./ReviewsInfo";

// importing images
import img_1 from "../../../assest/Profile/Img-1.png";
import img_2 from "../../../assest/Profile/Img-2.png";
import img_3 from "../../../assest/Profile/Img-3.png";
const ReviewsCard = () => {
  // hooks for material ui styling
  const classes = useStyles();
  return (
    <>
      <div className={classes.reviews}>
        <div className={classes.reviews__show}>
          <div className={classes.reviews__title}>
            <Typography
              variant="h3"
              style={{ fontFamily: "Libre Baskerville", fontStyle: "normal" }}
            >
              Reviews
              {/* underline */}
              <span className={classes.reviews__line}></span>
            </Typography>
          </div>

          <div className={classes.reviews__view}>
            <div className={classes.reviews__pagination}>
              <Typography
                variant="h6"
                style={{ fontFamily: "Nunito", fontStyle: "normal" }}
              >
                1
                <span style={{ opacity: "0.5", marginRight: "2rem" }}>/12</span>
              </Typography>
              <BsIcons.BsArrowLeft size="1em" style={{ marginRight: "2rem" }} />
              <BsIcons.BsArrowRight
                size="1em"
                style={{ marginRight: "2rem" }}
              />
            </div>
          </div>
        </div>

        <Container
          className={classes.reviews__grid}
          style={{ paddingLeft: 0 }}
          maxWidth="lg"
        >
          <Grid container spacing={3}>
            <ReviewsInfo img={img_1} name="Hellen Jummy" country="" />
            <ReviewsInfo img={img_2} name="Isaac Oluwatemilorun" country="" />
            <ReviewsInfo img={img_3} name="Hellen Jummy" country="" />
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ReviewsCard;
