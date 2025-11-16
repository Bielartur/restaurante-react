import React from "react";
import { CardProdutoCarrinho } from "./CardProdutoCarrinho";
import { motion } from "framer-motion";


export function ListCarinho({ carrinho, produtos, className }) {
	return (
		<ul className={`max-h-100 overflow-auto ${className}`}>
			{carrinho.map((item, index) => {
				const produto = produtos.find((p) => p.id === item.produto_id);

				return (
					<motion.li key={`#${item.produto_id} - ${item.quantidade}`}
						initial={{ opacity: 0.2 }}
						animate={{ opacity: 1 }}
						transition={{
							duration: 0.3,
							ease: "easeOut",
							delay: index * 0.12, // escadinha
						}}>
						<CardProdutoCarrinho
							produto={produto}
							quantidade={item.quantidade}
						/>
					</motion.li>
				);
			})}
		</ul>
	);
}
