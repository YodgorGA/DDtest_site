import React from 'react';
import classes from './MyLink.module.css';

const MyLink = ({children,...props}) => {
    return (
        <a rel="noreferrer" target='_blank' {...props} className={classes.MyLink}>
            {children}
        </a>
    );
};

export default MyLink;