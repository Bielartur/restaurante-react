import React, { useContext, useEffect, useState } from "react";
import { ListCard } from "../components/ListCard";
import { CardCardapio } from "../components/CardCardapio";
import { UserContext } from "../context/UserContext";
import { useRequests } from "../hooks/useRequests";
import { Loading } from "../components/ui/Loading";
import { CardChoice } from "../components/CardChoice";

export function Home() {
	const { getProdutos, getCategorias } = useRequests();
	const { produtos, setProdutos } = useContext(UserContext);
	const [categorias, setCategorias] = useState([]);
	const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

	useEffect(() => {
		async function loadProdutos() {
			const response = await getProdutos();
			const data = response.data;

			if (!data.error || data.error == "") {
				setProdutos(data.data);
			}
		}

		async function loadCategorias() {
			const response = await getCategorias();
			const data = response.data;

			console.log(data.data);

			if (!data.error || data.error == "") {
				setCategorias(data.data);
			}
		}

		loadProdutos();
		loadCategorias();
	}, []);

	const produtosFiltrados = produtos.filter(
		(produto) =>
			categoriaSelecionada === null ||
			produto.categoria.id === categoriaSelecionada
	);

	return (
		<>
			{categorias.length > 0 ? (
				<ul className="flex justify-center gap-2 flex-wrap mt-4 mb-6">
					<CardChoice
						key={`categoria-todas`}
						isActive={categoriaSelecionada === null}
						onClick={() => setCategoriaSelecionada(null)}
					>
						Todas
					</CardChoice>

					{categorias.map((categoria) => (
						<CardChoice
							key={`categoria-${categoria.id}`}
							isActive={categoriaSelecionada === categoria.id}
							onClick={() => setCategoriaSelecionada(categoria.id)}
						>
							{categoria.nome}
						</CardChoice>
					))}
				</ul>
			) : (
				<Loading />
			)}

			<ListCard
				keyPrefix="item-cardapio"
				itens={produtosFiltrados}
				renderItem={(produto) => <CardCardapio produto={produto} />}
			/>
		</>
	);
}
