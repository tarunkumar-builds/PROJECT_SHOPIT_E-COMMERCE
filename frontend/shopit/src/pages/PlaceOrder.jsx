import CheckoutForm from "../components/PlaceOrder/CheckoutForm";

import PaymentMethod from "../components/PlaceOrder/PaymentMethod";
import CartSummary from "../components/Cart/CartSummary";


export default function PlaceOrder() {

  return (
    <>

      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
        {/* Left */}
        <CheckoutForm />

        {/* Right */}
        <div>
          <CartSummary />
          <PaymentMethod />
        </div>
      </div>
    </>
  );
}
