import { ProductCard } from "./ProductCard";


export function ProductGrid({ products }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-10">
            {products.map((p, i) => (
                <ProductCard key={i} {...p} />
            ))}
        </div>
    );
}