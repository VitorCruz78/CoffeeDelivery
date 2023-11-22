import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { SelectedCoffees } from "../../components/SelectedCoffees";

export function Checkout() {
    return (
        <>
            <Header />
            <div>
                <Form />
            </div>
            <div>
                <SelectedCoffees />
            </div>
        </>
    )
}