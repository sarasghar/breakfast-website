import React from "react";

import CheesePlatter from "../PlatterDeals/CheesePlatter/CheesePlatter";
import BreadPlatter from "../PlatterDeals/BreadPlatter/BreadPlatter";

import classes from "../PlatterDeals/PlatterDeals.css";
import Aux from "../../../../hoc/Auxiliary/Auxiliary";
import Heading from "../../../UI/Heading/Heading";

import Grid from "@material-ui/core/Grid";

const platterDeals = (props) => (
  <Aux>
    <div className={classes.PlatterDeals}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item md={12}>
          <Heading hdType="H1">Choose from our special platters </Heading>
        </Grid>
        <Grid item md={12}>
          <Heading hdType="H2">
            Get a taste of all goodness in one plate
          </Heading>
        </Grid>
      </Grid>
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item md={5}>
          <CheesePlatter />
        </Grid>
        <Grid item md={7}>
          <BreadPlatter />
        </Grid>
      </Grid>
    </div>
  </Aux>
);

export default platterDeals;
