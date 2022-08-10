import React from "react";
import styles from './Card.module.scss'

function Card({id, onFavorite, imageUrl, title, price, onPlus, favorited}  ){
  const adress = "/img/btn-checked.svg"
const [isAdded, setIsAdded] = React.useState(false);
const [isFavorite, setIsFavorite] = React.useState(favorited);

const onClickPlus = () => {
onPlus({imageUrl, title, price,});
setIsAdded(!isAdded);

};

const onClickFavorite = ()=>{
onFavorite({imageUrl, title, price, id});
  setIsFavorite(!isFavorite)
}

React.useEffect(()=>{
console.log('переменная изменилась')
}, [isAdded] );


    return(

<div className={styles.card}>

        <div className={styles.favorite} onClick = {onFavorite}>
        <img onClick={onClickFavorite} src={isFavorite ? '/img/liked.svg' :'/img/unliked.svg'} alt="Unliked"></img>
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