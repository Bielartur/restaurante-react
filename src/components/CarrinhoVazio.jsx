import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function CarrinhoVazio() {
	return (
		<div className="w-full h-28 flex flex-col items-center justify-center text-center gap-2">
			<FontAwesomeIcon icon={faCartArrowDown} className="text-4xl" />
			<p>Seu carrinho está vazio. Adicione um item para começar.</p>
		</div>
	);
}
