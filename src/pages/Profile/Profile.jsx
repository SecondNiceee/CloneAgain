import React, { useRef, useState } from 'react';
import Dimond from '../../images/icons/Dimond.svg'
import ArrowRight from '../../images/icons/rightArrow.svg'
import Pencel from '../../components/UI/Pencel/Pencel';
import icon from '../../images/icons/icon.svg'
import orangeWallet from '../../images/icons/OrangeWallet.svg'
import Subtract from '../../images/icons/Subtract.svg'
import greyArrowRight from '../../images/icons/greyArrowRight.svg'
const Profile = () => {
    const refName = useRef(null)
    const [isReadOnly , setReadOnly ] = useState(true)
    return (
        <div className='profile__container'>
                <img src={icon} className='profile__icon' alt="" />
                {/* <input ref = {refName} id = 'Name' className='urName' type="text" value='Ваше имя'  readonly  /> */}
                <p className = 'urName' > Ваше имя </p>
                <label onClick={() => {refName.current.readonly = false
                    console.log(refName.current.readonly)
                }} for = 'Name' className="change__block">
                    <p className='change'>изменить</p>
                    <Pencel className= 'pencel' />
                </label>
                <div className="profile__options">
                    <div className="option__balance">
                        <div className="option__left">
                        <img src={orangeWallet} className='orangeWallet' alt="" />
                            <p>Баланс</p>
                        </div>

                        <div className="option__balance-block">
                            <p className='tonPrice'>1 TON</p>
                            <img className='Dymond' src={Dimond} alt="" />
                            <div className="option__money">
                                <p>~</p>
                                <p>250₽</p>

                            </div>
                        </div>
                        <img className='arrowRight' src={ArrowRight} alt="" />
                    </div>
                    <div className="option">
                        <div className="option__left">
                            <img src={orangeWallet} className='orangeWallet' alt="" />
                            <p>Тарифы</p>
                        </div>
                        <img src={ArrowRight} className='arrowRight' alt="" />
                    </div>
                    <div className="option">
                        <div className="option__left">
                        <img src={orangeWallet} className='orangeWallet' alt="" />
                            <p>Уведомления</p>
                        </div>
                        <img className='arrowRight' src={ArrowRight} alt="" />
                    </div>
                    <div className="option">
                        <div className="option__left">
                        <img src={orangeWallet} className='orangeWallet' alt="" />
                            <p>О себе и примеры работ</p>
                        </div>
                        <img className='arrowRight' src={ArrowRight} alt="" />
                    </div>
                    <div className="option">
                        <div className="option__left">
                        <img src={orangeWallet} className='orangeWallet' alt="" />
                            <p>Подписка за задания</p>
                        </div>
                        <img className='arrowRight' src={ArrowRight} alt="" />
                    </div>
                    <div className="option">
                        <div className="option__left">
                        <img src={orangeWallet} className='orangeWallet' alt="" />
                            <p>Шаблоны откликов</p>
                        </div>
                        <img className='arrowRight' src={ArrowRight} alt="" />
                    </div>
                </div>
                <div className="profile__about-me">
                    <p>О себе</p>
                    <div className="ur__town">
                        <p>18, Москва</p> 
                        <Pencel className='pencel' />
                    </div>

                </div>
                <div className="profile__works">
                    <p>Выполняемые работы</p>
                    <p>Дизайн</p>
                    <p>Пока нет выполненых работ</p>
                </div>
                <div className="profile__veryfication">
                    <p className='veryfication'>Верификация</p>
                    <div className="veryfication__block">
                        <div className="Okey">
                            <img className='Subtract' src={Subtract} alt="" />
                        </div>

                        <div className="veryfication__block-text">
                            <p>Пройти KYC верификацию</p>
                            <p>Подтвердите свою личность
и получайте на 20% больше откликов</p>
                        </div>
                        <img src={greyArrowRight} className='greyArrow' alt="" />
                    </div>
                </div>
        </div>
    );
};

export default Profile;