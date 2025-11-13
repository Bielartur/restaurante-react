import React from "react";
import { Loading } from "./Loading";

export function Button({ children, disabled, className, ...props }) {
	return (
		<button
			className={`bg-linear-to-r from-indigo-600 to-sky-600 text-white 
            rounded p-1 shadow-md hover:shadow-lg hover:bg-indigo-600 
            active:scale-96 transition-all duration-150 cursor-pointer
            disabled:from-slate-500 disabled:to-slate-600
            disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none
            disabled:hover:shadow-none disabled:hover:bg-indigo-400
			${className}
            `}
			disabled={disabled}
			{...props}
		>
			{disabled ? <Loading /> : children}
		</button>
	);
}
