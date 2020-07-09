import React, { Component } from 'react';
import Example from '../../components/Example/Example';

import classes from './examples.css';


class examples extends Component {

    //Make sure the user is scrolled to the top when the component is mounted.
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    //Build an object with the different bits of data that we want to show on the examples page. 
    render() {
        const Examples = {
            TAD: {
                name: "Travel and Destinations",
                summary: "In 2016 I started a Wordpress website called Travel and Destinations. This website now has content designed to provide travel inspiration as well as travel tips. The site now gets a large amount of traffic (approx 100,000 users per month). I spend my free time on improving the site, adding new and custom features, as well as adding new content. You can almost think of it partly as my playground.",
                linkURL: "https://www.travelanddestinations.com/",
                linkTxt: "www.travelanddestinations.com",
                img: "tad" 
            },
            BurgerBuilder: {
                name: "Burger Builder",
                summary: "I undertook an in depth Udemy Course so as to learn React. The course included 40 hours of videos and a project where we ended up building a Burger Builder. Aspects that were included in the course was the basics of React such as components, containers, state, passing props and imports. The course also involved using Axios to communicate with a server. In our case this was Axios, as well as using Redux, setting up automated tests, deploying to the web and more. This is hosted on Firebase and you can use the link below to see it.",
                linkURL: "https://react-my-buger-5d7df.web.app/",
                readMore: '/examples/burgerbuilder',
                linkTxt: "react-my-buger-5d7df.web.app",
                img: "burgerBuilder"
            },
            Quiz: {
                name: "Quizzes",
                summary: "During the Coronavirus lockdown I wanted to create a little something for my audience on Instagram and website to keep them amused. I therefore created some travel quizzes. These were programmed using jQuery to log the users answer, calculate their score and present a message if they missed any questions. Once they have completed all questions they are then put into a score bucket which is sent to the server using Ajax. The server is updated using a PHP script. Once this has happened there is an Ajax response with the overall counts for completions and score buckets, which is then used to build a chart for the user. This quiz was built primarily on the front end and is just for fun, so it is possible for the user to cheat if they really wanted to look into the HTML.",
                linkURL: "https://www.travelanddestinations.com/travel-quiz-around-the-world-free-trivia-questions/",
                linkTxt: "www.travelanddestinations.com/travel-quiz-around-the-world-free-trivia-questions",
                img: "quiz"
            },
            MyPort: {
                name: "This website",
                summary: "This website was built using React based on what I learnt through a Udemy course and from practicing making the Burger Builder mentioned above. It isn't overly complicated and uses components, containers, a little bit of state, ComponentWillMount, useEffect and other features of React. You can use the link below to go to my GitHub where you can see the code. ",
                linkURL: "https://github.com/mikeclegg7/Online-Portfolio",
                linkTxt: "GitHub",
                img: "port"
            }
        };

        //Convert the object into an array so that we can use map later on to pass the props to the component.
        const examplesArray = [];
        for(let key in Examples) {
            examplesArray.push({
                id: key,
                example: Examples[key]
            })
        }
        
        //Here we create a variable with the career component using the examplesArray above.
        let exampleOutPut = (
        <div>
            { examplesArray.map(exampleElement => (
                <div 
                key={exampleElement.id}>
                    <Example
                        name={exampleElement.example.name}
                        whichImg={exampleElement.example.img}
                        summary={exampleElement.example.summary}
                        readMore={exampleElement.example.readMore}
                        linkUrl={exampleElement.example.linkURL}
                        linkTxt={exampleElement.example.linkTxt}
                    />
                </div>
            ))
            }
        </div>);

        //Finally return the JSX with a little intro and the output Example component created above.
        return (
            <div className={classes.Textblock}>
                <h1>Examples</h1>
                <p>Here you can find examples of the various projects I have worked on.</p>
                <br/>
                {exampleOutPut}
            </div>
        );
    }
}

export default examples;