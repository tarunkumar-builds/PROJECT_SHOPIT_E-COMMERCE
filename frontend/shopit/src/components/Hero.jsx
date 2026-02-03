import hero_img from "../assets/hero_img.png";

export function Hero() {
    return (
        <section
            className="grid grid-cols-1 md:grid-cols-2 items-center
            px-4 md:px-6
            py-6 md:py-10
            gap-4 md:gap-6
            max-w-5xl mx-auto"
        >


            <div>
                <p className="text-sm tracking-widest text-gray-500 mb-3">— OUR BESTSELLERS</p>
                <h2 className="prata-regular text-5xl font-serif mb-6">Latest Arrivals</h2>
                <button className="border px-8 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition">
                    SHOP NOW
                </button>
            </div>
            <div>
                <img src={hero_img} alt="Hero" className="w-full object-cover" />
            </div>
        </section>
    );
}