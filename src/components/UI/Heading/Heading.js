import React from "react";

import classes from "./Heading.css";

const heading = (props) => (
  <h1 className={[classes.Heading, classes[props.hdType]].join(" ")}>
    {props.children}
  </h1>
);

export default heading;
