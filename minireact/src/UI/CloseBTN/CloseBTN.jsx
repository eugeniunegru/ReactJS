import React from 'react';
import classes from './CloseBTN.module.css'
const CloseBtn = ({onclick}) => {


    return (
        <button onClick={onclick}  type="button" className={classes.btnclose+' btn-close'} aria-label="Close"></button>
    );
};

export default CloseBtn;