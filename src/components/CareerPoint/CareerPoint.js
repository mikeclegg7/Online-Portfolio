import React from 'react';

import Item from '../UI/Item/Item';

import classes from './CareerPoint.css';

//Create a little helper function to create the bulletpoints - possibly change this to a shared utility function if used elsewhere.
const createBulletList = (bulletsArray) => {
    
    var bulletsOutput = bulletsArray.map(function(bullet, index){
        return <li key={index}>{bullet}</li>;
     })
    
    return  <ul>{ bulletsOutput }</ul>

}

//Return JSX with the careerPoint info and the bullets.
const careerPoint = (props) => {

    return (
        <Item>
        <div className={classes.CareerPoint_Main}>
            <h2>{props.name}</h2>
            <p><strong>Position: </strong>{props.position}<br/>
            <strong>Dates: </strong>{props.dates}<br/>
            <strong>Details: </strong></p>{createBulletList(props.details)}
        </div>
        </Item>

    );
};

export default careerPoint;