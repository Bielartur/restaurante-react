import React, { useEffect, useState } from "react";
import { useRequests } from "../utils/requests";
import { CardPedido } from "../components/CardPedido";
import { ListCard } from "../components/ListCard"

export function Pedidos() {
	const { getPedidos } = useRequests();
	const [pedidos, setPedidos] = useState([]);

	useEffect(() => {
		async function loadPedidos() {
			const response = await getPedidos();

			console.log(response);

			if (!response.error) {
				setPedidos(response.data);
			}
		}

		loadPedidos();
	}, []);

	return (
		<div className="w-1/2 mx-auto">
			<ListCard
				itens={pedidos}
				renderItem={(pedido) => <CardPedido pedido={pedido} />}
				minSize="25rem"
			/>
		</div>
	);
}
