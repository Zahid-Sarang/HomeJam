import React from "react";

import useStyles from "./style";

import Benny from "../../../assest/show image/Benny.png";
import Vijay from "../../../assest/show image/Vijay.png";
import Andrea from "../../../assest/show image/Andrea.png";
import shilpa from "../../../assest/show image/shilpa.png";

import { Typography, Grid, Container } from "@material-ui/core";
import ArtiestCard from "./ArtiestCard";

const Upcomming = () => {
  // hooks for material ui styling
  const classes = useStyles();
  return (
    <>
      <div className={classes.upcoming}>
        <div className={classes.upcoming__show}>
          <div className={classes.upcoming__title}>
            <Typography variant="h3" style={{ fontFamily: "Libre Baskerville",fontStyle: "normal"}}>
              Upcoming Shows
              {/* underline */}
              <span className={classes.upcoming__line}></span>
            </Typography>
          </div>

          <div className={classes.upcoming__view}>
            <Typography variant="h6" style={{ fontFamily: "Nunito",fontStyle: "normal"}}>View All</Typography>
          </div>
        </div>
        <div >
        <Container className={classes.upcoming__cardGrid} style={{paddingLeft:0}} maxWidth='lg'>
          <Grid container spacing={5}>
            <ArtiestCard img={Benny} category="folk" name="Benny Dayal" />
            <ArtiestCard img={Vijay} category="Bollywood" name="Vijay Yesudas" />
            <ArtiestCard img={Andrea} category="folk" name="Andrea Jeremiah" />
            <ArtiestCard img={shilpa} category="folk" name="Shilpa Rao" />
          </Grid>
        </Container>
        </div>
      </div>
    </>
  );
};

export default Upcomming;
