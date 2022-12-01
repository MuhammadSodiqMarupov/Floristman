import React from 'react';
import flowerheader from "../FlowerHeader/FlowerHeader.scss"

const FlowerHeader = () => {
    return (
        <div className='block'>
            <div className='flowers'>
                <p className='contact'>Контакты</p>
                <p className='glavny'>Главная / Контакты</p>
            </div>
        </div>
    );
}

export default FlowerHeader;
