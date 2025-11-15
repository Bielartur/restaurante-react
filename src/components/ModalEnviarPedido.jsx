import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { ListCarinho } from "./ListCarinho";
import { Label } from "./ui/Label";
import { TextArea } from "./ui/TextArea";
import LabelObservacao from "./LabelObservacao";
import { useRequests } from "../hooks/useRequests";
import { useForm } from "react-hook-form";
import { useState } from "react";

export function ModalEnviarPedido({ produtos, carrinho, setCarrinho }) {
	const { enviarPedido } = useRequests();
	const [open, setOpen] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = useForm({
		defaultValues: { email: "", password: "" },
	});

	const onEnviarPedido = async (data) => {
		const body = {
			itens: carrinho,
			observacao: data.observacao,
		};
		console.log(body);
		const response = await enviarPedido(body);
		if (response.error) {
			console.log(response.error);
			return;
		}

		reset();
		setCarrinho([]);

		setOpen(false)
	};

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<Button className="w-full mt-2">Finalizar compra</Button>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-black/40 z-60" />

				<Dialog.Content
					className="fixed top-1/2 left-1/2 w-md -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 z-70"
					onClose={() => setOpen(false)}
				>
					<Dialog.Title className="flex justify-between items-center text-xl font-semibold">
						<span className="text-orange-500">Confirme seu pedido</span>

						<Dialog.Close className="text-stone-600 bg-stone-100 hover:bg-stone-200 transition-colors duration-300 rounded py-0.5 px-1 cursor-pointer">
							<FontAwesomeIcon icon={faClose} />
						</Dialog.Close>
					</Dialog.Title>

					<Dialog.Description className="text-sm flex flex-col gap-2">
						<p>Confira os detalhes do seu pedido antes de enviar.</p>
						<ListCarinho produtos={produtos} carrinho={carrinho} />

						<Label htmlFor="observacao" className="space-y-1 my-2">
							<LabelObservacao />
							<TextArea
								className="w-full"
								placeholder="Ex.: tirar cebola, ponto da carne"
								{...register("observacao")}
							/>
						</Label>
					</Dialog.Description>

					<Button
						className="w-full mt-2"
						onClick={handleSubmit(onEnviarPedido)}
						disabled={isSubmitting}
					>
						Confirmar pedido
					</Button>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
