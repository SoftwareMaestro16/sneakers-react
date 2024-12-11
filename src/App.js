import React, { useEffect, useState } from "react";
import axios from "axios";
import './index.scss';
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import priceCorrector from "./utils/priceCorrector";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [shipsData, setShipsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addItemsToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  }

  const removeItemsFromCart = () => {

  }

  useEffect(() => {
    axios.get("https://6759ec4c099e3090dbe355e4.mockapi.io/items")
    .then((res) => setShipsData(res.data))
  }, [])

  return (
    <>
      <div className="wrapper clear">

        <Header onClickCart={() => setCartOpened(true)} />
        {cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems} />}

        <div className="content p-40">
          <div className="d-flex align-center justify-between pb-20">
            <h1>Все кроссовки:</h1>
            <div className="search-block">
              <img src="/images/search.svg" alt="Search"/>
              <input placeholder="Поиcк..." />
            </div>
          </div>
          
          
          <div className="ships d-flex flex-wrap flex-between justify-center align-center">

            {shipsData.map((val, index) => (
              <Card 
                key={index}
                name={val.name}
                price={priceCorrector(val.price)}
                photo={`/images/sneakers/sn${index + 1}.svg`}
                onFavorite={() => console.log(1)}
                onPlus={(obj) => addItemsToCart(obj)}
              />
            ))}

          </div> 

        </div>

      </div>
    </>
  );
}

export default App;
