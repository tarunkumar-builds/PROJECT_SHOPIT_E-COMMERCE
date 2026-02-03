import { NavLink } from "react-router-dom";

export function ProductCard({ _id, image, name, price }) {
    return (
        <div className="group">
            <div className="overflow-hidden">
                <NavLink to={`/product/${_id}`}>
                    <img
                        src={image[0]}
                        alt={name}
                        className="w-full group-hover:scale-105 transition duration-300 cursor-pointer"
                    />
                </NavLink>
            </div>
            <p className="mt-3 text-sm">{name}</p>
            <p className="text-sm font-semibold">${price}</p>
        </div>
    );
}