import React from "react";
import { CardContainer } from "./ui/CardContainer";

export default function CardProdutoPedido({ item }) {
	return (
		<CardContainer className="items-center justify-between">
			<img
				src={item.produto.imagem}
				alt={item.produto.nome}
				className="w-18 rounded"
			/>
			<div className="flex flex-col justify-between w-full gap-1">
				<p className="w-full font-semibold flex justify-between">
					<span>{item.produto.nome}</span>
					<span className="text-orange-500 text-sm">R$ {item.subtotal}</span>
				</p>
				<div className="text-xs text-stone-500">
					<p>Quantidade: {item.quantidade}x</p>
					<p>R$ {item.preco_unitario} un.</p>
				</div>
			</div>
		</CardContainer>
	);
}
