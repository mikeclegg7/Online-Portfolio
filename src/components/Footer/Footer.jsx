import React from "react";
import classes from "./Footer.css";
import Avatar from "../../assets/images/avatar.jpg";

//Return a little footer
const Footer = (props) => (
  <footer className={classes.Footer}>
    <div className={classes.FooterBlock}>
      <div className={classes.FooterAvatar}>
        <img src={Avatar} alt="Mike avatar" className={classes.Avatar} />
      </div>
      <div className={classes.FooterText}>
        <p>
          Created in React by Mike Clegg
          <br />
          <a
            href="https://github.com/mikeclegg7/Online-Portfolio"
            target="blank"
          >
            GitHub
          </a>{" "}
          -{" "}
          <a
            href="https://www.linkedin.com/in/mike-clegg-6292aa37/"
            target="blank"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
