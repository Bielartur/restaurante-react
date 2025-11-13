import React from "react";
import { Route, Routes } from "react-router";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { AuthLayout } from "../layouts/AuthLayout";
import { HomeLayout } from "../layouts/HomeLayout";
import { CriarConta } from "../pages/CriarConta";
import { PrivateRoute } from "./PrivateRoute";
import { Carrinho } from "../pages/Carrinho";
import { Pedidos } from "../pages/Pedidos";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<AuthLayout />}>
				<Route path="login" element={<Login />} />
				<Route path="cadastro" element={<CriarConta />} />
			</Route>
			<Route element={<PrivateRoute />}>
				<Route element={<HomeLayout />}>
					<Route index element={<Home />} />
					<Route path="carrinho" element={<Carrinho />} />
					<Route path="pedidos" element={<Pedidos />} />
				</Route>
			</Route>
		</Routes>
	);
}
