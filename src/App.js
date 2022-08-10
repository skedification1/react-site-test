import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import axios from "axios";


function App() {
const [items, setItems] = React.useState([])
const [cartItems, setCartItems] = React.useState([]);
const [cartOpened, setCartOpened] = React.useState(false);
const [searchValue, setSerchValue] = React.useState('');
const [favorites, setFavorites] = React.useState([]);



React.useEffect(() => {

axios.get('https://62f0e7e9e2bca93cd23f831c.mockapi.io/items').then(res =>[
  setItems(res.data)
]);
axios.get('https://62f0e7e9e2bca93cd23f831c.mockapi.io/cart').then(res =>[
  setCartItems(res.data)
]);
axios.get('https://62f0e7e9e2bca93cd23f831c.mockapi.io/favorites').then(res =>[
  setFavorites(res.data)
]);
},[]);


const onAddToCart =(obj) =>{
  axios.post('https://62f0e7e9e2bca93cd23f831c.mockapi.io/cart', obj);
  setCartItems(prev => [...prev, obj]);
};

const onRemoveItem = (id) => {
  axios.delete(`https://62f0e7e9e2bca93cd23f831c.mockapi.io/cart/${id}`);
  setCartItems((prev) =>prev.filter(item => item.id !== id) );

} 

const onAddToFavorite = async (obj) =>{
  
  if(favorites.find(favObj => favObj.id === obj.id )){
    axios.delete(`https://62f0e7e9e2bca93cd23f831c.mockapi.io/favorites/${obj.id}`);
    
  }else {
   
  axios.post('https://62f0e7e9e2bca93cd23f831c.mockapi.io/favorites/', obj);
  setFavorites(prev => [...prev, obj]);
 
  }
};


const onChangeSearchInput = (event) => {
setSerchValue(event.target.value);
};

  return (
   
    <div className="wrapper clear">
      {cartOpened && <Drawer items ={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
     
      <Header onClickCart={() => setCartOpened(true) }   />

      <Routes>
        <Route path="/" exact
        element={<Home 
          items={items}       
          searchValue={searchValue}
         setSerchValue={setSerchValue} 
         onChangeSearchInput={onChangeSearchInput}
         onAddToFavorite={onAddToFavorite}
         onAddToCart={onAddToCart}

         />} />

<Route path="/favorites" exact
        element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite}/>} />
        
      </Routes>

      
    </div >
   
  );
}

export default App;
