import React from "react";
import Card from "../components/Card";
import { Routes, Route, Link } from "react-router-dom";


function Home({
    items,
   // cartItems,
    searchValue,
    setSerchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    isLoading
}) {




//const {isItemAdded} = React.useContext(AppContext);

const renderItems = () =>{
    const filtredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
return ( isLoading ? [...Array(8 )] : filtredItems).map((item, index)=>(
      <Card 
      key={index}
      onFavorite = {(obj) => onAddToFavorite(obj)}
      onPlus={(obj) => onAddToCart(obj)}
   // added={isItemAdded(item && item.id)}
    loading ={isLoading}
      {...item}
      />
    ));

}

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
      {//console.log('LOOOOOOL_____________',cartItems, items)
      }
        <div className="d-flex flex-wrap">

        {
       //renderItems()
       // rndtest()
        renderItems()
       /* 
         items 
        .filter((item) =>item.title.toLowerCase().includes(searchValue.toLocaleLowerCase()))
        .map((item, index)=>(
          <Card 
          key={index}
          onFavorite = {(obj) => onAddToFavorite(obj)}
          onPlus={(obj) => onAddToCart(obj)}
        added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
        loading ={isLoading}
          {...item}
          />
        )) 
    */
    }    
        </div>
        ....
      </div>

    )
}
export default Home;