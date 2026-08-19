import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

export default function PlaceOrder() {
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
    assets
  } = useContext(ShopContext);

  const [method, setMethod] = useState("cod");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  /* ---------------- INPUT CHANGE ---------------- */
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  /* ---------------- SUBMIT ORDER ---------------- */
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      let orderItems = [];

      for (const id in cartItems) {
        for (const size in cartItems[id]) {
          if (cartItems[id][size] > 0) {
            const itemInfo = structuredClone(
              products.find((p) => p._id === id)
            );

            if (itemInfo) {
              itemInfo.size = size;
              itemInfo.quantity = cartItems[id][size];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
        paymentMethod: method,
      };

      if(orderItems.length<=0){
        toast.error("please add items to cart");
        return;
      }

      switch(method){
        case 'cod':
          const response = await axios.post(backendUrl+'/api/order/place', orderData, {headers:{token}})
          if(response.data.success){
            setCartItems({})
            navigate('/orders')
          }else{
            toast.error(response.data.message)
          }
          break
        case 'stripe':
          const responseStripe = await axios.post(backendUrl+'/api/order/stripe',orderData,{headers:{token}})
          console.log(responseStripe.data);
          if(responseStripe.data.success){
            const {session_url} = responseStripe.data;
            window.location.replace(session_url);
          }else{
            toast.error(responseStripe.data.message)
          }
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">

        {/* ================= LEFT : DELIVERY FORM ================= */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">
            DELIVERY INFORMATION
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <input name="firstName" onChange={onChangeHandler} className="input" placeholder="First name" required/>
            <input name="lastName" onChange={onChangeHandler} className="input" placeholder="Last name" required/>
          </div>

          <input name="email" onChange={onChangeHandler} className="input w-full" placeholder="Email address" required/>
          <input name="street" onChange={onChangeHandler} className="input w-full" placeholder="Street" required/>

          <div className="grid grid-cols-2 gap-4">
            <input name="city" onChange={onChangeHandler} className="input" placeholder="City" required/>
            <input name="state" onChange={onChangeHandler} className="input" placeholder="State" required/>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input name="zipcode" onChange={onChangeHandler} className="input" placeholder="Zipcode" required/>
            <input name="country" onChange={onChangeHandler} className="input" placeholder="Country" required/>
          </div>

          <input name="phone" onChange={onChangeHandler} className="input w-full" placeholder="Phone" required/>
        </div>


        {/* ================= RIGHT : SUMMARY + PAYMENT ================= */}
        <div>

          {/* CART SUMMARY */}
          <div className="w-full md:w-96 ml-auto">
            <h2 className="text-2xl font-semibold mb-6">CART TOTALS</h2>

            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between border-b pb-2">
                <span>Subtotal</span>
                <span>${getCartAmount()}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span>Delivery Fee</span>
                <span>${delivery_fee}</span>
              </div>

              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>
                  ${getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
                </span>
              </div>
            </div>
          </div>


          {/* PAYMENT METHOD */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">PAYMENT METHOD</h2>

            <div className="flex gap-4 flex-wrap">
              <label className="flex items-center gap-2 border px-4 py-3 cursor-pointer">
                <input
                  type="radio"
                  checked={method === "stripe"}
                  onChange={() => setMethod("stripe")}
                />
                <img src={assets.stripe_logo} alt="stripe" />
              </label>

              <label className="flex items-center gap-2 border px-4 py-3 cursor-pointer">
                <input
                  type="radio"
                  checked={method === "razorpay"}
                  onChange={() => setMethod("razorpay")}
                />
                <img src={assets.razorpay_logo} alt="razorpay" />
              </label>

              <label className="flex items-center gap-2 border px-4 py-3 cursor-pointer">
                <input
                  type="radio"
                  checked={method === "cod"}
                  onChange={() => setMethod("cod")}
                />
                Cash on Delivery
              </label>
            </div>

            {/* SINGLE SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full mt-6 bg-black text-white py-3 hover:bg-gray-800"
            >
              PLACE ORDER
            </button>
          </div>

        </div>
      </div>
    </form>
  );
}
