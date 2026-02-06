import { useContext } from "react";
import { useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import toast from "react-toastify";


export function Login() {
  const [currentState, setCurrentState] = useState('sign up');
  const {token, setToken, navigate, backendUrl} = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) =>{
    event.preventDefault();
    try {
      console.log("form submitted", currentState)
      if(currentState === "sign up"){
        const response = await axios.post(backendUrl + "/api/user/register", {name, email, password});
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token', token);

          setName('');
          setEmail('');
          setPassword('');
        }else{
          toast.error(response.data.message);
        }
      }else{
        const response = await axios.post(backendUrl + "/api/user/login",{email, password});
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token', token);
        }else{
          toast.error(error.message);
        }
      }
    } catch (error) {
      
    }
  }
  return (
    <>

      <main className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-medium tracking-wide mb-10">
          {currentState}
          <span className="inline-block w-10 h-[1px] bg-black ml-2 align-middle" />
        </h1>

        <form onSubmit={onSubmitHandler} className="w-full max-w-md space-y-6">
          {currentState === "login" ? '' : <input
            onChange={(e)=>setName(e.target.value)}
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 px-4 py-3 outline-none"
          />}

          <input
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-3 outline-none"
          />

          <input
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-3 outline-none"
          />

          <div className="flex justify-between text-sm text-gray-600">
            {currentState === 'sign up' ? '': <span className="cursor-pointer hover:underline">
              Forgot your password?
            </span>}
            {currentState === 'login' ? <span onClick={() => setCurrentState('sign up')} className="cursor-pointer hover:underline">
              Create account
            </span> : <span onClick={() => setCurrentState('login')} className="cursor-pointer hover:underline">
              already have an account
            </span>}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 mt-4 hover:opacity-90 cursor-pointer"
          >
            {currentState}
          </button>
        </form>
      </main>

    </>
  );
}
