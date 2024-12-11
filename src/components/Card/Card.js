import React, { useEffect, useState } from "react";
import styles from "./Card.module.scss"

function Card({ name, photo, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickPlus = () => {
    onPlus({ name, photo, price });
    setIsAdded((prev) => !prev);
  }

  const onClickFavorite = () => {
    onFavorite();
    setIsFavorite((prev) => !prev);
  }

  return (
      <>
          <div className={styles.card}>
            <div className={styles.favorite}>
              <img 
                onClick={onClickFavorite} 
                src={isFavorite ? "/images/heart-liked.svg" : "/images/heart-unliked.svg"}
                alt=""
              />
            </div>
            <img className="ml-15" width={133} height={112} src={photo} />
            <p>{name}</p>
            <div className="d-flex justify-between align-center">
              <div className="price d-flex flex-column"> 
                <p className="opacity-5 text-uppercase">Цена:</p>
                <b>{price}</b>
              </div>
              <button onClick={onClickPlus} className="buy-button d-flex align-center justify-center"> 
                <img 
                  src={isAdded ? "/images/btn-checked.svg" : "/images/plus.svg"}   
                  alt=""
                />
              </button>
            </div>  
          </div>
      </>
  );
}

export default Card;