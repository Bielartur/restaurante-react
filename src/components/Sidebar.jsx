import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CardProdutoCarrinho } from "./CardProdutoCarrinho";
import { CardContainer } from "./ui/CardContainer";
import { Button } from "./ui/Button";

export function Sidebar() {
	const { carrinho, produtos } = useContext(UserContext);

	// --- Cálculo fora do return ---
	const total = carrinho.reduce((acumulado, item) => {
		const produto = produtos.find((p) => p.id === item.produto_id);
		if (!produto) return acumulado;
		return acumulado + produto.preco * item.quantidade;
	}, 0);

	const totalFormatado = total.toLocaleString("pt-BR", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	return (
		<aside className="w-80 border-l bg-stone-50 min-h-[calc(100vh-4rem)] sticky top-16 right-0 p-4 text-sm text-stone-700">
			<div className="fixed w-72">
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

				<CardContainer className="mt-4">
					<p className="flex justify-between text-lg font-semibold w-full">
						<span>Total:</span>
						<span>R$ {totalFormatado}</span>
					</p>
				</CardContainer>

				<Button className="w-full mt-2">Finalizar compra</Button>
			</div>
		</aside>
	);
}
