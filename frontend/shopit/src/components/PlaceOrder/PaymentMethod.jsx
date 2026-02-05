import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";

export default function PaymentMethod({ onPlaceOrder }) {
  const {navigate, assets} = useContext(ShopContext);
  const [method,  setMethod] = useState("cod");
  const optionStyle =
    "flex items-center gap-2 border px-4 py-3 cursor-pointer hover:border-black";

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">
        PAYMENT METHOD
      </h2>

      <div className="flex gap-4 flex-wrap">
        <label className={optionStyle}>
          <input
            type="radio"
            name="pay"
            checked={method === "stripe"}
            onChange={() => setMethod("stripe")}
          />
          <img src={assets.stripe_logo} alt="stripe" />
        </label>

        <label className={optionStyle}>
          <input
            type="radio"
            name="pay"
            checked={method === "razorpay"}
            onChange={() => setMethod("razorpay")}
          />
          <img src={assets.razorpay_logo} alt="razor pay" />
        </label>

        <label className={optionStyle}>
          <input
            type="radio"
            name="pay"
            checked={method === "cod"}
            onChange={() => setMethod("cod")}
          />
          Cash on Delivery
        </label>
      </div>

      <button
        onClick={() => navigate('/orders')}
        className="w-full mt-6 bg-black text-white py-3 hover:bg-gray-800"
      >
        PLACE ORDER
      </button>
    </div>
  );
}
