import React, { Component } from 'react';
import CareerPoint from '../../components/CareerPoint/CareerPoint';

import classes from '../generalStyles.css';

class career extends Component {

    //Make sure the user is scrolled to the top when the component is mounted.
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    //Build an object with the different bits of data that we want to show on the career page. 
    render() {
        const Career = {
            Skiworld: {
                name: "Skiworld",
                position: "Senior Digital Marketing Exec",
                dates: "June 2018 - present",
                details: [ "Creating landing pages and optimising for SEO", "Using advanced HTML and CSS to customise pages behind the standard CMS options", "Monitoring the website using Google Analytics and Google Search Console", "Using Google Tag manager to make advanced adjustments without having to ask the developers"]
            },
            Freelance: {
                name: "Freelance",
                position: "Photography, Social Media and blogging",
                dates: "April 2014 - Ongoing/spare time",
                details: [ "Running my main website ( www.travelanddestinations.com ) to add useful content for travellers. My website currently gets over 120,000 pageviews and 80,000 uniques per month. This is mostly organic traffic with visitors from 140 countries. This has been growing steadily since I created the website.", "Web design, CSS and configuration using Wordpress CMS", "Creating advanced features using PHP and jQuery", "Optimising website for SEO to improve rankings and traffic"]
            },
            AllGlobal: {
                name: "All Global",
                position: "Programmer",
                dates: "July 2012 - April 2014",
                details: [ "Programming surveys using Confirmit, and making custom edits using jQuery, HTML and CSS", "Providing the client with advice and input into potential issues with the questionnaire, and providing solutions during project kick off calls and meetings", "Prioritising requests from projects managers and adjusting my workflow accordingly", "Create reports using Confirmit Reportal for tracking the project progress"]
            }
            ,
            ResearchNow: {
                name: "Research Now",
                position: "Senior Programmer (promoted from survey programmer)",
                dates: "Sept 2010 - July 2012",
                details: [ "Accurately set up surveys for a range of clients, incorporating complex logic and custom tools. Worked closely with project managers to ensure we give clients an excellent service and meet all the requirements for their project", "Attending face to face meetings with clients to discuss projects and the requirements", "Working on some of the most complex projects in the department for high level clients such as Skype.", "Using excel to check data using complex formulas to ensure data is accurate and error free"]
            }
        };

        //Convert the object into an array so that we can use map later on to pass the props to the component.
        const careerArray = [];
        for(let key in Career) {
            careerArray.push({
                id: key,
                career: Career[key]
            })
        }

        //Here we create a variable with the career component using the careerArray above.
        let careerOutPut = (
        <div>
            { careerArray.map(careerElement => (
                <div 
                key={careerElement.id}>
                    <CareerPoint
                        name={careerElement.career.name}
                        position={careerElement.career.position}
                        dates={careerElement.career.dates}
                        details={careerElement.career.details}
                    />
                </div>
            ))
            }
        </div>);

        //Finally return the JSX with a little intro and the output CareerPoint component created above.
        return (
            <div className={classes.Textblock}>
                <h1>Career</h1>
                <p>My career has been quite broad so far, allowing me to pick up a range of skills from programming to SEO and marketing. For my next steps I am wanting a more technical role that challenges me and allows me to get hands on with code, but mainly in a frontend perspective.</p>
                <br/>
                {careerOutPut}
            </div>
        );
    }
}

export default career;