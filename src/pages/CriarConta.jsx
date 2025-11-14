import React from "react";
import { FormCadastro } from "../components/Forms/FormCadastro";
import AuthTitle from "../components/Auth/AuthTitle";
import { Link } from "react-router";

export function CriarConta() {
	return (
		<>
			<AuthTitle
				title="Criar Conta"
				subtitle="Faça sua conta e começe a fazer seus pedidos."
			/>
			<FormCadastro />
			<p className="w-full text-center text-stone-600 mt-2">
				Já tem uma conta?{" "}
				<Link
					to="/login"
					className="text-orange-600 font-semibold hover:underline underline-offset-2"
				>
					Fazer login
				</Link>
			</p>
		</>
	);
}
