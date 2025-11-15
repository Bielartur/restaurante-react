import React from "react";

export function TextArea({ className, ...props }) {
	return (
		<textarea
			className={`py-1.5 px-2 border border-orange-600 bg-gray-50 rounded outline-orange-600
                 focus:outline-1 min-h-20
                ${className}`}
			{...props}
		>
			
		</textarea>
	);
}
