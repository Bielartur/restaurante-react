import React from "react";

export function ListCard({ itens, renderItem, minSize = "15rem" }) {
	return (
		<ul
			className={`grid gap-6 items-stretch`}
			style={{
				gridTemplateColumns: `repeat(auto-fit, minmax(${minSize}, 1fr))`,
			}}
		>
			{itens.map((item, index) => (
				<li key={index}>{renderItem(item)}</li>
			))}
		</ul>
	);
}
