import React from "react";
import { Input } from "./Input";

export function InputPassword({ placeholder = "Digite sua senha", ...props }) {
	return <Input type="password" placeholder={placeholder} {...props} />;
}
