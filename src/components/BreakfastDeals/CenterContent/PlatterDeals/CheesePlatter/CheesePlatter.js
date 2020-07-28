import React from "react";

import cheesePlatterImg from "../../../../../assets/images/cheesePlatter.png";
import classes from "../CheesePlatter/CheesePlatter.css";
import Aux from "../../../../../hoc/Auxiliary/Auxiliary";

const cheesePlatter = (props) => (
  <Aux>
    <div className={classes.CheesePlatter}>
      <img src={cheesePlatterImg} alt="Cheese Platter" />
    </div>
  </Aux>
);

export default cheesePlatter;
