import React from "react";

import TAD from "../../assets/images/TAD-Screenshot.jpg";
import Quiz from "../../assets/images/Quiz-Screenshot.jpg";
import BB from "../../assets/images/BurgerBuilder-Screenshot.jpg";
import Port from "../../assets/images/Port-Screenshot.jpg";

import htmlLogo from "../../assets/images/html-icon.jpg";
import cssLogo from "../../assets/images/css-icon.jpg";
import wordpressLogo from "../../assets/images/Wordpress-icon.jpg";
import jqueryLogo from "../../assets/images/jQuery-icon.jpg";
import reactLogo from "../../assets/images/React-icon.jpg";
import npmLogo from "../../assets/images/npm-icon.jpg";
import phpLogo from "../../assets/images/php-icon.jpg";
import ajaxLogo from "../../assets/images/ajax-icon.jpg";
import firebaseLogo from "../../assets/images/firebase-icon.jpg";
import sassLogo from "../../assets/images/sass-icon.jpg";
import webpackLogo from "../../assets/images/webpack-icon.jpg";
import otherIcon from "../../assets/images/programming-general.jpg";

import BB_main from "../../assets/images/Ex-BB-BurgerBuilder-Main.jpg";
import BB_signIn from "../../assets/images/Ex-BB-Sign-in.jpg";
import BB_orders from "../../assets/images/Ex-BB-Orders.jpg";

const image = (props) => {
  const getImageURL = (which) => {
    switch (which) {
      case "tad":
        return TAD;
      case "quiz":
        return Quiz;
      case "burgerBuilder":
        return BB;
      case "port":
        return Port;
      case "html":
        return htmlLogo;
      case "css":
        return cssLogo;
      case "wordpress":
        return wordpressLogo;
      case "jquery":
        return jqueryLogo;
      case "react":
        return reactLogo;
      case "npm":
        return npmLogo;
      case "php":
        return phpLogo;
      case "ajax":
        return ajaxLogo;
      case "firebase":
        return firebaseLogo;
      case "sass":
        return sassLogo;
      case "webpack":
        return webpackLogo;
      case "other":
        return otherIcon;
      case "BB-main":
        return BB_main;
      case "BB-sign-in":
        return BB_signIn;
      case "BB-orders":
        return BB_orders;
      default:
        return null;
    }
  };

  return <img src={getImageURL(props.whichImage)} alt={props.whichImage} />;
};

export default image;
