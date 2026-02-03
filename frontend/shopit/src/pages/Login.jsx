import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Signup from "./SignUp";
import { useState } from "react";


export function Login() {
  const [acc, setAcc] = useState(true);
  return (
    <>

      {acc&&<main className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-medium tracking-wide mb-10">
          Login
          <span className="inline-block w-10 h-[1px] bg-black ml-2 align-middle" />
        </h1>

        <form className="w-full max-w-md space-y-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-3 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-3 outline-none"
          />

          <div className="flex justify-between text-sm text-gray-600">
            <span className="cursor-pointer hover:underline">
              Forgot your password?
            </span>
            <span onClick={()=> setAcc(false)} className="cursor-pointer hover:underline">
              Create account
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 mt-4 hover:opacity-90"
          >
            Sign In
          </button>
        </form>
      </main>}

      {!acc && <Signup acc={acc}/>}
    </>
  );
}
