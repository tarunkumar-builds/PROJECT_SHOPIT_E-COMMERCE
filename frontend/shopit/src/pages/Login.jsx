import { useState } from "react";


export function Login() {
  const [currentState, setCurrentState] = useState('sign up');
  const onSubmitHandler = async (event) =>{
    event.preventDefault();
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
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 px-4 py-3 outline-none"
          />}

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
