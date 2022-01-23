import React from "react";

// material ui styling
import useStyles from "./style";

//  react-icons
import * as BsIcons from "react-icons/bs";

// importing components from material ui
import {
  Typography,
  Grid,
  CardMedia,
  CardContent,
  CardActions,
  Card,
} from "@material-ui/core";

const ArtiestCard = ({ img, name, category }) => {
  // hooks for material ui styling
  const classes = useStyles();
  return (
    <>
      <Grid item>
        <Card
          className={classes.upcoming__card}
          style={{ backgroundColor: "#111220" }}
        >
          <CardMedia
            className={classes.upcoming__cardMedia}
            image={img}
            title="Artiest"
          />
          <CardContent className={classes.upcoming__cardContent}>
            <Typography variant="h8" className={classes.upcoming__category}>
              {category}
            </Typography>
            <Typography
              variant="h5"
              style={{
                marginTop: 10,
                fontFamily: "Libre Baskerville",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "20px",
                color: "#fff",
              }}
            >
              {name}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography className={classes.upcoming_moreInfo} variant="h6">
              More Info
            </Typography>
            <BsIcons.BsArrowRight color="#0259EB" size="1.5em" />
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default ArtiestCard;
