import React from "react";
import classes from "./skill.css";

import Item from "../UI/Item/Item";
import Image from "../Image/Image";

//Return JSX with the skill info and the an image.
const skill = (props) => {
  return (
    <Item>
      <div className={classes.Skill_IMG}>
        <Image whichImage={props.whichImg} />
      </div>
      <div className={classes.Skill_Main}>
        <h2>{props.name}</h2>
        <p>
          <strong>Experience: </strong>
          {props.experience}
        </p>
        <strong>Details: </strong> {props.details}
      </div>
    </Item>
  );
};

export default skill;
