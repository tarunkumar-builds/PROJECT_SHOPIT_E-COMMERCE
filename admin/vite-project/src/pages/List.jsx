import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

export default function List({token}) {
  const [products, setProducts] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if(response.data.success){
        setProducts(response.data.products);
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const removeProduct = async (id)=>{
    try {
      const response = await axios.post(backendUrl+"/api/product/remove", {id}, {headers:{token}});
      if(response.data.success){
        toast.success(response.data.message);
        await fetchList();
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    fetchList();
  },[])
  return (
    <>
    
          <h2 className="text-2xl font-semibold mb-6">List Items</h2>

          <div className="bg-white rounded-lg shadow-sm border overflow-x-auto">
            <table className="w-full text-sm">
              {/* Header */}
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="p-4 text-left">Image</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Price</th>
                  <th className="p-4 text-left">Stock</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {products.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-4">
                      <img
                        src={item.image[0]}
                        alt=""
                        className="w-12 h-12 object-cover rounded"
                      />
                    </td>

                    <td className="p-4 font-medium">{item.name}</td>

                    <td className="p-4 text-gray-600">{item.category}</td>

                    <td className="p-4 font-semibold">${item.price}</td>

                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded text-xs ${item.stock > 10
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                          }`}
                      >
                        {item.stock}
                      </span>
                    </td>

                    <td className="p-4 space-x-3">
                      <button className="text-blue-600 hover:underline">
                        Edit
                      </button>

                      <button onClick={()=>removeProduct(item._id)} className="text-red-600 hover:underline">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
  );
}
