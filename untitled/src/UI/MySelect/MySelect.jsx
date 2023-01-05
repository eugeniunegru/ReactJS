import React from 'react';
import classes from "./MySelect.module.css";

const MySelect = ({options,value,onchange,defaultValue}) => {
    return (
        <select className={classes.MySelect}
                value={value}
                onChange={event=>onchange(event.target.value)}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map(option=>
                    <option key={option.name} value={option.value}>{option.name}</option>
            )}

        </select>
    );
};

export default MySelect;