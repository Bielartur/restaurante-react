import React, { useContext } from "react";
import { Button } from "./ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/UserContext";
import { AddRemove } from "./AddRemove";

export function CardCardapio({ produto }) {
	const { carrinho, setCarrinho } = useContext(UserContext);

	const handleSetQuantidade = (novaQuantidade) => {
		// Atualiza o estado local
		// setQuantidade(novaQuantidade);

		// Atualiza o carrinho
		setCarrinho((prev) => {
			const semAtual = prev.filter((item) => item.produto_id !== produto.id);

			if (novaQuantidade <= 0) {
				return semAtual;
			}

			return [
				...semAtual,
				{ produto_id: produto.id, quantidade: novaQuantidade },
			];
		});
	};

	const item = carrinho.find((item) => item.produto_id === produto.id);
	const quantidade = item ? item.quantidade : 0;

	return (
		<li
			key={`item-${produto.id}`}
			className="rounded shadow-md p-4 flex flex-col gap-2 bg-orange-100 justify-between h-full"
		>
			<img src={produto.imagem} alt={produto.nome} className="rounded" />

			<div>
				<div className="flex justify-between gap-2 items-center">
					<h3 className="text-lg font-bold text-zinc-700">{produto.nome}</h3>
					<strong className="font-bold text-orange-600 whitespace-nowrap text-lg">
						R$ {produto.preco}
					</strong>
				</div>
				<p className="text-sm mt-1">{produto.descricao}</p>
			</div>

			<div className="flex justify-end">
				{quantidade === 0 ? (
					<Button className="px-2" onClick={() => handleSetQuantidade(1)}>
						<FontAwesomeIcon icon={faPlus} />
					</Button>
				) : (
					<AddRemove
						quantidade={quantidade}
						setQuantidade={handleSetQuantidade}
						onIncrement={() => handleSetQuantidade(quantidade + 1)}
						onDecrement={() => handleSetQuantidade(quantidade - 1)}
					/>
				)}
			</div>
		</li>
	);
}
