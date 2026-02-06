export default function Navbar({setToken}) {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b">
      <h1 className="text-2xl font-bold">FOREVER <span className="text-pink-400">.</span></h1>

      <button onClick={()=> setToken('')} className="bg-gray-800 text-white px-6 py-2 rounded-full cursor-pointer">
        Logout
      </button>
    </header>
  );
}
