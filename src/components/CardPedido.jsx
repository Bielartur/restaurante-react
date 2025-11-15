import React from "react";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardProdutoPedido from "./CardProdutoPedido";
import CardObservacao from "./CardObservacao";
import { CardTotal } from "./CardTotal";

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
		<li
			key={`item-pedido-${pedido.id}`}
			className="rounded shadow-md p-4 flex flex-col grow gap-2 bg-stone-100 h-full"
		>
			{/* <img src={pedido.imagem} alt={pedido.nome} className="rounded" /> */}

			<div className="space-y-2 justify-between grow">
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
				<CardObservacao observacao={pedido.observacao} />
				<ul>
					{pedido.itens.map((item) => (
						<li>
							<CardProdutoPedido item={item} />
						</li>
					))}
				</ul>
			</div>
			<CardTotal total={pedido.total} />
		</li>
	);
}
