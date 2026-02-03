export default function CheckoutForm() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">
        DELIVERY INFORMATION
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <input className="input" placeholder="First name" />
        <input className="input" placeholder="Last name" />
      </div>

      <input className="input w-full" placeholder="Email address" />
      <input className="input w-full" placeholder="Street" />

      <div className="grid grid-cols-2 gap-4">
        <input className="input" placeholder="City" />
        <input className="input" placeholder="State" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input className="input" placeholder="Zipcode" />
        <input className="input" placeholder="Country" />
      </div>

      <input className="input w-full" placeholder="Phone" />
    </div>
  );
}
