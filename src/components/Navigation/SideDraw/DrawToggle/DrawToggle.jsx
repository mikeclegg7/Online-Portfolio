import React from "react";
import classes from "./DrawToggle.css";

const drawToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.openSideDraw}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawToggle;
