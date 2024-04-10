import React, { memo } from 'react';
import cl from './MakePrivate.module.css'
import Switcher from '../../../components/UI/Switcher/Switcher';
const MakePrivate = ({className , isPrivate , setTaskInformation , taskInformation}) => {
    return (
        <div className="Private__container">
        <div className = {className ? [cl.MakePrivate , className].join(' ') : cl.MakePrivate}>
                <p>Сделать приватным</p>
                <Switcher isEnable = {isPrivate} setEnable = {(e) => {setTaskInformation({...taskInformation , isPrivate : e})}}  className={cl.Switcher} />
        </div>
        { 
                isPrivate ?  <p className={cl.whoCanSee}>Задание увидят только исполнители, а после завершения — только вы и выбранный исполнитель.</p> : <p className = {cl.whoCanSee}>Задание увидят все пользователи, совсем все.</p>
                }
        </div>
    );
};

export default memo(MakePrivate);