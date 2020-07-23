import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import classes from "./BurgerBuilder.css";

import Image from "../../Image/Image";

//Return JSX with the example info and also a screenshot/image and link.
const exampleBurgerBuilder = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.Content}>
      <NavLink
        to="/examples"
        exact={props.exact}
        className={classes.ExampleBack}
      >
        &#171; Back to Examples
      </NavLink>
      <h1>Projects: The Burger Builder</h1>
      <p>
        The Burger Builder was a project that was part of a in-depth React
        course I took on Udemy. The desired result for the Burger Builder was to
        create an app that allows a user to build a burger by adding ingredients
        using a toggle. They would then see the price of the burger and once
        happy could proceed to order it. The order would then be sent to a
        database which theoretically could be picked up by a restaurant.
        <br />
        <br />
        <strong>Live link: </strong>
        <a href="https://react-my-buger-5d7df.web.app/" target="blank">
          Burger Builder
        </a>
      </p>
      <br />
      <Image whichImage="BB-main" />
      <p>
        The course was pretty detailed and covers a lot of the different aspects
        of React. It actually took me over two months to complete the course in
        my spare time. This was due to the sheer number of sections and videos
        included (over 490 videos), as well as following along and practicing
        the coding.
        <br />
        <br />
        <strong>See full course details: </strong>
        <a
          href="https://www.udemy.com/course/react-the-complete-guide-incl-redux"
          target="blank"
        >
          Udemy.
        </a>
      </p>
      <p>
        Below you can learn more about some of the features of React I used in
        this Burger Builder project.
      </p>
      <h2>Basic setup, structure and syntax used in React</h2>
      <p>
        The basics of the project included setting up the general layout and
        both containers and components. It also involved creating HOC components
        so as to meet some of the criteria of React when writing JSX.
        <br />
        <br />
        Specific elements included creating the navigational bar, the sidedraw
        and different interactive elements, such as the toggle buttons for
        adding and removing ingredients.
      </p>
      <h2>State management</h2>
      <p>
        Origionally, we started by managing the state of the Burger builder in a
        class components. We later changed this to use Redux instead so as to
        make it easier to pass the state between different components.
      </p>
      <h2>Axios and communicating with a server</h2>
      For the Burger Builder project I learn how to setup and communicate with a
      Firebase database. I learn how to create the POST and GET requests and
      also incorporated error handling.
      <h2>Creating user authentication</h2>
      In the project we also created authentication, again using Firebase. This
      allowed us to require users to login when creating orders which would then
      be sent to our Firebase database.
      <br />
      <br />
      <Image whichImage="BB-sign-in" />
      <br />
      <br />
      We could then retrieve a list of previous orders that the user made too.
      Feel free to login using a dummy email, like I did below to test. For this
      project the email is only used for the login process and we don't send any
      emails hence why it can be dummy/fake.
      <br />
      <br />
      <Image whichImage="BB-orders" />
      <h2>Testing of the project</h2>
      Generally we were testing this project as we went and would often use the
      Chrome Console as well as network and application tabs to analyse various
      functions. On top of this we used the Redux extension to look at relevant
      actions made through that. Finally one of the last sections in the course
      was to create some automated tests using Jest and Enzyme.
      <br />
      <br />
      Actually as I was learning and writing the code alongside the instructor I
      would sometimes make typos or other errors so would then need to spend
      sometime working out what went wrong. In some cases it would have simply
      been a naming problem where something didn't match up.
      <h2>Summary</h2>
      <p>
        Here is a quick summary of what I learn on the course and whilst making
        the Burger Builder.
        <ul>
          <li>
            The basics of React such as building components, props, importing
            and exporting, syntax and JSX to name a few things.
          </li>
          <li>
            Different ways to style components such as using css files or the
            styled components package.
          </li>
          <li>The different lifecycle elements in class based components.</li>
          <li>
            How to set up a database (using Firebase) and then how to connect
            the app to the database.
          </li>
          <li>
            Creating user authentication with the database as well as saving
            orders.
          </li>
          <li>How to use hooks in functional components.</li>
          <li>Form setup and validation.</li>
          <li>Adding routing to link between different pages.</li>
          <li>Adding Redux to the project to manage global state.</li>
        </ul>
      </p>
      <p>
        The course also involved intros into various other packages available,
        such as:
        <ul>
          <li>Using Redux Saga</li>
          <li>Next.js</li>
          <li>Some more advanced CSS for styling</li>
          <li>React Native, Gatsby and Preact (very brief intro)</li>
        </ul>
      </p>
      <NavLink
        to="/examples"
        exact={props.exact}
        className={classes.ExampleBack}
      >
        &#171; Back to Examples
      </NavLink>
    </div>
  );
};

export default exampleBurgerBuilder;
