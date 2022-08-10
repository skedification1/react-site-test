import React from "react";
function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина <img onClick={onClose} className="cu-p" src="/img/btn-remoove.svg" alt="Close"></img>
        </h2>

        {
          items.length > 0 ? ( <div>
            <div className="items">

              {
                items.map((obj) => (
                  <div className="cartItem d-flex align-center mb-20">

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
          <button className="greenButton">Оформить заказ
            <img src="/img/arrow.svg" alt="Arrow"></img>
          </button>
        </div>

            </div>
            ) : (
            <div class="cartTotalBlock cartEmpty d-flex align-center justify-center flex-column flex">
              <img class="mb-20" width="120px" height="120px" src="/img/empry-cart.jpg" alt="none"></img>
              <h2>Корзина пустая</h2>
              <p class="opacity-6"> Добавьте хотя бы одну пару кроссовок, что бы сделать заказ.</p>

              <button onClick={onClose} class="greenButton">Вернуться назад
                <img src="/img/arrow.svg" alt="Arrow"></img>
              </button>
            </div>
        )}







       

      </div>
    </div>

  );

}
export default Drawer;

