export function Subscribe() {
    return (
        <section className="text-center px-10 py-20">
            <h3 className="text-2xl font-semibold mb-3">Subscribe now & get 20% off</h3>
            <p className="text-gray-500 text-sm mb-8">
                Lorem Ipsum is simply dummy text of the printing industry.
            </p>
            <div className="flex max-w-xl mx-auto">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 border px-4 py-3 outline-none"
                />
                <button className="bg-black text-white px-8">SUBSCRIBE</button>
            </div>
        </section>
    );
}