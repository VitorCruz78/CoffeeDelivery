import { useContext } from "react";
import { Form } from "../../components/Form";
import { SelectedCoffees } from "../../components/SelectedCoffees";
import { CartContext } from "../../contexts/CartContext";

export function Checkout() {
    const { showCheckout } = useContext(CartContext)

    return (
        <>
            <div className="m-auto max-w-[80rem] mt-5">
                <button onClick={() => showCheckout(false)} className="bg-purple text-white text-center rounded-md p-2">Voltar</button>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col gap-36 md:gap-0 md:grid md:grid-cols-2 max-w-[80rem] w-full">
                    <div>
                        <Form />
                    </div>
                    <div>
                        <SelectedCoffees />
                    </div>
                </div>
            </div>
        </>
    )
}