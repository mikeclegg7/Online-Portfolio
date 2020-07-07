import React from 'react';
import classes from './ListItem.css';

//Return JSX with the item
const listItem = (props) => {
    
    return (
        <article className={classes.Item}>
             {props.children}  
        </article>
    );
};

export default listItem;