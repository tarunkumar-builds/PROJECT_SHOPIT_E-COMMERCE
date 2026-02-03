export default function CartSummary({ getCartAmount , delivery_fee}) {
  const total = getCartAmount()+delivery_fee;

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

      <button className="w-full mt-6 bg-black text-white py-3 hover:bg-gray-800 transition">
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
}
