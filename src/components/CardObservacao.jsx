import React from "react";
import { CardContainer } from "./ui/CardContainer";
import LabelObservacao from "./LabelObservacao";

export default function CardObservacao({ observacao }) {
	return (
		<CardContainer className="py-3 px-2 flex-col gap-2! my-3">
			<LabelObservacao />
			<p className="pl-4 text-sm">{observacao}</p>
		</CardContainer>
	);
}
