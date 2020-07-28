import React from "react";

import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      View Deals
    </NavigationItem>
    <NavigationItem link="/">About Us</NavigationItem>
  </ul>
);

export default navigationItems;
