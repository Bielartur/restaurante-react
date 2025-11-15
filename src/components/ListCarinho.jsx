import React from "react";
import { CardProdutoCarrinho } from "./CardProdutoCarrinho";

export function ListCarinho({ carrinho, produtos }) {
	return (
		<ul className="max-h-100 overflow-auto">
			{carrinho.map((item) => {
				const produto = produtos.find((p) => p.id === item.produto_id);

				return (
					<li key={item.produto_id}>
						<CardProdutoCarrinho
							produto={produto}
							quantidade={item.quantidade}
						/>
					</li>
				);
			})}
		</ul>
	);
}
