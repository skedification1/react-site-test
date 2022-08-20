import React from "react";
import Info from "./info";
import AppContext from "../context";

function Drawer({ onClose, onRemove, items = [] }) {
  const {setCartItems} = React.useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = React.useState(0);

  
  const onClickOrder = () => {
    console.log('OFORMIT ZAKAZ')
    console.log(isOrderComplete)
    setIsOrderComplete(isOrderComplete +1);
    //setCartItems([]);
    console.log( isOrderComplete)
    
  };
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина <img onClick={onClose} className="cu-p" src="/img/btn-remoove.svg" alt="Close"></img>
        </h2>

        {
          items.length > 0 ? ( 
          <div className="d-flex flex-column flex">
            <div className="items">

              {
                items.map((obj) => (
                  <div key={obj.id} className="cartItem d-flex align-center mb-20">

                    <div style={{ backgroundImage: `url(${obj.imageUrl})` }}
                      className="cartItemImg"></div>

                    <div className="mr-20 flex">
                      <p className="mb-5">{obj.title} </p>
                      <b>{obj.price} руб</b>
                    </div>
                    <img onClick={() => onRemove(obj.id)}
                      className="remooveBtn"
                      src="/img/btn-remoove.svg"
                      alt="Remoove"></img>
                  </div>
                ))};
            </div>
            <div className="cartTotalBlock">
          <ul >
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button onClick={onClickOrder} className="greenButton">Оформить заказ
            <img src="/img/arrow.svg" alt="Arrow"></img>
          </button>
        </div>

            </div>
            ) : (
              
            <Info
            title={isOrderComplete ? "Заказ оформлен" : "Корзинка пустая"}
           description={isOrderComplete ? "Ваш заказ №18 передан курьерской службе ":"Добавьте хотя бы одну пару кроссовок, что бы сделать заказ."}
           image={isOrderComplete ?"/img/zakaz.jpg" : "/img/empry-cart.jpg" }
            
            />

       
        )}







       

      </div>
    </div>

  );

}
export default Drawer;

