import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
//import DrawToggle from '../SideDraw/DrawToggle/DrawToggle';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";

import classes from "./SideDraw.css";

const SideDraw = (props) => {
  let attachedClasses = [classes.SideDraw, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDraw, classes.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div onClick={props.closed} className={classes.CloseButton}>
          X
        </div>
        <div className={classes.Links}>
          <strong>MENU</strong>
          <hr />
          <NavigationItems clicked={props.closed} />
        </div>
      </div>
    </Aux>
  );
};

export default SideDraw;
