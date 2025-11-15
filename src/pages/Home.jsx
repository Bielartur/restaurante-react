import React, { useContext, useEffect } from "react";
import { ListCard } from "../components/ListCard";
import { CardCardapio } from "../components/CardCardapio";
import { UserContext } from "../context/UserContext";
import { useRequests } from "../hooks/useRequests";

export function Home() {
	const { getProdutos } = useRequests();
	const { produtos, setProdutos } = useContext(UserContext);

	useEffect(() => {
		async function loadProdutos() {
			const response = await getProdutos();

			console.log(response);

			if (!response.error) {
				setProdutos(response.data);
			}
		}

		loadProdutos();
	}, []);

	return (
		<>
			<ListCard
				itens={produtos}
				renderItem={(produto) => <CardCardapio produto={produto} />}
			/>
		</>
	);
}
