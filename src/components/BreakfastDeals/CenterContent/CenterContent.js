import React from "react";

import PlatterDeals from "../CenterContent/PlatterDeals/PlatterDeals";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import classes from "../CenterContent/CenterContent.css";

const centerContent = (props) => (
  <Aux>
    <div className={classes.CenterContent}>
      <PlatterDeals />
    </div>
  </Aux>
);

export default centerContent;
