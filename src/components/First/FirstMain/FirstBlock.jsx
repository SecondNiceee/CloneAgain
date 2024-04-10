import React from 'react';
import DesignIcon from '../../../images/Design-Icon.png'
import Share from '../../../images/LineShareIcon.png'
import dymond from '../../../images/dymond.png'
import galstuk from '../../../images/galstuk.png'
import MyButton from '../../UI/MyButton/MyButton';
import Pallete from '../../UI/Pallete/Pallete';
import ShareIcon from '../../UI/ShareIcon/ShareIcon'
import SmallDimond from '../../UI/SmallDimond/SmallDimond'
import FalseTie from '../../UI/FalseTie/FalseTie'
const FirstBlock = ({title, executionPlace, startTime, tonPrice, rublesPrice , setDetailsActive , isButton}) => {
    return (
             <div className="First__block">
                <div className="FirstMain__top">
                    <Pallete  />
                    <p>{title}</p>
                    <ShareIcon />
                </div>
                <div className="FirstMain__middle">
                    <p>{executionPlace}</p>
                    <p>{startTime}</p>
                </div>
                <div className="FirstMain__bottom">
                    <div className="FirstMain__bottom-left">
                        <div className="FirstMain__price-up">
                            <h3>{tonPrice}</h3>
                            <SmallDimond />
                        </div>
                        <p>~ {rublesPrice}</p>
                    </div>
                    <div className="FirstMain__bottom-right">
                        <FalseTie className = {'tie'} />
                        <MyButton style = { isButton ? {} : {display : 'none'} }  onClick = { (e) => setDetailsActive(true)  }>Подробнее</MyButton>
                    </div>
                </div>
            </div>

    );
};

export default FirstBlock;