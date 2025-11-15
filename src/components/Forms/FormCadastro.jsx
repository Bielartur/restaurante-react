import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";
import { Input } from "../ui/Input";
import { InputPassword } from "../ui/InputPassword";
import { Button } from "../ui/Button";
import { Label } from "../ui/Label";

import { cadastrarSchema } from "../../schemas/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../ErrorMessage";

export function FormCadastro() {
	const navigate = useNavigate();
	const { handleCadastrar } = useContext(UserContext);

	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting, errors },
	} = useForm({
		defaultValues: {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			password_confirm: "",
		},
		resolver: yupResolver(cadastrarSchema),
	});

	const onSubmit = async (data) => {
		// data = { first_name, last_name, email, password, password_confirm }
		const { error } = await handleCadastrar(data);

		if (!error) {
			// deu bom: contexto já salvou user, token e isLogged
			reset();
			navigate("/");
		} else {
			// deu ruim: exibe erro
			console.log(error);
			// ou seta num estado de erro / toast etc.
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
			<div className="flex gap-2">
				<Label htmlFor="first_name">
					<span>Nome</span>
					<Input placeholder="Digite seu nome" {...register("first_name")} />
					{errors?.first_name && (
						<ErrorMessage message={errors.first_name.message} />
					)}
				</Label>

				<Label htmlFor="last_name">
					<span>Sobrenome</span>
					<Input
						placeholder="Digite seu sobrenome"
						{...register("last_name")}
					/>
					{errors?.last_name && (
						<ErrorMessage message={errors.last_name.message} />
					)}
				</Label>
			</div>

			<Label htmlFor="email">
				<span>Email</span>
				<Input
					type="email"
					placeholder="Digite seu email"
					{...register("email")}
				/>
				{errors?.email && <ErrorMessage message={errors.email.message} />}
			</Label>

			<Label htmlFor="password">
				<span>Senha</span>
				<InputPassword {...register("password")} />
				{errors?.password && <ErrorMessage message={errors.password.message} />}
			</Label>

			<Label htmlFor="password_confirm">
				<span>Confirmar senha</span>
				<InputPassword {...register("password_confirm")} />
				{errors?.password_confirm && (
					<ErrorMessage message={errors.password_confirm.message} />
				)}
			</Label>

			<Button type="submit" disabled={isSubmitting} className="mt-2">
				Enviar
			</Button>
		</form>
	);
}
