import React from 'react';
import "./DeliveryAddresses.scss"
import topImg from "../PersonalAccaunt/images/top.png";
import bottomImg from "../PersonalAccaunt/images/bottom.png";

function DeliveryAddresses(props) {
    return (
        <div>
            <div className="delivery-father">
                <img className="top1" src={topImg}/>
                <img className="bottom1" src={bottomImg}/>
                <div className="hidden-ul">
                    <ul>
                        <li>Личные данные</li>
                        <li>Адресная книга</li>
                        <li>Отзывы</li>
                        <li>Просмотренные</li>
                    </ul>
                </div>
                <div className="delivery-container">
                    <div className="delivery-left">
                        <ul className="delivery-ul">
                            <li>Личные данные</li>
                            <li>Адресная книга</li>
                            <li>Отзывы</li>
                            <li>Просмотренные</li>
                        </ul>
                        <p>Выйти</p>
                    </div>
                    <div className="delivery-right">
                        <div className="text-gv">
                            Главная / Личный кабинет
                        </div>
                        <div>
                            <h2 className="big_text1">Адреса доставки</h2>
                         <div className="malumotlar">
                             <a>1. Город, улица Название, дом 1</a>
                             <a>1. Город, улица Название, дом 1</a>
                             <a>1. Город, улица Название, дом 1</a>
                         </div>
                            <input className="input-2" placeholder={"   Добавить адрес"}/>
                            <h2 className="big_text2">Контакты</h2>
                            <div className="malumotlar">
                                <a>1. Имя, +38 (000) 0000000</a>
                                <a>1. Имя, +38 (000) 0000000</a>
                                <a>1. Имя, +38 (000) 0000000</a>
                            </div>
                            <input className="input-2" placeholder={"   Добавить новый контакт"}/>
                            <div>
                                <button className="btn-2">Сохранить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeliveryAddresses;