import React from "react";

export function Label({ htmlFor, className, children, ...props }) {
	return (
		<label className={`flex flex-col gap-1 ${className}`} htmlFor={htmlFor} {...props}>
			{children}
		</label>
	);
}
