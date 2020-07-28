import React, { Component } from "react";

import Aux from "../../../../hoc/Auxiliary/Auxiliary";
import DealTypes from "./DealTypes/DealTypes";
import classes from "../DealTypeContainer/DealTypeContainer.css";
import Heading from "../../../UI/Heading/Heading";
import Grid from "@material-ui/core/Grid";

class DealTypeContainer extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.DealTypeContainer}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item md={12}>
              <Heading hdType="H1">A breakfast never to forget</Heading>
            </Grid>
            <Grid item md={12}>
              <Heading hdType="H2">Sweet and savoury breakfast</Heading>
            </Grid>
          </Grid>
          <DealTypes />
        </div>
      </Aux>
    );
  }
}

export default DealTypeContainer;
