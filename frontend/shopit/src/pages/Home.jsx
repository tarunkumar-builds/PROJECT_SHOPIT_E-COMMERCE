import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { SectionTitle } from "../components/SectionTitle";
import { ProductGrid } from "../components/ProductGrid";
import { Features } from "../components/Features";
import { Subscribe } from "../components/Subscribe";
import { Footer } from "../components/Footer";
import {products} from "../assets/assets";

export function Home() {
    const bestsellers = products.filter(product => product.bestseller);
    return (
        <>
            <Hero />


            <SectionTitle
                title="LATEST COLLECTIONS"
                subtitle="Lorem Ipsum is simply dummy text of the printing industry."
            />
            <ProductGrid products={products.slice(0, 10)} />


            <SectionTitle
                title="BEST SELLERS"
                subtitle="Lorem Ipsum is simply dummy text of the printing industry."
            />
            <ProductGrid products={bestsellers.slice(0, 5)} />


            <Features />
            <Subscribe />
        </>
    );
}