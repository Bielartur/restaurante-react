import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/Button";

export function AddRemove({
	quantidade,
	onIncrement,
	onDecrement,
}) {
	return (
		<div className="flex gap-2">
			<Button onClick={onDecrement} className="py-1">
				<FontAwesomeIcon icon={faMinus} />
			</Button>
			<div
				className="flex items-center justify-center px-3 rounded bg-amber-200 text-stone-700 w-10 font-semibold outline-0"
			>
				{quantidade}
			</div>
			<Button onClick={onIncrement} className="py-1">
				<FontAwesomeIcon icon={faPlus} />
			</Button>
		</div>
	);
}
