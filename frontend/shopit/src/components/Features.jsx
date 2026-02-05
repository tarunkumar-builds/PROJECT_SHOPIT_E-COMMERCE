import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export function Features(){
    const {assets} = useContext(ShopContext);
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 text-center gap-10 px-10 py-20">
            <div className="flex flex-col items-center text-center">
                <img src={assets.exchange_icon} alt=""  className="mb-3"/>
                <h4 className="font-semibold mb-2">Easy Exchange Policy</h4>
                <p className="text-sm text-gray-500">We offer hassle free exchange policy</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <img src={assets.quality_icon} alt=""  className="mb-3"/>
                <h4 className="font-semibold mb-2">7 Days Return Policy</h4>
                <p className="text-sm text-gray-500">We provide 7 days free return policy</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <img src={assets.support_img} alt=""  className="mb-3"/>
                <h4 className="font-semibold mb-2">Best Customer Support</h4>
                <p className="text-sm text-gray-500">We provide 24/7 customer support</p>
            </div>
        </section>
    );
}