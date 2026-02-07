export default function OrderItem({ order }) {
  return (
    <div className="flex items-center justify-between gap-6 py-6 border-b">
      {/* LEFT */}
      <div className="flex gap-4 items-center">
        <img
          src={order.image[0]}
          alt={order.name}
          className="w-20 h-24 object-cover"
        />

        <div className="space-y-1">
          <h3 className="font-medium">{order.name}</h3>

          <p className="text-sm text-gray-600">
            ${order.price} &nbsp; Quantity: {order.quantity} &nbsp; Size: {order.size}
          </p>

          <p className="text-sm text-gray-500">
            Date: {order.date}
          </p>

          <p className="text-sm text-gray-500">
            Payment: {order.paymentMethod}
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          {order.status}
        </div>

        <button className="border px-4 py-2 text-sm hover:bg-black hover:text-white transition">
          Track Order
        </button>
      </div>
    </div>
  );
}
