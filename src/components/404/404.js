import React from 'react';

import classes from './404.css'
import notFound_image from '../../assets/images/404-image.jpg';


//Return JSX with the careerPoint info and the bullets.
const notFound = (props) => {

    return (
        <div>
            <h1>404</h1>
            <p>Ooops.. You've stumbled across a page that doesn't exist. Please use the menu to go to a different page.</p>
            <p className={classes.ImageContainer}><img src={notFound_image} alt="Not Found"/></p>
        </div>
    );
};

export default notFound;