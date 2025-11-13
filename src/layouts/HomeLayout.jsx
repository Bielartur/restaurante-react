import React from "react";
import { Outlet } from "react-router";
import Wrapper from "../components/Wrapper";

export function HomeLayout() {
	return (
		<>
			<Wrapper>
				<Outlet />
			</Wrapper>
		</>
	);
}
