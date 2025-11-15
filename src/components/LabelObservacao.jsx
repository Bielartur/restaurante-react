import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function LabelObservacao() {
	return (
		<p className="text-stone-600 text-xs font-semibold flex gap-1 items-center">
			<FontAwesomeIcon icon={faComment} />
			Observação:
		</p>
	);
}
