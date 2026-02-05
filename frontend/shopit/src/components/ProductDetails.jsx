import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { RelatedProducts } from "./RelatedProducts";
import { SectionTitle } from "./SectionTitle";

export default function ProductDetails({ productId }) {
  const { currency, addToCart, products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [mainImage, setMainImage] = useState('');
  const [sizes, setSizes] = useState([]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setMainImage(item.image[0]);
        setSizes(item.sizes);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT : Images */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
              {productData.image.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setMainImage(img)}
                  className={`w-20 cursor-pointer border ${mainImage === img ? "border-black" : "border-transparent"
                    }`}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-gray-100">
              <img src={mainImage} className="w-full object-cover" />
            </div>
          </div>

          {/* RIGHT : Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              {productData.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="text-orange-400 text-sm">★★★★☆</div>
              <span className="text-sm text-gray-500">(122)</span>
            </div>

            {/* Price */}
            <p className="text-3xl font-bold mb-4">{`${currency} ${productData.price}`}</p>

            {/* Description */}
            <p className="text-gray-500 mb-6 leading-relaxed">
              {productData.description}
            </p>

            {/* Sizes */}
            <div className="mb-8">
              <p className="mb-3 font-medium">Select Size</p>

              <div className="flex gap-3">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveSize(s)}
                    className={`border px-5 py-2 text-sm transition ${activeSize === s
                      ? "bg-black text-white"
                      : "hover:border-black"
                      }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={()=>addToCart(productData._id,activeSize)} className="bg-black text-white px-10 py-3 hover:bg-gray-900 transition cursor-pointer">
              ADD TO CART
            </button>

            <hr className="my-8" />

            {/* Info */}
            <div className="text-sm text-gray-500 space-y-2">
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>
      </div>
      <SectionTitle title="Related Items"/>
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </>
  ) : <div className="opacity-0"></div>;
}
