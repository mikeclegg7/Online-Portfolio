import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact clicked={props.clicked}>Home</NavigationItem>
            <NavigationItem link="/career" exact clicked={props.clicked}>Career</NavigationItem>
            <NavigationItem link="/skills" exact clicked={props.clicked}>Skills</NavigationItem>
            <NavigationItem link="/examples" exact clicked={props.clicked}>Examples</NavigationItem>
            <NavigationItem link="/contact" exact clicked={props.clicked}>Contact</NavigationItem>
    </ul>
);

export default navigationItems;