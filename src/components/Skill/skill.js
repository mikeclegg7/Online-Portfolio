import React from 'react';
import classes from './skill.css';

import Item from '../UI/Item/Item';

import htmlLogo from '../../assets/images/html-icon.jpg';
import cssLogo from '../../assets/images/css-icon.jpg';
import wordpressLogo from '../../assets/images/Wordpress-icon.jpg';
import jqueryLogo from '../../assets/images/jQuery-icon.jpg';
import reactLogo from '../../assets/images/React-icon.jpg';
import npmLogo from '../../assets/images/npm-icon.jpg';
import phpLogo from '../../assets/images/php-icon.jpg';
import ajaxLogo from '../../assets/images/ajax-icon.jpg';
import firebaseLogo from '../../assets/images/firebase-icon.jpg';
import sassLogo from '../../assets/images/sass-icon.jpg';
import webpackLogo from '../../assets/images/webpack-icon.jpg';
import otherIcon from '../../assets/images/programming-general.jpg';

//Return the image using a little helper function
const getImageURL = (which) => {
        switch(which) {
            case 'html': return htmlLogo;
            case 'css': return cssLogo;
            case 'wordpress': return wordpressLogo;
            case 'jquery': return jqueryLogo;
            case 'react': return reactLogo;
            case 'npm': return npmLogo;
            case 'php': return phpLogo;
            case 'ajax': return ajaxLogo;
            case 'firebase': return firebaseLogo;
            case 'sass': return sassLogo;
            case 'webpack': return webpackLogo;
            case 'other': return otherIcon;
            default: return null;
        }
}

//Return JSX with the skill info and the an image.
const skill = (props) => {
    
    return (
        <Item>
            <div className={classes.Skill_IMG}><img src={getImageURL(props.imgUrl)} alt="SkillIcon"/></div>
            <div className={classes.Skill_Main}>
            <h2>{props.name}</h2>
            <p><strong>Level: </strong>{props.experience}<br/>
            <strong>Details: </strong> {props.details}
            </p>
            </div>
        </Item>
    );

};

export default skill;