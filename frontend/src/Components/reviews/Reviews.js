import React from 'react';
import "./Reviews.scss"
import gul from "./images/gul.svg"
import gul2 from "./images/back.svg"

function Reviews(props) {
    return (
        <div className={"reviews"}>
            <div className="container">
                <div className={"left"}>
                    <ul className={"ul"}>
                        <li className={"lich"}>Личные данные</li>
                        <li className={"adress"}>Адресная книга</li>
                        <li className={"otziv"}>Отзывы</li>
                        <li className={"prosmotr"}>Просмотренные</li>
                        <li className={"exit"}>Выйти</li>
                    </ul>
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
                    <div className={"otziv"}>Отзывы</div>
                    <div className={"otzivs"}>
                        <div className={"otziv1"}>
                            <h4>Отзыв о товаре №225 “Ромашки для Наташки”</h4>
                            <p>Веб-дизайн — непростая сфера, провоцирующая постоянные споры. Кто-то скажет, что для
                                привлечения внимания
                                вашему лендингу просто необходим современный дизайн, включающий последние тенденции.
                                Другие
                                считают, что
                                работающая посадочная страница, на которой посетители получают то, зачем пришли, гораздо
                                важнее.</p>
                            <div className={"date"}>12:00 12.12.2021</div>
                        </div>
                        <div className={"otziv2"}>
                            <h4>Отзыв о товаре №225 “Ромашки для Наташки”</h4>
                            <p>Веб-дизайн — непростая сфера, провоцирующая постоянные споры. Кто-то скажет, что для
                                привлечения внимания
                                вашему лендингу просто необходим современный дизайн, включающий последние тенденции.
                                Другие
                                считают, что
                                работающая посадочная страница, на которой посетители получают то, зачем пришли, гораздо
                                важнее.</p>
                            <div className={"date"}>12:00 12.12.2021</div>
                        </div>
                    </div>
                </div>
            </div>
            <img className={"gul"} src={gul} alt="gul"/>
            <img className={"gul2"} src={gul2} alt="gul"/>
        </div>
    );
}

export default Reviews;