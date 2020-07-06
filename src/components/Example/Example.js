import React from 'react';
import classes from './Example.css';
import { NavLink } from 'react-router-dom';
import Item from '../UI/Item/Item';

import TAD from '../../assets/images/TAD-Screenshot.jpg'
import Quiz from '../../assets/images/Quiz-Screenshot.jpg'
import BB from '../../assets/images/BurgerBuilder-Screenshot.jpg'
import Port from '../../assets/images/Port-Screenshot.jpg'

//return the image using a little helper function
const getImageURL = (which) => {
        switch(which) {
            case 'tad': return TAD;
            case 'quiz': return Quiz;
            case 'burgerBuilder': return BB;
            case 'port': return Port;
            default: return null;
        }
}

//Return JSX with the example info and also a screenshot/image and link.
const example = (props) => {


    let readMore = props.readMore ? (
        <p><strong><NavLink
                        to={props.readMore} 
                        exact={props.exact}>
                        Read more about this project
                    </NavLink></strong></p>)
     : "";

     readMore = "";

    return (
        <Item>
            <div className={classes.Example_IMG}><img src={getImageURL(props.imgUrl)} alt="Example"/></div>
            <div className={classes.Example_Main}>
                <h2>{props.name}</h2>
                <p><strong>Summary: </strong><br/> {props.summary}</p>
                {readMore}
                <p><strong>Live Link: </strong> <a href={props.linkUrl} target="blank">{props.linkTxt}</a></p>
            </div>
        </Item>
    );

};

export default example;