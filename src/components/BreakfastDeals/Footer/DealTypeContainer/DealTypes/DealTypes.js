import React from "react";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import classes from "../DealTypes/DealTypes.css";
import pancakes from "../../../../../assets/images/pancakes.png";
import waffles from "../../../../../assets/images/waffles.png";
import eggsCheese from "../../../../../assets/images/eggsCheese.png";
import breadEgg from "../../../../../assets/images/breadEgg.png";

//console.log(matches);

// xs, extra-small: 0px.
// sm, small: 600px.
// md, medium: 960px.
// lg, large: 1280px.
// xl, extra-large: 1920px.

const dealTypes = (props) => {
  const dealTypesImgsArray = [pancakes, waffles, eggsCheese, breadEgg];
  const theme = useTheme();
  let getGridListCols = 0;
  const xs = useMediaQuery(theme.breakpoints.down("xs"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  if (xs) {
    getGridListCols = 1;
  } else if (sm) {
    getGridListCols = 2;
  } else if (md || lg) {
    getGridListCols = 4;
  }
  const dealImages = dealTypesImgsArray.map((igKey) => {
    return (
      <GridListTile key={igKey}>
        <img src={igKey} alt={igKey} />
        <GridListTileBar
          title="Images food"
          subtitle={<span>by: "Images food subTil"</span>}
          actionIcon={
            <IconButton aria-label={`info about FOOD`} className={classes.icon}>
              <InfoIcon />
            </IconButton>
          }
        />
      </GridListTile>
    );
  });

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={160}
        cols={getGridListCols}
        className={classes.gridList}
      >
        {dealImages}
      </GridList>
    </div>
  );
};

export default dealTypes;
