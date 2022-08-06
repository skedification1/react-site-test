import React from "react";
import styles from './Card.module.scss'
console.log(styles)
function Card(props){
 console.log(props);
    return(

<div className={styles.card}>

        <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked"></img>
        </div>
        <img width={133} height={112} src={props.imageUrl} alt="Sneakers"></img> 
        <h5>{props.title}</h5> 
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-collumn">
            <span>Цена:</span>
            <b> {props.price} руб. </b>
          </div>
          <button className="button" onClick={props.priKclicke}>
            <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
          </button>
        </div>
        </div>

    );
}

export default Card;