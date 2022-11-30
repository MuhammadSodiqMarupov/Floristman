import React from 'react';
import "./PersonalAccaunt.scss"
import topImg from "./images/top.png"
import bottomImg from "./images/bottom.png"


function PersonalAccaunt(props) {
    return (
        <div>
            <div className="personal-father">
                <img className="top" src={topImg}/>
                <img className="bottom" src={bottomImg}/>
                <div className="hidden-ul">
                    <ul>
                        <li>Личные данные</li>
                        <li>Адресная книга</li>
                        <li>Отзывы</li>
                        <li>Просмотренные</li>
                    </ul>
                </div>
                <div className="personal-container">
                    <div className="left">
                        <h5>Личные данные</h5>
                        <ul>
                            <li>Адресная книга</li>
                            <li>Отзывы</li>
                            <li>Просмотренные</li>
                        </ul>
                        <p>Выйти</p>
                    </div>
                    <div className="right">
                        <div className="text-gv">
                            Главная / Личный кабинет
                        </div>
                        <div>
                            <h2 className="h2-text">Личные данные</h2>
                            <div className="container-input">
                                <div className="textlar">
                                    <h4>ФИО</h4>
                                    <h4>Телефон</h4>
                                    <h4>E-mail</h4>
                                    <h4>Пароль</h4>
                                </div>
                                <div className="inputlar">
                                    <input className="input-1" placeholder={"   Введите свое ФИО"}/>
                                    <input className="input-1" placeholder={"   Введите свое Телефон"}/>
                                    <input className="input-1" placeholder={"   Введите свое E-mail"}/>
                                    <input className="input-1" placeholder={"   Введите свое Пароль"}/>
                                </div>
                            </div>
                        </div>
                        <button className="btn-1">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalAccaunt;