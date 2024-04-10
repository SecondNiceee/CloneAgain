import React from 'react';
import cl from './DateInput.module.css'
const DateInput = ({className , date , setDate}) => {
    return( 
        <input onChange={ (e) => {console.log(e.target.value)} } className = {className ? [cl.DateInput , className].join(' ') : cl.DateInput} type="datetime-local" />
    );
};

export default DateInput;