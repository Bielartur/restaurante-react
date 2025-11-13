import React from "react";

export function Label({ text, htmlFor, className, children, ...props }) {
	return (
		<label className={`flex flex-col gap-1 ${className}`} htmlFor={htmlFor} {...props}>
            {text}
			{children}
		</label>
	);
}
