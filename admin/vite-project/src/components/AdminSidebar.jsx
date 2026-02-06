import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

export default function AdminSidebar() {
  const base = "block px-5 py-3 rounded-lg border mb-3";
  return (
    <aside className="w-60 p-6 border-r min-h-screen">
      <NavLink
        to="/add"
        className={({ isActive }) =>
          `${base} flex items-center gap-3 ${isActive ? "bg-pink-100 border-pink-300" : ""}`
        }
      >
        <img src={assets.add_icon} alt="" />
        Add Items
      </NavLink>

      <NavLink to="/list" className={({ isActive }) =>
        `${base} flex items-center gap-3 ${isActive ? "bg-pink-100 border-pink-300" : ""}`
      }>
        <img src={assets.order_icon} alt="" />
        List Items
      </NavLink>

      <NavLink to="/orders" className={({ isActive }) =>
        `${base} flex items-center gap-3 ${isActive ? "bg-pink-100 border-pink-300" : ""}`
      }>
        <img src={assets.order_icon} alt="" />
        Orders
      </NavLink>
    </aside>
  );
}
