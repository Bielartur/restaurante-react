import { faClock, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const STATUS = {
  PENDENTE: "pendente",
  CONCLUIDO: "concluido",
  CANCELADO: "cancelado",
};

const statusColors = {
  [STATUS.PENDENTE]: "orange",
  [STATUS.CONCLUIDO]: "green",
  [STATUS.CANCELADO]: "red",
};

function getColorFromStatus(status) {
  return statusColors[status] || "gray"; // fallback pro caso de cagada
}

export function CardPedido({ pedido }) {
	return (
		<li
			key={`item-${pedido.id}`}
			className="rounded shadow-md p-4 flex flex-col gap-2 bg-stone-100 justify-between h-full"
		>
			{/* <img src={pedido.imagem} alt={pedido.nome} className="rounded" /> */}

			<div className="flex flex-col gap-1">
				<div className="flex justify-between gap-2 items-center">
					<h3 className="text-xl font-bold text-stone-700">
						Pedido #{pedido.id}
					</h3>
					<span className={`rounded-lg bg-${getColorFromStatus(pedido.status)}-200 text-${getColorFromStatus(pedido.status)}-800 px-2 py-1`}>{pedido.status_legivel}</span>
				</div>
				<div className="text-sm text-stone-500 flex gap-1.5 items-center">
					<FontAwesomeIcon icon={faClock} />
					{pedido.criado_em_formatado}
				</div>
				<div className="py-3 px-2 rounded bg-stone-200 mt-2">
					<p className="text-stone-600 text-xs font-semibold flex gap-1 items-center">
						<FontAwesomeIcon icon={faComment} />
						Observação:
					</p>
					<p className="pl-4 text-sm mt-1">{pedido.observacao}</p>
				</div>
				{pedido.itens.map((item) => (
					<div className="p-2 rounded bg-stone-200 mt-2 flex gap-3">
						<img
							src={item.produto.imagem}
							alt={item.produto.nome}
							className="w-18 rounded"
						/>
						<div className="flex flex-col justify-between w-full">
							<p className="w-full font-semibold flex justify-between">
								<span>{item.produto.nome}</span>
								<span className="text-orange-500 text-sm">
									R$ {item.subtotal}
								</span>
							</p>
							<div className="text-sm text-stone-500">
								<p>Quantidade: {item.quantidade}x</p>
								<p>R$ {item.preco_unitario} un.</p>
							</div>
						</div>
					</div>
					))}
					<div className="p-2 rounded bg-stone-200 mt-2 flex justify-between gap-3">
						<span>Total:</span>
						<strong className="text-orange-500">R$ {pedido.total}</strong>
					</div>

			</div>
		</li>
	);
}
