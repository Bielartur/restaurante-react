import React from "react";
import { Navigate, Outlet } from "react-router";
import Wrapper from "../components/Wrapper";
import { AuthContainer } from "../components/Auth/AuthContainer";
import { useUser } from "../hooks/useUser";
import Spacing from "../components/Spacing";
import Center from "../components/Center";

export function AuthLayout() {
	const { isLogged } = useUser();

	// Se não estiver logado, manda para o login
	if (isLogged) {
		return <Navigate to="/" replace />;
	}

	return (
		<Wrapper className="min-h-screen">
			<Center>
				<AuthContainer>
					<Spacing>
						<Outlet />
					</Spacing>
				</AuthContainer>
			</Center>
		</Wrapper>
	);
}
