import { useContext } from "react";
import OrderItem from "../components/Orders/OrderItem";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


export default function Orders() {
  // dummy data for now
  const {backendUrl , token, currency} = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async ()=> {
    try {
      if(!token){
        return null
      }
      console.log("token available")
      const response = await axios.post(backendUrl + '/api/order/userorders',{},{headers:{token}})
      if(response.data.success){
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date']=order.date 
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse())
      }
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    loadOrderData();
  },[token])

  return (
    <>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-2xl font-semibold mb-8 border-b pb-3">
          MY ORDERS
        </h1>

        {/* List */}
        <div>
          {orderData.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </div>
      </div>
    </>
  );
}
