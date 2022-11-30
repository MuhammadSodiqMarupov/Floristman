import React from 'react';
import Product from "./Product";
import "./Shop.scss"
import gul from "./images/gul.svg"
import gul2 from "./images/back.svg"

function Shop(props) {
    return (
        <div className={"my-shop"}>
            <div className="container">
                <div className="left">
                    <div className={"lich"}>Личные данные</div>
                    <div className={"adress"}>Адресная книга</div>
                    <div className={"otziv"}>Отзывы</div>
                    <div className={"prosmotr"}>Просмотренные</div>
                    <div className={"exit"}>Выйти</div>
                </div>
                <div className={"right"}>
                    <h1 className={"h1"}>Личный кабинет</h1>
                    <ul className={"right-ul"}>
                        <li>Личные данные</li>
                        <li>Адресная книга</li>
                        <li>Отзывы</li>
                        <li>Просмотренные</li>
                    </ul>
                    <div className={"kabinet"}>Главная / Личный кабинет</div>
                    <div className={"otziv"}>Просмотренные</div>
                    <Product/>
                    <br/>
                    <Product/>
                </div>
            </div>
            <img className={"gul"} src={gul} alt="gul"/>
            {/*<img className={"gul2"} src={gul2} alt="gul"/>*/}
        </div>
    );
}

export default Shop;