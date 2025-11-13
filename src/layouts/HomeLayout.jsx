import React from "react";
import { Outlet } from "react-router";
import Wrapper from "../components/Wrapper";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

export function HomeLayout() {
	return (
		<>
			<Header />
			<Wrapper className="relative flex-row">
				<Sidebar />
				<Main>
					<Outlet />
				</Main>
			</Wrapper>
		</>
	);
}
