import { useState } from "react";
import { backendUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login({setToken}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e)=>{
    try{
      e.preventDefault();
      const response = await axios.post(backendUrl + '/api/user/admin', {email,password});
      if(response.data.success){
        setToken(response.data.token);
      }else{
        toast.error(response.data.message);
      }
    }catch(error){
      console.log(error);
      toast.error(error.message);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Admin Panel
        </h2>

        {/* Form */}
        <form onSubmit={onSubmitHandler} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm mb-2">Email Address</label>
            <input
              onChange={(e)=> setEmail(e.target.value)}
              type="email"
              placeholder="your@email.com"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              onChange={(e)=> setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
