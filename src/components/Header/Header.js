import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.css';

//Return a little header with the title
const header = (props) => (
    <header className={classes.Header}>
        <div className={classes.Title}><NavLink to="/" style={{textDecoration: "none", color: "black"}}>Mike Clegg<br/><span className={classes.TitleSecondary}>Portfolio</span></NavLink></div>
    </header>
);
export default header;