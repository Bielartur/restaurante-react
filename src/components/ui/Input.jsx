import React from "react";

export function Input({ type = "text", className, ...props }) {
	return (
		<input
			type={type}
			className={
                `py-1.5 px-2 border border-indigo-800 bg-gray-50 rounded outline-indigo-600
                 focus:outline-1
                ${className}`}
			{...props}
		/>
	);
}
