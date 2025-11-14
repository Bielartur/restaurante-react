import React from "react";

export function CardContainer({ children, className = "" }) {
	return (
		<div className={`p-2 rounded bg-stone-200 mt-2 flex gap-3 ${className}`}>{children}</div>
	);
}
