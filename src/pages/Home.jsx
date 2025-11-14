import React, { useEffect, useState } from "react";
import { useRequests } from "../utils/requests";
import { ListCard } from "../components/ListCard";
import { CardCardapio } from "../components/CardCardapio";

export function Home() {
	const { getProdutos } = useRequests();
	const [produtos, setProdutos] = useState([]);

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
