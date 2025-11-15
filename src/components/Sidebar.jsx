import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom } from "@fortawesome/free-solid-svg-icons";
import ButtonLight from "./ui/ButtonLight";
import { ModalEnviarPedido } from "./ModalEnviarPedido";
import { ListCarinho } from "./ListCarinho";
import { CarrinhoVazio } from "./CarrinhoVazio";
import { CardTotal } from "./CardTotal";

export function Sidebar() {
	const { carrinho, setCarrinho, produtos } = useContext(UserContext);

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

	const sideBarContent = (
		<div className="fixed w-72">
			<div className="w-full flex justify-end">
				<ButtonLight onClick={() => setCarrinho([])}>
					Limpar carrinho
					<FontAwesomeIcon icon={faBroom} />
				</ButtonLight>
			</div>

			<ListCarinho produtos={produtos} carrinho={carrinho} />

			<CardTotal total={totalFormatado}/>

			<ModalEnviarPedido
				produtos={produtos}
				carrinho={carrinho}
				setCarrinho={setCarrinho}
				total={totalFormatado}
			/>
		</div>
	);

	return (
		<aside className="w-80 border-l bg-stone-50 min-h-[calc(100vh-4rem)] sticky top-16 right-0 p-4 text-sm text-stone-700">
			{carrinho.length > 0 ? sideBarContent : <CarrinhoVazio />}
		</aside>
	);
}
