import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";
import { Input } from "../ui/Input";
import { InputPassword } from "../ui/InputPassword";
import { Button } from "../ui/Button";
import { Label } from "../ui/Label";

import { loginSchema } from "../../schemas/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../ErrorMessage";
import toast from "react-hot-toast";

export function FormLogin() {
	const navigate = useNavigate();
	const { handleSignIn } = useContext(UserContext);

	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting, errors },
	} = useForm({
		defaultValues: { email: "", password: "" },
		resolver: yupResolver(loginSchema),
	});

	const onSubmit = async (data) => {
		const response = await handleSignIn(data.email, data.password);

		if (!response.error) {
			reset(); // seu reset do react-hook-form
			navigate("/");
			toast.success(response.data.message);
		} else {
			// tratar erro
			toast.error(response.data.error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
			<Label text="Email" htmlFor="email">
				<span>Email</span>
				<Input
					placeholder="Digite seu email"
					{...register("email", { required: "O email é obrigatório" })}
				/>
				{errors?.email && <ErrorMessage message={errors.email.message} />}
			</Label>

			<Label htmlFor="password">
				<span>Senha</span>
				<InputPassword
					{...register("password", { required: "A senha é obrigatória" })}
				/>
				{errors?.password && <ErrorMessage message={errors.password.message} />}
			</Label>

			<Button type="submit" disabled={isSubmitting}>
				Enviar
			</Button>
		</form>
	);
}
