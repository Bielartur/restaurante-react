import React from "react";

export default function AuthTitle({ title, subtitle }) {
	return (
		<div>
			<h1 className="text-2xl font-bold">{title}</h1>
			<h2 className="text-md">{subtitle}</h2>
		</div>
	);
}
