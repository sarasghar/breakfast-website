import React from "react";

import Aux from "../../../hoc/Auxiliary/Auxiliary";
import classes from "../Banner/Banner.css";
import bannerImage from "../../../assets/images/banner.png";

const banner = (props) => (
  <Aux>
    <div className={classes.Banner}>
      <img src={bannerImage} alt="Breakfast.se" />
      <div className={classes.BannerInfo}>
        <h1>Welcome to the Breakfast Deals</h1>
        <h2>Made with organic ingredients, freshly baked everyday </h2>
        <button className={classes.Banner_Button}>Read More</button>
      </div>
    </div>
  </Aux>
);

export default banner;
