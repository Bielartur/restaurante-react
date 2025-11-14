import React from "react";

export function Input({ type = "text", className, ...props }) {
	return (
		<input
			type={type}
			className={
                `py-1.5 px-2 border border-orange-600 bg-gray-50 rounded outline-orange-600
                 focus:outline-1
                ${className}`}
			{...props}
		/>
	);
}
