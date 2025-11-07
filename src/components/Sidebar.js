import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuItems = [
    { name: "Overblik", path: "/" },
    { name: "Kunder", path: "/customers" },
    { name: "Projekter", path: "/projects" },
    { name: "Økonomi", path: "/economy" },
    { name: "To-do", path: "/todo" },
    { name: "Indstillinger", path: "/settings" },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <h1 className="text-xl font-bold mb-6">Øresund Byg</h1>
      <nav className="flex flex-col space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end
            className={({ isActive }) =>
              `block py-2 px-3 rounded hover:bg-gray-700 ${
                isActive ? "bg-gray-700 font-semibold" : ""
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
