import React from "react";
import { CardContainer } from "./ui/CardContainer";


export function CardTotal({ total, classNameContainer = "mt-4", classNameText = "" }) {
	return (
		<CardContainer className={classNameContainer}>
			<p className={`flex justify-between text-lg font-semibold w-full ${classNameText}`}>
				<span>Total:</span>
				<span className="text-orange-500">R$ {total}</span>
			</p>
		</CardContainer>
	);
}
