import { faClock, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CardProdutoPedido from "./CardProdutoPedido";
import { CardContainer } from "./ui/CardContainer";

const STATUS = {
	PENDENTE: "pendente",
	CONCLUIDO: "concluido",
	CANCELADO: "cancelado",
};

const statusStyles = {
	[STATUS.PENDENTE]: "bg-orange-200 text-orange-800",
	[STATUS.CONCLUIDO]: "bg-green-200 text-green-800",
	[STATUS.CANCELADO]: "bg-red-200 text-red-800",
};

export function CardPedido({ pedido }) {
	return (
		<div
			key={`item-${pedido.id}`}
			className="rounded shadow-md p-4 flex flex-col grow gap-2 bg-stone-100 h-full"
		>
			{/* <img src={pedido.imagem} alt={pedido.nome} className="rounded" /> */}

			<div className="flex flex-col gap-1 justify-between grow">
				<div className="flex justify-between gap-2 items-center">
					<h3 className="text-xl font-bold text-stone-700">
						Pedido #{pedido.id}
					</h3>
					<span
						className={`rounded-lg px-2 py-1 ${statusStyles[pedido.status]}`}
					>
						{pedido.status_legivel}
					</span>
				</div>
				<div className="text-sm text-stone-500 flex gap-1.5 items-center">
					<FontAwesomeIcon icon={faClock} />
					{pedido.criado_em_formatado}
				</div>
				<CardContainer className="py-3 px-2 flex-col gap-2!">
					<p className="text-stone-600 text-xs font-semibold flex gap-1 items-center">
						<FontAwesomeIcon icon={faComment} />
						Observação:
					</p>
					<p className="pl-4 text-sm">{pedido.observacao}</p>
				</CardContainer>
				<ul>
					{pedido.itens.map((item) => (
						<li>
							<CardProdutoPedido item={item} />
						</li>
					))}
				</ul>
				<CardContainer className="justify-between">
					<span>Total:</span>
					<strong className="text-orange-500">R$ {pedido.total}</strong>
				</CardContainer>
			</div>
		</div>
	);
}
