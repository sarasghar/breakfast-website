import React from "react";

import BFlogo from "../../assets/images/logo.png";
import classes from "./Logo.css";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={BFlogo} alt="Breakfast Deals" />
  </div>
);

export default logo;
