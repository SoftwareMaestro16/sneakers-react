import React, { useEffect, useState } from "react";
import axios from "axios";
import './index.scss';
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import priceCorrector from "./utils/priceCorrector";
import { API_URL } from "./API/apiConfig";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [shipsData, setShipsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const addItemsToCart = (obj) => {
    axios.post(`${API_URL}/cart`, obj);
    setCartItems((prev) => [...prev, obj]);
  }

  const removeItemFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    axios.delete(`${API_URL}/cart/${id}`)
  };

  const onAddFavorite = (obj) => {
    axios.post(`${API_URL}/favorite`, obj);
    setFavorites((prev) => [...prev, obj]);
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    axios.get(`${API_URL}/items`)
    .then((res) => setShipsData(res.data));

    axios.get(`${API_URL}/cart`)
    .then((res) => setCartItems(res.data));
  }, [])

  return (
    <>
      <div className="wrapper clear">

        <Header onClickCart={() => setCartOpened(true)} />
        {cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems} onRemove={removeItemFromCart} />}

        <div className="content p-40">
          <div className="d-flex align-center justify-between pb-20">
            <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки:'}</h1>
            <div className="search-block">
              <img src="/images/search.svg" alt="Search"/>
              <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиcк..." />
            </div>
          </div>
          
          
          <div className="ships d-flex flex-wrap flex-between justify-center align-center">

            {shipsData
            .filter((val) => val.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((val, index) => (
              <Card 
                key={index}
                name={val.name}
                price={priceCorrector(val.price)}
                photo={`/images/sneakers/sn${index + 1}.svg`}
                onFavorite={(obj) => onAddFavorite(obj)}
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
