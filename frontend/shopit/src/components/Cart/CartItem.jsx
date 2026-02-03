import { useContext, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";

export default function CartItem({ item, size, quantity, updateQuantity }) {
  const { currency} = useContext(ShopContext);
  return (
    <div className="flex items-center justify-between border-b py-6 gap-6">
      {/* Left */}
      <div className="flex items-center gap-6 flex-1">
        <img
          src={item.image[0]}
          alt={item.name}
          className="w-20 h-24 object-cover rounded"
        />

        <div>
          <h3 className="font-medium">{item.name}</h3>

          <div className="flex items-center gap-4 mt-2 text-gray-600">
            <span>{currency}{item.price}</span>

            <span className="border px-2 py-1 text-sm">
              {size}
            </span>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-8">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => updateQuantity(item._id, size, e.target.value)}
          className="w-16 border px-2 py-1 text-center"
        />

        <button
          onClick={() =>updateQuantity(item._id, size, 0)}
          className="text-gray-500 hover:text-red-500 text-lg"
        >
          🗑
        </button>
      </div>
    </div>
  );
}
