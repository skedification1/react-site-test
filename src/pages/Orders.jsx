import axios from "axios";
import React from "react";
import Card from "../components/Card";
import AppContext from "../context";



function Orders() {
    const {onAddToFavorite, onAddToCart} = React.useContext(AppContext);
const[orders, setOrders] = React.useState([]);
const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
 //   async function fetchData(){
(async () =>{
    try {
    const { data } = await axios.get('https://62f0e7e9e2bca93cd23f831c.mockapi.io/orders');
   // console.log(data.map((obj) => obj.items).flat());
    setOrders(data.reduce((prev, obj) => [...prev, obj.items], []))
   // console.log(data.reduce((prev, obj) => [...prev, obj.items], []))
    setIsLoading(false)
}catch (error){
alert('Ошибка при запросе заказов')
console.error(error)

}


    } ) ();
   // fetchData();
}, []); 


 
  return (

<div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Мои заказы</h1>
          
        </div>
        <div className="d-flex flex-wrap">
        {( isLoading ? [...Array(8 )] : orders).map((item, index)=>(
          <Card 
          key={index}
          onPlus={(obj) => onAddToCart(obj)}
       // added={isItemAdded(item && item.id)}
        loading ={isLoading}
          {...item}
          
          />
        ))}
        </div>
     
      </div>

    )
}
export default Orders; 