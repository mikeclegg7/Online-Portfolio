import React from 'react';
import classes from './Item.css';

//Return JSX with the item
const item = (props) => {
    
    return (
        <article className={classes.Item}>
             {props.children}  
        </article>
    );
};

export default item;