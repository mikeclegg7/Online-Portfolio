import React from "react";
import classes from "./Item.css";

//Return JSX with the item. This component is used by the careers, examples and skills page for the larger boxes
const item = (props) => {
  return <article className={classes.Item}>{props.children}</article>;
};

export default item;
