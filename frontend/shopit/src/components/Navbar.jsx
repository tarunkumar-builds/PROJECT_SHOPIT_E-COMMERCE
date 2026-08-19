import { NavLink, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

export function Navbar() {
    const [visible, setVisible] = useState(false);
    const { showSearch, setShowSearch, getCartCount, assets, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        localStorage.removeItem("token");
        setToken('');
        setCartItems({});
        navigate('/login');
    }
    return (
        <nav className="flex items-center justify-between px-10 py-5 border-b">
            <NavLink to="/">
                <h1 className="text-2xl font-semibold tracking-wide">
                SHOPit<span className="text-pink-500">.</span>
            </h1>
            </NavLink>

            <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
                <li className="cursor-pointer hover:text-black">
                    <NavLink to="/" className="flex flex-col items-center gap-1">
                        <p>HOME</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                </li>
                <li className="cursor-pointer hover:text-black">
                    <NavLink to="/collection" className="flex flex-col items-center gap-1">
                        <p>COLLECTION</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                </li>
                <li className="cursor-pointer hover:text-black">
                    <NavLink to="/about" className="flex flex-col items-center gap-1">
                        <p>ABOUT</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                </li>
                <li className="cursor-pointer hover:text-black">
                    <NavLink to="/contact" className="flex flex-col items-center gap-1">
                        <p>CONTACT</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                </li>
            </ul>

            {/* ICONS */}
            <div className="flex items-center gap-6 text-gray-700 relative">

                {/* Search */}
                <div>
                    <img
                        onClick={() => setShowSearch(!showSearch)}
                        src={assets.search_icon}
                        className="w-5 h-5 cursor-pointer hover:scale-110 transition duration-200"
                        alt="search"
                    />
                </div>

                {/* Profile with Dropdown */}
                <div className="relative group">
                    {/* <Link to={token? null : '/login'}> */}
                        <img
                            onClick={()=>token? null : navigate('/login')}
                            src={assets.profile_icon}
                            className="w-5 h-5 cursor-pointer hover:scale-110 transition duration-200"
                            alt="profile"
                        />
                    {/* </Link> */}

                    {/* Dropdown */}
                    {token && <div className="absolute right-0 top-6 w-36 bg-white shadow-lg border rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                        {/* <NavLink
                            to="/profile"
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                            My Profile
                        </NavLink> */}

                        <NavLink
                            to="/orders"
                            className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-black"
                        >
                            Orders
                        </NavLink>

                        <button
                            onClick={logout}
                            className="w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-black"
                        >
                            Logout
                        </button>
                    </div>}
                </div>

                {/* Cart */}
                <Link to="/cart" className="relative">
                    <img
                        src={assets.cart_icon}
                        className="w-5 h-5 cursor-pointer hover:scale-110 transition duration-200"
                        alt="cart"
                    />

                    <p className="absolute -right-1 -bottom-1 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                        {getCartCount()}
                    </p>
                </Link>

                <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer md:hidden" alt="" />

            </div>

            <div
                className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300
      ${visible ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Header */}
                <div
                    className="flex items-center gap-2 px-5 py-4 border-b cursor-pointer"
                    onClick={() => setVisible(false)}
                >
                    <span className="text-xl">←</span>
                    <span className="text-sm">Back</span>
                </div>

                {/* Links */}
                <ul className="flex flex-col text-sm uppercase tracking-wide">
                    {["/", "/collection", "/about", "/contact"].map((path, i) => (
                        <NavLink
                            key={i}
                            to={path}
                            onClick={() => setVisible(false)}
                            className="px-5 py-4 border-b hover:bg-gray-100"
                        >
                            {["Home", "Collection", "About", "Contact"][i]}
                        </NavLink>
                    ))}
                </ul>
            </div>

        </nav>

    );
}