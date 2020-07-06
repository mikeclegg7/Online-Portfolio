import React from 'react';


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

    return (
        <div>
            <h2>Burger Builder Project</h2>
            <p>The Burger Builder was a project that was part of a indepth React course I took on Udemy. <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux" target="blank">Check out that course here.</a></p>
            <p>The course how pretty detailed and covered a lot of the different aspects of React. Below you can learn more about some of the aspects of React I used in the project.

            <h3>Basic setup</h3>
            <p>The basics of the project included setting up the general layout and setting up both containers and components. It also involved creating HOC components so as to meet some of the criteria within React when writing JSX.</p>

            <h3>State management</h3>
            <p>Origionally I started off by managing the state of the Burger builder in the class components. We later changed this to use Redux instead so as to make it easier to pass the state between different components.</p> 

            <h3>Axio and communicating with a server</h3>
            For the Burger Builder project I learn how to setup and communicate with a Firebase database. I learn how to create the POST and GET requests and also incorporated error handling. 

            <h3>Creating user authentication</h3>
            In the projectwe also created authentication, again using Firebase. This allowed us to require users to login when creating orders which would then be sent to our Firebase database. We could then retrieve a list of previous orders that the user made too.


            <h3>Testing of the project</h3>

            <h3>Summary</h3>
            Here is a quick summary of what I learn on the course and whilst making the Burger Builder. 
                <ul>
                    <li>The basics of React such as building components, importing and exporting, syntax, JSX to name a few things.</li>
                    <li>There was </li>
                </ul>
            </p>
        </div>
    );

};

export default exampleBurgerBuilder;