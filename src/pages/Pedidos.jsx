import React, { useEffect, useState } from "react";
import { CardPedido } from "../components/CardPedido";
import { ListCard } from "../components/ListCard";
import { Loading } from "../components/ui/Loading";
import { useRequests } from "../hooks/useRequests";

export function Pedidos() {
	const { getPedidos } = useRequests();
	const [pedidos, setPedidos] = useState([]);

	useEffect(() => {
		async function loadPedidos() {
			const response = await getPedidos();
			const data = response.data;

			if (!data.error) {
				setPedidos(data.data);
			}
		}

		loadPedidos();
	}, []);

	return (
		<div className="mx-auto">
			{pedidos ? (
				<ListCard
					keyPrefix={`item-pedido`}
					itens={pedidos}
					renderItem={(pedido) => <CardPedido pedido={pedido} />}
					minSize="26rem"
				/>
			) : (
				<Loading />
			)}
		</div>
	);
}
