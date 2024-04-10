import React, { useState } from 'react';
import cl from './DatePicker.module.css'
import GreyText from '../../../components/UI/GreyText/GreyText';
import Picker from '../Picker/Picker';
import CatchDate from '../CatchDate/CatchDate';

const DatePicker = ({className , taskInformation , setTaskInformation}) => {
    const [whichOne , setWhichOne] = useState('startOnly')

    return (
        <div className= {className ? [cl.DatePicker , className].join(' ') : cl.DatePickerr}>
            <GreyText className={cl.GreyText}>Когда нужно приступить к работе?</GreyText>
            <Picker whichOne={whichOne} setWhichOne={setWhichOne} taskInformation = {taskInformation}  setTaskInformation={setTaskInformation} />
            <CatchDate className={cl.CatchDate} />
        </div>
    );
};

export default DatePicker;