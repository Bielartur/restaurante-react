import React from "react";

export function CardChoice({
	children,
	isActive,
	key = "todas-categorias",
	...props
}) {
	return (
		<li
			key={key}
			className={`${
				isActive ? "bg-orange-200" : "bg-stone-200"
			} rounded-xl py-1 px-2 cursor-pointer`}
            {...props}
		>
			{children}
		</li>
	);
}
