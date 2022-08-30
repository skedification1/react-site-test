import React from "react";
import { Routes, Route, Link } from "react-router-dom";
//import App from "../App";
//import AppContext from "../context";
import { useCart } from "../hooks/useCart";

function Header(props){
  //console.log(props)
const {totalPrice} = useCart();
//console.log(cartItems.reduce((sum, obj) => obj.price + sum , 0),'____________' );

    return(
        <header className="d-flex justify-between align-center p-40">
       <Link to="/">
        <div className="d-flex align-center">      
          <img width={40} height={40} src="/img/logo.png" alt="Logotype"></img>
          <div>
            <h3 className="text-uppercase"> React Sneakers </h3>
            <p className="opacity-5"> Магазин лучших кроссовок </p>
          </div>
        </div>
        </Link>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr=30 cu-p">
            <img width={18} height={18} src="/img/cart.svg" alt="Корзина"></img>
            <span >{totalPrice + " руб."} </span>
          </li>
          <li className="mr-20 cu-p">
            <Link to="favorites">
            <img width={18} height={18} src="/img/heart.svg" alt="Закладки"></img>
            </Link>
           
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="Пользоватеь"></img>
          </li>
        </ul>
      </header>
    );
}

export default Header;