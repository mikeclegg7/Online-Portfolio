import React, { Component } from 'react';
import Skill from '../../components/Skill/skill';
import ListItem from '../../components/UI/ListItem/ListItem';
import classes from './skills.css';

class skills extends Component {

    //Make sure the user is scrolled to the top when the component is mounted.
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    //Build an object with the different bits of data that we want to show on the skills page. 
    render() {

        const SkillsSummaryArray = ['HTML','CSS','Wordpress','jQuery', 'React.js','NPM','PHP','Javascript','Ajax','SASS/SCSS','Firebase', 'Webpack','Google Analytics','Adobe Photoshop','Adobe Lightroom', 'Hotjar'];

        const skillsDetails = {
            HTML: {
                name: "HTML",
                experience: "Intermediate",
                details: "I have been using HTML for over 10 years since I was at school and throughout university. I understand HTML5 and can generally look through the source of a website and understand the structure and what does what.",
                img: "html"
            },
            CSS: {
                name: "CSS",
                experience: "Intermediate",
                details: "My level with CSS is pretty good and I love to go into the backend and make template adjustments. I understand different CSS techniques such as Flexbox for responsive design.",
                img: 'css'
            },
            Wordpress: {
                name: "Wordpress",
                experience: "Intermediate - Advanced",
                details: "My travel website www.travelanddestinations.com is built on Wordpress and I often go into the templates to make advanced adjustments, as well as built my own features such as popup navigation menus (seen in the city guides), some fun quizzes and more.",
                img: 'wordpress'
            },
            jQuery: {
                name: "jQuery",
                experience: "Intermediate",
                details: "I have used jQuery on both a personal and professional level. I currently use it on my personal website, but have previously used it when I was a programmer with All Global and Research Now. I am at a good level with jQuery and recently used it to make some fun quizzes for my visitors. You can learn more in the examples section.",
                img: 'jquery'
            },
            React: {
                name: "React",
                experience: "Beginner",
                details: "I have been learning React using an online course over the last few months and although I would say I'm still somewhat of a beginner, the concepts and general structure of the code is clear. I would be comfortable working on React type projects and feel I could quickly learn as required. This site is also built (by me) using React.",
                img: 'react'
            },
            NPM: {
                name: "NPM",
                experience: "Beginner",
                details: "I have been using NPM on my React projects, such as to install new packages, start a local test environment and build my final project once ready to go live.",
                img: 'npm'
            },
            PHP: {
                name: "PHP",
                experience: "Beginner - Intermediate",
                details: "I haven't used PHP extensively but I do often go into the PHP files on my Wordpress site to make changes to the template and to make new custom features, sometimes using the Wordpress API. I understand the code structure and feel comfortable adapting existing code or writing my own.",
                img: 'php'
            },
            Ajax: {
                name: "Javascript and Ajax",
                experience: "Beginner - Intermediate",
                details: "I used Javascript and Ajax in a quiz on my travel website where I would communicate with the server, update the users score and then retrieve overall counts in the response. I would then use these counts to build a little bar chart to show the user where they ranked against other completes. You can learn more about this quiz in the example section",
                img: 'ajax'
            },
            Firebase: {
                name: "Firebase",
                experience: "Beginner",
                details: "I used Firebase as part of my React Burger Builder project. This was to create an online database of orders, users and also ingredients. In the project I would then read and write to that data. This portfolio is also hosted on Firebase.",
                img: 'firebase'
            },
            SCSS: {
                name: "SASS/SCSS",
                experience: "Beginner",
                details: "Although I wish I had discovered SASS/SCSS sooner I have recently been learning it through a Udemy course. I think it is a fantastic way to structure CSS in a much cleaner way. Although I would say I'm a beginner I would be very comfortable using it as it's not that complicated to use.",
                img: 'sass'
            },
            Webpack: {
                name: "Webpack",
                experience: "Beginner",
                details: "I have used Webpack as a bundler and compiler for my React Projects. I feel comfortable using it, although would be keen to learn advanced features and setups.",
                img: 'webpack'
            },
            VariousOther: {
                name: "Other",
                experience: "Beginner",
                details: "In my own time I often try and learn new skills. This is currently primarily through courses on Udemy, although I spent a lot of time looking at relevant documentation, apis, tutorials and also Stackoverflow. A few libraries and languages I have also touched on include: node.js, next.js.",
                img: 'other'
            },
        };

        //Convert skillSummary to 
        let listOutput = (
            <div className={classes.SkillsSummaryContainer}>
            { SkillsSummaryArray.map(function(item, index){
                return <ListItem key={index}>{item}</ListItem>;
            })
            }</div>
        );
        
        //Convert the object into an array so that we can use map later on to pass the props to the component.
        const skillsArray = [];
        for(let skill in skillsDetails) {
            skillsArray.push({
                id: skill,
                skill: skillsDetails[skill]
            })
        }

        //Here we create a variable with the skilsl component using the skillsArray above.
        let skillOutPut = (
        <div>
            { skillsArray.map(skillElement => (
                <div 
                key={skillElement.id}>
                    <Skill
                        name={skillElement.skill.name}
                        experience={skillElement.skill.experience}
                        details={skillElement.skill.details}
                        imgUrl={skillElement.skill.img}
                    />
                </div>
            ))
            }
        </div>);

        //Finally return the JSX with a little intro and the output Skill component created above.
        return (
            <div className={classes.Textblock}>
                <h1>Skills</h1>
                <p>I first started using web and design technologies at school (over 15 years ago). Since then I have used a variety of software whilst at university, on a professional level during my career, and also for personal enjoyment and projects.<br/><br/>Below is a list of some of my skills, software and technologies I have used. Further below you'll find more details on what I know for some these..</p>
                <h3>Skills Summary</h3>
                {listOutput}
                <h3>Skills Details</h3>
                <p>Here is more detail on what I know for specific skills mentioned above.</p>
                {skillOutPut}
            </div>
        );
    }
}

export default skills;