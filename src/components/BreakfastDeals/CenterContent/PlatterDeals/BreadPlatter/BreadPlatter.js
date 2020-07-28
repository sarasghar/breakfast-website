import React from "react";

import breadPlatterImg from "../../../../../assets/images/breadPlatter.png";
import classes from "../BreadPlatter/BreadPlatter.css";
import Aux from "../../../../../hoc/Auxiliary/Auxiliary";

const breadPlatter = (props) => (
  <Aux>
    <div className={classes.BreadPlatter}>
      <img src={breadPlatterImg} alt="Bread Platter" />
    </div>
  </Aux>
);

export default breadPlatter;
