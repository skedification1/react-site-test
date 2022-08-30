import React from "react";
import Info from "./info";
//import AppContext from "../context";
import axios from "axios";
import { useCart } from "../hooks/useCart";

const delay =(ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [] }) {
  const {cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false)
 
  
  const onClickOrder = async () => {
    try{
      setIsLoading(true);
    const {data} = await axios.post('https://62f0e7e9e2bca93cd23f831c.mockapi.io/orders', {items: cartItems});
  // await axios.put('https://62f0e7e9e2bca93cd23f831c.mockapi.io/cart', []);
    setOrderId(data.id);
    setIsOrderComplete(true);
    setCartItems([]);

for(let i=0; i<cartItems.length; i++){
  const item = cartItems[i];
  await axios.delete('https://62f0e7e9e2bca93cd23f831c.mockapi.io/cart/'+ item.id)
  await delay(1000);
}

    } catch (error) {alert('не удалось создать заказ');}
    setIsLoading(false);
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
              <b>{totalPrice + " руб." }</b>
            </li>
            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>{totalPrice/100*5} руб.</b>
            </li>
          </ul>
          <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ
            <img src="/img/arrow.svg" alt="Arrow"></img>
          </button>
        </div>

            </div>
            ) : (
              
            <Info
            title={isOrderComplete ? "Заказ оформлен" : "Корзинка пустая"}
           description={isOrderComplete ? `Ваш заказ # ${orderId}  передан курьерской службе `:"Добавьте хотя бы одну пару кроссовок, что бы сделать заказ."}
           image={isOrderComplete ?"/img/zakaz.jpg" : "/img/empry-cart.jpg" }
            
            />

       
        )}







       

      </div>
    </div>

  );

}
export default Drawer;

