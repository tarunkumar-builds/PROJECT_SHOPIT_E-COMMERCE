import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

export default function Add({token}) {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try{
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(backendUrl + "/api/product/add", formData, {headers:{token}});
      if(response.data.success){
        toast.success(response.data.message);
        setName('');
        setDescription('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice('');
        setSizes([]);
      }
    }catch(error){
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
          <form
            onSubmit={onSubmitHandler}
            className="max-w-3xl space-y-6"
          >
            {/* Upload images */}
            <div>
              <p className="font-medium mb-2">Upload Image</p>

              <div className="flex gap-4">
                <label
                    key="1"
                    className="w-24 h-24 border-2 border-dashed flex items-center justify-center cursor-pointer hover:bg-gray-50"
                  >
                    <img src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
                    <input onChange={(e)=> setImage1(e.target.files[0])}  type="file" id={`image1`} hidden />
                  </label>

                  <label
                    key="2"
                    className="w-24 h-24 border-2 border-dashed flex items-center justify-center cursor-pointer hover:bg-gray-50"
                  >
                    <img src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
                    <input  onChange={(e)=> setImage2(e.target.files[0])} type="file" id={`image2`} hidden />
                  </label>

                  <label
                    key="3"
                    className="w-24 h-24 border-2 border-dashed flex items-center justify-center cursor-pointer hover:bg-gray-50"
                  >
                    <img src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
                    <input onChange={(e)=> setImage3(e.target.files[0])}  type="file" id={`image3`} hidden />
                  </label>

                  <label
                    key="4"
                    className="w-24 h-24 border-2 border-dashed flex items-center justify-center cursor-pointer hover:bg-gray-50"
                  >
                    <img src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
                    <input onChange={(e)=> setImage4(e.target.files[0])}  type="file" id={`image4`} hidden />
                  </label>
              </div>
            </div>

            {/* Name */}
            <input
              onChange={(e)=> setName(e.target.value)}
              value={name}
              placeholder="Product name"
              className="w-full border p-3 rounded"
            />

            {/* Description */}
            <textarea
              onChange={(e)=>setDescription(e.target.value)}
              placeholder="Product description"
              value={description}
              className="w-full border p-3 rounded"
            />

            {/* Category row */}
            <div className="grid grid-cols-3 gap-4">
              <select onChange={(e)=>setCategory(e.target.value)} className="border p-3 rounded">
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
              </select>

              <select onChange={(e)=> setSubCategory(e.target.value)} className="border p-3 rounded">
                <option>Topwear</option>
                <option>Bottomwear</option>
                <option>Winterwear</option>
              </select>

              <input
                onChange={(e)=> setPrice(e.target.value)}
                type="number"
                placeholder="Price"
                className="border p-3 rounded"
                min={0}
              />
            </div>

            {/* Sizes */}
            <div>
              <p className="mb-2 font-medium">Product Sizes</p>

              <div className="flex gap-3">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])}
                    className={`px-4 py-2 border rounded ${
                      sizes.includes(size)
                        ? "bg-black text-white"
                        : "bg-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Bestseller */}
            <label className="flex items-center gap-2">
              <input onChange={()=> setBestseller(prev => !prev)} checked={bestseller} type="checkbox" />
              Add to bestseller
            </label>

            {/* Submit */}
            <button type="submit" className="bg-black text-white px-8 py-3 rounded hover:opacity-90">
              ADD
            </button>
          </form>
    </>
  );
}
