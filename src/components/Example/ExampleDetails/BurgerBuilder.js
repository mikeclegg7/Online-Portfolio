import React, { useEffect } from 'react';
import classes from './ExampleDetails.css'

//return the image using a little helper function
const getImageURL = (which) => {
        switch(which) {
            // case 'tad': return TAD;
            // case 'quiz': return Quiz;
            // case 'burgerBuilder': return BB;
            // case 'port': return Port;
            default: return null;
        }
}

//Return JSX with the example info and also a screenshot/image and link.
const exampleBurgerBuilder = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className={classes.TextContainer}>
            <h1>Projects - Burger Builder</h1>
            <p>This Burger Builder project that was part of a in depth React course I took on Udemy. <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux" target="blank">Check out that course here.</a></p>
            <p>The course is pretty detailed and covers a lot of the different aspects of React. The course actually took me over two months to do in my spare time due to the sheer number of sections and videos included (over 490 videos).</p>
            <p>Below you can learn more about some of the aspects of React I used in the Burger Builder project.</p>

            <h3>Basic setup, structure and syntax used in React</h3>
            <p>The basics of the project included setting up the general layout and both containers and components. It also involved creating HOC components so as to meet some of the criteria of React when writing JSX.</p>

            <h3>State management</h3>
            <p>Origionally I started off by managing the state of the Burger builder in the class components. We later changed this to use Redux instead so as to make it easier to pass the state between different components.</p> 

            <h3>Axio and communicating with a server</h3>
            For the Burger Builder project I learn how to setup and communicate with a Firebase database. I learn how to create the POST and GET requests and also incorporated error handling. 

            <h3>Creating user authentication</h3>
            In the projectwe also created authentication, again using Firebase. This allowed us to require users to login when creating orders which would then be sent to our Firebase database. We could then retrieve a list of previous orders that the user made too.


            <h3>Testing of the project</h3>
            Generally we were testing this project as we went and would often use the Chrome Console as well as network and application tabs to analyse various functions. On top of this we used the Redux extension to look at relevant actions made through that. Finally one of the last sections in the course was to create some automated tests. 

            <h3>Summary</h3>
            <p>Here is a quick summary of what I learn on the course and whilst making the Burger Builder. 
                <ul>
                    <li>The basics of React such as building components, props, importing and exporting, syntax, JSX to name a few things.</li>
                    <li>Different ways to style components such as using css files or the styled components package.</li>
                    <li>The different lifecycle elements in class based components.</li>
                    <li>How to setup a database (using Firebase) and then how to connect the app to the database.</li>
                    <li>Creating user authentication with the database as well as saving orders.</li>
                    <li>How to use hooks in functional components.</li>
                    <li>Form setup and validation.</li>
                    <li>Adding routing to link between different pages.</li>
                    <li>Adding Redux to the project to manage global stage.</li>
                </ul>             
            </p>
            <p>The course also involved intros into various other packages available, such as:
                <ul>
                    <li>Using Redux Saga</li>
                    <li>Next.js</li>
                    <li>Some more advanced CSS for styling</li>
                    <li>React Navite, Gatsby and Preact (very brief intro)</li>
                </ul>
            </p>
        </div>
    );

};

export default exampleBurgerBuilder;