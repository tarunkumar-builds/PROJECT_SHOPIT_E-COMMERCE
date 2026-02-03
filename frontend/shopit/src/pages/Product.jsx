import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

export function Product() {
    const {productId} = useParams();
    return (
        <>
            <ProductDetails productId={productId}/>
        </>
    );
}