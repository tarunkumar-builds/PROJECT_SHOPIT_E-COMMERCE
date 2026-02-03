import {Navbar} from "../components/Navbar";

import CheckoutForm from "../components/PlaceOrder/CheckoutForm";

import PaymentMethod from "../components/PlaceOrder/PaymentMethod";
import {Footer} from "../components/Footer";
import CartSummary from "../components/Cart/CartSummary";


export default function PlaceOrder() {
  const subtotal = 294; // later from cart context

  const handlePlaceOrder = (method) => {
    console.log("Payment method:", method);
  };

  return (
    <>

      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
        {/* Left */}
        <CheckoutForm />

        {/* Right */}
        <div>
          <CartSummary subtotal={subtotal} />
          <PaymentMethod onPlaceOrder={handlePlaceOrder} />
        </div>
      </div>
    </>
  );
}
