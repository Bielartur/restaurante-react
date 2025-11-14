import React, { useContext } from "react";
import { NavLink } from "react-router";
import { UserContext } from "../context/UserContext";

export function Header() {
  const { handleLogOut } = useContext(UserContext)

  return (
    <header className="fixed inset-x-0 top-0 h-16 bg-stone-200 flex items-center shadow-sm z-50">
      <nav className="w-full max-w-5xl mx-auto flex justify-between px-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4" : "text-stone-600"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/pedidos"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4" : "text-stone-600"
          }
        >
          Pedidos
        </NavLink>
        {/* <NavLink
          to="/carrinho"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4" : "text-stone-600"
          }
        >
          Carrinho
        </NavLink> */}
        <NavLink
        onClick={handleLogOut}
          to="/login"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4" : "text-stone-600"
          }
        >
          Sair
        </NavLink>
      </nav>
    </header>
  );
}
