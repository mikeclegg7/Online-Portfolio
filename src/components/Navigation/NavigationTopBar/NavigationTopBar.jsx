import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawToggle from "../SideDraw/DrawToggle/DrawToggle";
import classes from "./NavigationTopBar.css";

const NavTopBar = (props) => (
  <div className={classes.NavTopBar}>
    <DrawToggle openSideDraw={props.openSideDraw} />
    <div className={classes.DesktopOnly}>
      <NavigationItems />
    </div>
  </div>
);

export default NavTopBar;
