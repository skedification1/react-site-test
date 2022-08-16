import React from "react";
import Card from "../components/Card";
import { Routes, Route, Link } from "react-router-dom";
import AppContext from "../context";



function Favorites({/*items,*/ onAddToFavorite}) {
  const {favorites} = React.useContext(AppContext);
  
 console.log('Use context APP_______', favorites);

  return (

<div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>MY SKEAKERS</h1>
          
        </div>
        <div className="d-flex flex-wrap">
        { /*items */
        favorites.map((item, index)=>(
          <Card 
          key={index}
          favorited={true}
          onFavorite={onAddToFavorite}
          {...item}
          />
        ))}
        </div>
     
      </div>

    )
}
export default Favorites; 