import React from "react";
import { Link, Navigate } from "react-router";
import { FormLogin } from "../components/Forms/FormLogin";
import AuthTitle from "../components/Auth/AuthTitle";

export function Login() {
	return (
		<>
			<AuthTitle
				title="Login"
				subtitle="Faça login e começe a fazer seus pedidos"
			/>
			<FormLogin />
			<p className="w-full text-center text-slate-600 mt-2">
				Ainda não tem uma conta?{" "}
				<Link
					to="/cadastro"
					className="text-slate-700 font-semibold hover:underline underline-offset-2"
				>
					Criar Conta
				</Link>
			</p>
		</>
	);
}
