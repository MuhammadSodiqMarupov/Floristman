import React from 'react';
import sass from "../MapAndInputs/MapAndInputs.scss"
import left from '../../images/left.png'
import right from "../../images/right.png"
import map from "../../images/map.png"
import phone from "../../images/phone.png"
import email from "../../images/email.png"
import call from "../../images/call.png"
import mess from "../../images/mess.png"
import instagram from "../../images/instagram.png"
import facebook from "../../images/facebook.png"
import mapmarker from "../../images/mapmarker.png"
import time from "../../images/time.png"
import bottom from "../../images/bottom.png"


const MapAndInputs = () => {
    return (
        <div className='block2'>
            <div className='inputs'>
                <div className='left'>
                    <img src={left} alt="left" />
                </div>
                <div className='mapsandcontacts'>
                    <img className='map' src={map} alt="" />
                    <div className='contacts'>
                        <p className='messenger'>
                            Звоните нам или пишите в месенджер
                        </p>
                        <div className='phonenumbers'>
                            <img className='phone' src={phone} alt="phone" />
                            <div className='numbers'>
                                +749500000000 - Имя <br />
                                +749500000000 - Имя
                            </div>
                        </div>
                        <div className='email'>
                            <img className='mail' src={email} alt="" />
                            <a className='gmail' href="w">Електоронный_адрес@gmail.com</a>
                        </div>
                        <div className='set'>
                            <p className='allset'>Мы в соц сетях:</p>
                                <img className='call' src={call} alt="" />
                                <img className='facebook' src={facebook} alt="" />
                                <img className='mess' src={mess} alt="" />
                                <img className='instagram' src={instagram} alt="" />
                        </div>
                        <p className='nayti'>
                            Как нас найти?
                        </p>
                        <div className='address'>
                            <div className='city'>
                                <img className='mapmarker' src={mapmarker} alt="" />
                                <a className='cityaddress' href="f">Город, улица Название, дом 1</a>
                            </div>
                            <div className='worktime'>
                                <img className='time' src={time} alt="" />
                                <p className='rabot'>Режим работы:Пн-пт: 00:00-00:00</p>
                            </div>
                            <p className='cb'>Пн-пт: 00:00-00:00</p>
                        </div>

                    </div>
                </div>
                <div className='right'>
                    <img src={right} alt="" />
                </div>

            </div>
        </div>
    );
}

export default MapAndInputs;
