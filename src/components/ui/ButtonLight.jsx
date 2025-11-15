import React from "react";

export default function ButtonLight({ children, className = "", ...props }) {
	return (
		<button
			className={`bg-stone-200 py-1 px-2 rounded 
                    flex items-center gap-1 border border-stone-400 hover:bg-stone-300 transition-colors duration-150 cursor-pointer ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
