import React from "react";
import useStyles from "./style";
import {
  Typography,
  Grid,
  Container,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Box,
} from "@material-ui/core";
const ReviewsInfo = ({ img, name}) => {
  // hooks for material ui styling
  const classes = useStyles();
  return (
    <>
      <Grid item>
        <Card
          className={classes.reviews__card}
          style={{ backgroundColor: "rgb(10,11,26)" }}
        >
          <Box className={classes.reviews__heding}>
            <Box>
              <CardMedia
                className={classes.reviews__profile}
                image={img}
                title="User"
              />
            </Box>
            <Box>
              <CardContent className={classes.reviews__info}>
                <Typography variant="h6" className={classes.reviews__name}>
                  {name}
                </Typography>
                <Typography variant="h6" className={classes.reviews__address}>
                  <span></span>Palo Alto, CA
                </Typography>
              </CardContent>
            </Box>
          </Box>
          <Typography className={classes.reviews__paraghraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
            donec in nisi vitae. Vestibulum pellentesque eget laoreet
            adipiscing.
          </Typography>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.reviews__background}></Card>
      </Grid>
    </>
  );
};

export default ReviewsInfo;
