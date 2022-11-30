import React from 'react';
import Product from '../../Components/ProductPage/Product';
import ProductContent from '../../Components/ProductPage/productContent/ProductContent';
import Section1 from '../Section/Section1';
import Section2 from '../Section/Section2';
import Section3 from '../Section/Section3';
import './scss/Home.scss'
import Reviews from "../../Components/reviews/Reviews";
import Shop from '../../Components/Shop/Shop';
import Header from '../Header/Header'
import Sale from '../Sale/Sale';
import Main from '../Main/Main';
const Home = () => {
// salom
    return (
        <div className='Home'>
            <Header />
            <Main obj={{
                name: "Собираем букеты, созданные для Вас",
                info: "Подарите ощущение праздника",
                btn: "Выбрать букет"
            }} />
            <Sale obj={
                {
                    count: 4,
                    title: "Скидки"
                }
            } />
            <ProductContent />
            <Section1 />
            <Section2 />
            <Section3 />
            <Reviews />
            <Shop />
        </div>
    );
}

export default Home;
