import { Hero } from "../components/Hero";
import { SectionTitle } from "../components/SectionTitle";
import { ProductGrid } from "../components/ProductGrid";
import { Features } from "../components/Features";
import { Subscribe } from "../components/Subscribe";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import { use } from "react";
import { useEffect } from "react";

export function Home() {
    const {products} = useContext(ShopContext);
    const [bestsellers, setBestseller] = useState([]);
    useEffect(()=>{
        const bestProduct =  products.filter(product => product.bestseller);
        setBestseller(bestProduct);
    },[products])
    return (
        <>
            <Hero />


            <SectionTitle
                title="LATEST COLLECTIONS"
                subtitle="New arrivals to keep-up your fashoin game."
            />
            <ProductGrid products={products.slice(0, 10)} />


            <SectionTitle
                title="BEST SELLERS"
                subtitle="Loved by most fashoin enthusiasts."
            />
            <ProductGrid products={bestsellers.slice(0, 5)} />


            <Features />
            <Subscribe />
        </>
    );
}