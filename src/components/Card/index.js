import React from "react";
import styles from './Card.module.scss'

function Card({onFavorite, imageUrl, title, price, onPlus}  ){
  const adress = "/img/btn-checked.svg"
const [isAdded, setIsAdded] = React.useState(false);

const onClickPlus = () => {
onPlus({imageUrl, title, price});
setIsAdded(!isAdded);
};

React.useEffect(()=>{
console.log('переменная изменилась')
}, [isAdded] );


    return(

<div className={styles.card}>

        <div className={styles.favorite} onClick = {onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked"></img>
        </div>
        <img width={133} height={112} src={imageUrl} alt="Sneakers"></img> 
        <h5>{title}</h5> 
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-collumn">
            <span>Цена:</span>
            <b> {price} руб. </b>
          </div>
     
            <img className = {styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"} alt="Plus"></img>
     
        </div>
        </div>

    );
}

export default Card;