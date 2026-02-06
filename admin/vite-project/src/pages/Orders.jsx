

export default function Orders({token}) {
  const orders = [1, 2, 3]; // dummy data

  return (
    <>
          <h2 className="text-2xl font-semibold mb-6">Order Page</h2>

          <div className="space-y-6">
            {orders.map((order, i) => (
              <div
                key={i}
                className="bg-white border rounded-lg p-6 flex justify-between items-start shadow-sm"
              >
                {/* LEFT */}
                <div className="flex gap-5">
                  <img
                    src="https://via.placeholder.com/60"
                    alt=""
                    className="w-14 h-14 object-cover"
                  />

                  <div className="text-sm space-y-2">
                    <p className="font-medium">
                      Men Round Neck Pure Cotton T-shirt x 2 M
                    </p>

                    <div className="text-gray-500">
                      <p className="font-medium text-gray-700">Ayinash kr</p>
                      <p>Some street</p>
                      <p>Bangalore, KA, 560001</p>
                      <p>1234567890</p>
                    </div>
                  </div>
                </div>

                {/* MIDDLE */}
                <div className="text-sm space-y-1 text-gray-600">
                  <p>Items : 3</p>
                  <p>Method : COD</p>
                  <p>Payment : Pending</p>
                  <p>Date : 8/16/2024</p>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-6">
                  <p className="font-semibold text-lg">$304</p>

                  <select className="border px-3 py-2 rounded-md text-sm">
                    <option>Order Placed</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </>
  );
}
