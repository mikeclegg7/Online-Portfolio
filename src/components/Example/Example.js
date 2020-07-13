import React from "react";
import classes from "./Example.css";
import { NavLink } from "react-router-dom";

import Item from "../UI/Item/Item";
import Image from "../Image/Image";

//Return JSX with the example info and also a screenshot/image and link.
const example = (props) => {
  //This code checks if there is a readMore prop, if so returns it as part of a nav link, else returns empty.
  let readMore = props.readMore ? (
    <p>
      <strong>
        <NavLink to={props.readMore} exact={props.exact}>
          Read more about this project
        </NavLink>
      </strong>
    </p>
  ) : (
    ""
  );

  readMore = "";

  return (
    <Item>
      <div className={classes.Example_IMG}>
        <Image whichImage={props.whichImg} />
      </div>
      <div className={classes.Example_Main}>
        <h2>{props.name}</h2>
        <p>
          <strong>Summary: </strong>
          <br /> {props.summary}
        </p>
        {readMore}
        <p>
          <strong>Live Link: </strong>{" "}
          <a href={props.linkUrl} target="blank">
            {props.linkTxt}
          </a>
        </p>
      </div>
    </Item>
  );
};

export default example;
