import { ProductGrid } from "../components/ProductGrid";
import FilterSection from "../components/FilterSection";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

export function Collection() {
  const {search, showSearch,products, assets } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=> item !== e.target.value))
    }else{
      setCategory(prev=> [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=> item !== e.target.value))
    }else{
      setSubCategory(prev=> [...prev, e.target.value])
    }
  }

  const applyFilter = () =>{
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  }

 const sortProduct = ()=>{
  let fpCopy = filterProducts.slice();
  switch(sortType){
    case 'low-high':
      setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
      break;

    case 'high-low':
      setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
      break;

    default:
      applyFilter();
      break;
  }
 }

  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch])

  useEffect(()=>{
    sortProduct();
  },[sortType])
  return (
    <>

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <aside className="w-full max-w-xs space-y-6">
            <p onClick={() => setShowFilter(!showFilter)} className="inline-flex items-center gap-2 cursor-pointer select-none"
            >FILTERS
              <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
            </p>
            <div className={`${showFilter ? '' : 'hidden'} sm:block space-y-6`}>
              <FilterSection 
                title="CATEGORY"
                options={[
                  {label: "Men"},
                  {label: "Women"},
                  {label: "Kids"}
                ]}
                toggleCategory={toggleCategory}
              />

              <FilterSection
                title="TYPE"
                options={[
                  { label: "Topwear" },
                  { label: "Bottomwear" },
                  { label: "Winterwear" }
                ]}
                toggleCategory={toggleSubCategory}
              />
            </div>
          </aside>
        </div>

        {/* Main content */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-medium tracking-wide">
              ALL COLLECTIONS
              <span className="inline-block w-10 h-[2px] bg-black ml-3 align-middle"></span>
            </h2>

            <select onChange={(e)=>setSortType(e.target.value)} className="border px-3 py-2 text-sm outline-none">
              <option value="relavent">Sort by: Relevant</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
          <div className="h-[500px] overflow-y-auto">
            <ProductGrid products={filterProducts} />
          </div>
        </div>
      </div>
    </>
  );
}
