import { useContext, useEffect, useState } from "react";
import CartItem from "../components/Cart/CartItem";
import CartSummary from "../components/Cart/CartSummary";
import { ShopContext } from "../context/ShopContext";

export default function Cart() {
  const { cartItems, products, updateQuantity, getCartAmount, delivery_fee } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);


  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          })
        }
      }
    }
    setCartData(tempData);
  }, [cartItems])

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-10">YOUR CART</h1>

      {cartData.map((item, index) => {
        const productData = products.find((product) => product._id === item._id);
        return (
          <CartItem
            key={index}
            item={productData}
            size={item.size}
            quantity = {item.quantity}
            updateQuantity={updateQuantity}
          />
        )

      })}

      <CartSummary getCartAmount={getCartAmount} delivery_fee={delivery_fee} />
    </div>
  );
}
