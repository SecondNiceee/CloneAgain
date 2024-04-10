import React from 'react';
import cl from './CatchDate.module.css'
import DateInput from '../DateInput/DateInput';
const CatchDate = ({className , whichOne }) => {
    return (
        <div className = { className ? [cl.CatchDate , className].join(' ') : cl.CatchDate }>
             <DateInput /> 
            {/* <Period /> */}
        </div>
    );
};

export default CatchDate;