const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-center">
        {/* Title */}
        <h1 className="text-4xl font-serif mb-10">
          Sign Up <span className="font-light">—</span>
        </h1>

        {/* Form */}
        <form className="space-y-5">
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-black px-4 py-3 outline-none focus:ring-1 focus:ring-black"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-black px-4 py-3 outline-none focus:ring-1 focus:ring-black"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-black px-4 py-3 outline-none focus:ring-1 focus:ring-black"
          />

          {/* Links */}
          <div className="flex justify-between text-sm text-gray-600">
            <span className="cursor-pointer hover:text-black">
              Forgot your password?
            </span>
            <span className="cursor-pointer hover:text-black">
              Login Here
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-6 bg-black text-white px-10 py-3 hover:bg-gray-900 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
