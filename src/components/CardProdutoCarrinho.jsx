import React from "react";
import { CardContainer } from "./ui/CardContainer";

export function CardProdutoCarrinho({ produto, quantidade }) {
	const subtotal = (produto.preco * quantidade).toFixed(2);

	return (
		<CardContainer className="items-center">
			<img src={produto.imagem} alt={produto.nome} className="w-18 rounded" />
			<div className="flex flex-col justify-between gap-1 w-full">
				<p className="w-full font-semibold flex justify-between">
					<span className="text-md">{produto.nome}</span>
					<span className="text-orange-500 text-sm whitespace-nowrap">
						R$ {subtotal}
					</span>
				</p>
				<div className="text-xs text-stone-600">
					<p>Quantidade: {quantidade}x</p>
					<p>R$ {produto.preco} un.</p>
				</div>
			</div>
		</CardContainer>
	);
}
