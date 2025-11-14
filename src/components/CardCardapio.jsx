import React from "react";
import { Button } from "./ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export function CardCardapio({ produto }) {
	return (
		<li
			key={`item-${produto.id}`}
			className="rounded shadow-md p-4 flex flex-col gap-2 bg-orange-100 justify-between h-full"
		>
			<img src={produto.imagem} alt={produto.nome} className="rounded" />

			<div>
				<div className="flex justify-between gap-2 items-center">
					<h3 className="text-lg font-bold text-zinc-700">
						{produto.nome}
					</h3>
					<strong className="font-bold text-orange-600 whitespace-nowrap text-lg">R$ {produto.preco}</strong>
				</div>
				<p className="text-sm mt-1">{produto.descricao}</p>
			</div>

			<div className="flex justify-end">
				<Button className="px-2">
					<FontAwesomeIcon icon={faPlus} />
				</Button>
			</div>
		</li>
	);
}
