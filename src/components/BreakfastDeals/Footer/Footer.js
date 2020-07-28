import React from "react";

import DealTypeContainer from "../Footer/DealTypeContainer/DealTypeContainer";
import classes from "../Footer/Footer.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary";

const footer = (props) => {
  return (
    <Aux>
      <div className={classes.Footer}>
        <DealTypeContainer />
      </div>
    </Aux>
  );
};

export default footer;
