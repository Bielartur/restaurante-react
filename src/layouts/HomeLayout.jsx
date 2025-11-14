import React from "react";
import { Outlet } from "react-router";
import Wrapper from "../components/Wrapper";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

export function HomeLayout() {
  return (
    <div className="min-h-screen bg-stone-900">
      <Header />

      <div className="pt-16 flex min-h-[calc(100vh-4rem)]">
        {/* nada de items-center aqui */}
        <Main>
          <Outlet />
        </Main>
        <Sidebar />
      </div>
    </div>
  );
}
