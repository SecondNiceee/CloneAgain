import React from 'react';
import classes from "./Burger.module.css"
const Burger = (props) => {
    return (
        <div className= {classes.Burger}>
            <div {...props}  className="Burger__wrapper">

            </div>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default Burger;