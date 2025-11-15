import React from "react";

export function ListCard({ itens, renderItem, minSize = "15rem" }) {
	return (
		<ul
			className={`grid gap-6 items-stretch mx-auto w-full max-w-6xl`}
			style={{
				gridTemplateColumns: `repeat(auto-fill, minmax(${minSize}, 1fr))`,
			}}
		>
			{itens.map((item) => (
				<li key={item.id}>{renderItem(item)}</li>
			))}
		</ul>
	);
}
