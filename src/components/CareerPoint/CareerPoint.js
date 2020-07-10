import React from 'react';

import Item from '../UI/Item/Item';

import classes from './CareerPoint.css';

//Return JSX with the careerPoint info and the bullets.
const careerPoint = (props) => {

    return (
        <Item>
        <div className={classes.CareerPoint_Main}>
            <h2>{props.name}</h2>
            <p><strong>Position: </strong>{props.position}<br/>
            <strong>Dates: </strong>{props.dates}<br/>
            <strong>Details: </strong></p>{props.details}
        </div>
        </Item>

    );
};

export default careerPoint;