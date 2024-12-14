import React, { useState } from "react";

function Header(props) {

    return (
        <>
            <header className="d-flex justify-between align-center">
          <div className="d-flex align-center">
              <img width={40} height={40} src="/images/logo.png" />
              <div className="headerInfo">
                <h3 className="text-uppercase">React Sneakers</h3>
                <p className="opacity-6">Магазин лучших кроссовок</p>
              </div>
          </div>
          <ul className="d-flex flex-wrap justify-center">
            <li onClick={props.onClickCart} className="mr-15 d-flex align-center"> 
              <img className="cu-p" src="/images/cart.svg" />
              <span>
                <b className="cu-p">1205 руб.</b>
              </span> 
            </li>
            <li className="d-flex align-center"> 
              <img className="cu-p" src="/images/favorite-heart.svg" />
              <p className="text-li mr-15">Закладки</p>
            </li>
            <li className="d-flex align-center"> 
              <img className="cu-p" src="/images/user.svg" />
              <p className="text-li mr-15">Профиль</p>
            </li>
          </ul>
        </header>

        </>
    );
}

export default Header;