import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import OrderItem from "../components/Orders/OrderItem";


export default function Orders() {
  // dummy data for now
  const orders = [
    {
      id: 1,
      image: "/products/p1.png",
      name: "Men Round Neck Pure Cotton T-shirt",
      price: 54,
      quantity: 1,
      size: "XL",
      date: "Fri Aug 16 2024",
      payment: "COD",
      status: "Order Placed",
    },
    {
      id: 2,
      image: "/products/p2.png",
      name: "Men Round Neck Pure Cotton T-shirt",
      price: 80,
      quantity: 1,
      size: "S",
      date: "Fri Aug 16 2024",
      payment: "COD",
      status: "Order Placed",
    },
  ];

  return (
    <>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-2xl font-semibold mb-8 border-b pb-3">
          MY ORDERS
        </h1>

        {/* List */}
        <div>
          {orders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </div>
      </div>
    </>
  );
}
