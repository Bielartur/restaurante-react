import React from "react";
import { NavLink } from "react-router";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 h-16 bg-slate-200 flex items-center shadow-sm z-50">
      <nav className="w-full max-w-5xl mx-auto flex justify-between px-6">
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
