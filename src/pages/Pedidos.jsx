import React, { useEffect, useState } from "react";
import { CardPedido } from "../components/CardPedido";
import { ListCard } from "../components/ListCard"
import { useRequests } from "../hooks/useRequests";

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
		<div className="mx-auto">
			<ListCard
				itens={pedidos}
				renderItem={(pedido) => <CardPedido pedido={pedido} />}
				minSize="26rem"
			/>
		</div>
	);
}
