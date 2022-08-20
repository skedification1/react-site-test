import React from "react";
import AppContext from "../context";

 const Info = ({image, title, description}) => {
const { setCartOpened } = React.useContext(AppContext);


  return (
    <div className="cartTotalBlock cartEmpty d-flex align-center justify-center flex-column flex">
    <img className="mb-20" width="120px" height="120px" src={image} alt="none"></img>
    <h2>{title}</h2>
    <p className="opacity-6"> {description}</p>

    <button onClick={() => setCartOpened(false)} className="greenButton">Вернуться назад
      <img src="/img/arrow.svg" alt="Arrow"></img>
    </button>
  </div>
 )
}
export default Info;