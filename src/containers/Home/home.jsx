import React, { Component } from "react";

import Selfie from "../../assets/images/Mike-Clegg-Selfie.jpg";
import classes from "./home.css";

class home extends Component {
  //Make sure the user is scrolled to the top when the component is mounted.
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  //Return the main welcome/homepage text for the user. Include an image which is floated to the right. Add a clearfix at the end to prevent any float issues.
  render() {
    return (
      <div className={classes.Content}>
        <p>
          <img
            src={Selfie}
            alt="Mike Clegg - Selfie"
            className={classes.Selfie}
          />
          Welcome to my online CV and portfolio.
          <br />
          <br />
          Here you can learn about my career and experience, about the software
          and skills I have used and also some of the projects I have worked on.
          <br />
          <br />
          Currently I work in a marketing role, but on the side I am a Web
          Developer running my personal web site and also building my technical
          skills such as React (which this site is built in).
          <br />
          <br />
          I am now living in London UK, but over the last 6 years I have also
          lived in Toronto Canada, as well as Vienna Austria. I am now settled
          in London for the foreseeable future.
          <br />
          <br />
          I have a degree from the University of Kent in Multimedia Technology
          and Design which was a fantastic course involving programming,
          photography, filming, 3D-animation and lots of other fun and exciting
          modules. I got a 2:1 as my final grade.
          <br />
          <br />
          To learn about my career since then, see skills I have and the
          technology I am familiar with then see the various links in the menu
          above. You can also go to my examples page to learn a little about
          projects I've worked on.
          <br />
          <br />
          It's great to have you here and I hope you have a good look around.
          Feel free to get in contact if you're you want to know more.
          <br />
          <br />
          Regards,
          <br />
          Mike
        </p>
        <div className="Clearfix"></div>
      </div>
    );
  }
}

export default home;
