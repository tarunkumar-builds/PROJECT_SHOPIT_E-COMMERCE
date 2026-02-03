import { useContext, useEffect, useState } from "react";
import { ProductGrid } from "./ProductGrid";
import { ShopContext } from "../context/ShopContext";

export const RelatedProducts = ({ category, subCategory }) => {

    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

            setRelated(productsCopy.slice(0,5)); 
        }
    },[products])
    return (
        <ProductGrid products={related} />
    )

}