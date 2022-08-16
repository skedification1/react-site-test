import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";
import styles from './Card.module.scss';

function Card({ id,
  onFavorite,
  imageUrl,
  title,
  price,
  onPlus,
  favorited = false,
 // added = false,
  loading
}) {
  const adress = "/img/btn-checked.svg"
  const {isItemAdded} = React.useContext(AppContext);
console.log(title, isItemAdded(id))

  //const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price, id });
   // setIsAdded(!isAdded);
  //  console.log(id, 'ID блядский', price, 'pricE')

  };

  const onClickFavorite = () => {
    onFavorite({ imageUrl, title, price, id });
    setIsFavorite(!isFavorite)
   // console.log(id, 'ID блядский LIKE')
  }
 

  return (

    <div className={styles.card}>
      {


       loading ? <ContentLoader 
      /*  testRend ? <ContentLoader */
          speed={2}
          width={160}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          
          >

<rect x="1" y="0" rx="10" ry="10" width="155" height="155" /> 
    <rect x="0" y="167" rx="5" ry="5" width="155" height="15" /> 
    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" /> 
    <rect x="1" y="234" rx="5" ry="5" width="80" height="25" /> 
    <rect x="124" y="230" rx="10" ry="10" width="35" height="35" /> 

        </ContentLoader> :
          <>
            <div className={styles.favorite} onClick={onFavorite}>
              <img onClick={onClickFavorite} src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="Unliked"></img>
            </div>
            <img width='100%' height={135} src={imageUrl} alt="Sneakers"></img>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-collumn">
                <span>Цена:</span>
                <b> {price} руб. </b>
              </div>

              <img  className={styles.plus} onClick={onClickPlus} src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/plus.svg"} alt="Plus"></img>

            </div>
          </>


      }



    </div>

  );
}

export default Card;