import { NavLink } from "react-router-dom";

export function Footer() {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 py-20 border-t">
            <div>
                <h2 className="text-xl font-semibold mb-4">FOREVER.</h2>
                <p className="text-sm text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div>
                <h4 className="font-semibold mb-4">COMPANY</h4>
                <ul className="text-sm text-gray-500 space-y-2">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/orders">Delivery</NavLink></li>
                    <li><NavLink to="">Privacy Policy</NavLink></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-4">GET IN TOUCH</h4>
                <p className="text-sm text-gray-500">+1-212-456-7890</p>
                <p className="text-sm text-gray-500">contact@foreveryou.com</p>
            </div>
        </footer>
    );
}