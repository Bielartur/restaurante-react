import React from "react";

export default function Wrapper({ children, className = "" }) {
	return (
		<section
			className={`
        w-full min-h-screen flex items-center justify-center 
        ${className}
      `}
		>
			{children}
		</section>
	);
}
