import React, { memo } from 'react';
import cl from './Switcher.module.css'
import circle from '../../../images/icons/circle.png'
const Switcher = ({className , isEnable, setEnable}) => {
    return (
        <div onClick={() => setEnable(!isEnable)} className = { [className ? [cl.Switcher , className].join(' ') : cl.Switcher , isEnable ? cl.active : '' ].join(' ')} >
                <img className = {isEnable ? [cl.circle , cl.active].join(' ') : cl.circle} src={circle} alt="" />

        </div>
    );
};

export default memo(Switcher);