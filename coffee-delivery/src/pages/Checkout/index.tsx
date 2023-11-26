import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { SelectedCoffees } from "../../components/SelectedCoffees";

export function Checkout() {
    return (
        <>
            <Header />
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-2 max-w-[80rem] w-full">
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