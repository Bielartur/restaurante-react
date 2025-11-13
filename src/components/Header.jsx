import React from "react";
import { NavLink } from "react-router";

export function Header() {
  return (
    <header className="w-full h-16 bg-slate-200 fixed flex items-center justify-center z-1000">
      <nav className="w-full max-w-120 flex justify-between py-2 px-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4" : "text-slate-600"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/pedidos"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4" : "text-slate-600"
          }
        >
          Pedidos
        </NavLink>
        <NavLink
          to="/carrinho"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4" : "text-slate-600"
          }
        >
          Carrinho
        </NavLink>
      </nav>
    </header>
  );
}
