import { useContext } from "react";
import { UserContext } from "../context/UserContext";


// Hook para acessar contexto
export function useUser() {
	const ctx = useContext(UserContext);
	if (!ctx) {
		throw new Error("useUser deve ser usado dentro de <UserProvider>");
	}
	return ctx;
}
