import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export default function CartSummary() {
  const {navigate, getCartAmount, delivery_fee} = useContext(ShopContext);
  

  return (
    <div className="w-full md:w-96 ml-auto mt-12">
      <h2 className="text-2xl font-semibold mb-6">
        CART TOTALS
      </h2>

      <div className="space-y-4 text-gray-700">
        <div className="flex justify-between border-b pb-2">
          <span>Subtotal</span>
          <span>${getCartAmount()}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span>delivery fee</span>
          <span>${delivery_fee}</span>
        </div>

        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>${getCartAmount() === 0? 0: getCartAmount() + delivery_fee}</span>
        </div>
      </div>

      <button onClick={()=> navigate('/place-order')} className="w-full mt-6 bg-black text-white py-3 hover:bg-gray-800 transition cursor-pointer">
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
}
