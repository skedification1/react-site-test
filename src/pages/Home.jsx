import React from "react";
import Card from "../components/Card";
import { Routes, Route, Link } from "react-router-dom";


function Home({items,searchValue,setSerchValue,onChangeSearchInput,onAddToFavorite,onAddToCart}) {
    return (

<div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ?`Поиск по запросу: "${searchValue}"` : 'Все кроссовки' }</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"></img>
            {searchValue && 
            <img onClick={() => {setSerchValue('')}}  
            className="clear cu-p" 
            src="/img/btn-remoove.svg" 
            alt="Clear"></img>}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="d-flex flex-wrap">

        { items 
        .filter((item) =>item.title.toLowerCase().includes(searchValue.toLocaleLowerCase()))
        .map((item, index)=>(
          <Card 
          key={index}
          onFavorite = {(obj) => onAddToFavorite(obj)}
          onPlus={(obj) => onAddToCart(obj)}
          {...item}
          />
        ))}    
        </div>
        ....
      </div>

    )
}
export default Home;