import React from 'react';
import productPhoto from "./images/productPhoto.svg"
import deletePhoto from "./images/Удалить.svg"
import "./Shop.scss"

function Product(props) {
    return (
        <div className={"products"}>
            <div className="left2">
                <img className={"photo"} src={productPhoto} alt="photo"/>
            </div>
            <div className="right2">
                <div className="top">
                    <h2>№225 “Ромашки для Наташки” </h2>
                    <img className={"delete"} src={deletePhoto} alt="delete"/>
                </div>
                <div className="middle">
                   <div className={"middle-top"}>
                       <h5 className={"h5"}>Повод:</h5>
                       <p>8 марта. 9 мая. Любовь</p>
                   </div>
                   <div className={"middle-bottom"}>
                       <h5>Кому:</h5>
                       <p>Маме. Девушке. Женщине. Учителю. Теще. Друзьям</p>
                   </div>
                </div>
                <div className="bottom">
                    <p>5 400 грн</p>
                    <h3>3 700 грн</h3>
                </div>
            </div>
        </div>
    );
}

export default Product;
