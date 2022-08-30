import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import axios from "axios"; 
import AppContext from "./context";




function App() {
const [items, setItems] = React.useState([])
const [cartItems, setCartItems] = React.useState([]);
const [cartOpened, setCartOpened] = React.useState(false);
const [searchValue, setSerchValue] = React.useState('');
const [favorites, setFavorites] = React.useState([]);
const [isLoading, setIsLoading] = React.useState(true);

//const [isNUM, setIsNum] = React.useState(0);
//console.log("LLLLLLLLLLLLLLLLLLOOOOOOOOOOOOOOGGGGGGGGGGGGGGGGGG___",isNUM)

//console.log('__________________',cartItems)

React.useEffect(() => {
async function fetchData(){
 /* setIsLoading(true); */
  const cartResponce = await axios.get('https://62f0e7e9e2bca93cd23f831c.mockapi.io/cart');
  const favoritesResponce = await axios.get('https://62f0e7e9e2bca93cd23f831c.mockapi.io/favorites');
  const itemsResponce = await axios.get('https://62f0e7e9e2bca93cd23f831c.mockapi.io/items');
 setIsLoading(false);



setCartItems(cartResponce.data);
setFavorites(favoritesResponce.data);
setItems(itemsResponce.data);
}
fetchData();

},[]);

const onAddToCart =(obj) =>{
 // console.log(obj)
 // console.log(items)
  if(cartItems.find(item => Number(item.id) === Number(obj.id) )){
    axios.delete(`https://62f0e7e9e2bca93cd23f831c.mockapi.io/cart/${obj.id}`);
 setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
  }else {
    axios.post('https://62f0e7e9e2bca93cd23f831c.mockapi.io/cart', obj);
  setCartItems(prev => [...prev, obj]);
  }

};


const onRemoveItem = (id) => { 
  axios.delete(`https://62f0e7e9e2bca93cd23f831c.mockapi.io/cart/${id}`);
  setCartItems((prev) =>prev.filter(item => item.id !== id) );
} 

const onAddToFavorite = async (obj) =>{
  console.log( obj.id, 'OBJ ID')
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

const isItemAdded =(id) => {
  return cartItems.some((obj) => Number(obj.id) === Number(id))
}



  return (
   <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, setCartOpened, setCartItems }}>
    <div className="wrapper clear">
      {cartOpened && <Drawer items ={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
     
      <Header onClickCart={() => setCartOpened(true) }   />

      <Routes>
        <Route path="/" exact
        element={<Home 
          items={items} 
          cartItems={cartItems}      
          searchValue={searchValue}
         setSerchValue={setSerchValue} 
         onChangeSearchInput={onChangeSearchInput}
         onAddToFavorite={onAddToFavorite}
         onAddToCart={onAddToCart}
         isLoading={isLoading}

         />} />

<Route path="/favorites" exact
        element={<Favorites /*items={favorites}*/ onAddToFavorite={onAddToFavorite}/>} />
        
      </Routes>

      
    </div >
    </AppContext.Provider>
  );
}

export default App;
