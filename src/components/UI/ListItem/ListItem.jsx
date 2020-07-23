import React from "react";
import classes from "./ListItem.css";

//Return JSX with the item - These are essentially small boxes listing skills. They are used on the skills page in the summary.
const listItem = (props) => {
  return <article className={classes.Item}>{props.children}</article>;
};

export default listItem;
