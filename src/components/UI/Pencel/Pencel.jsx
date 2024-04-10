import React from 'react';
import cl from './Pencel.module.css'
import PencelImage from '../../../images/icons/Pencel.svg'
const Pencel = ({className}) => {
    return (
        <div className= { className ? [cl.Pencel , className].join(' ') : cl.Pencel  }  >
            <img src= {PencelImage} alt="" />
        </div>
    );
};

export default Pencel;