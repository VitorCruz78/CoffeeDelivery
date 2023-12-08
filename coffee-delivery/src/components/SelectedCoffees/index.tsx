import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { ICoffeeDetails } from "../CoffeeCard"

export function SelectedCoffees() {
    const { totalRequests } = useContext(CartContext)

    return (
        <div className="flex flex-col justify-end items-end pt-20">
            <div className="max-w-[30rem] w-full h-[30rem]">
                <p className="font-baloo font-semibold text-xl text-base-title">Cafés selecionados</p>
                <div className="bg-background h-full rounded-md border-2 border-red-500 mr-10">
                    <div className="px-14 py-10">
                        {
                            totalRequests
                            &&
                            totalRequests.map((items: ICoffeeDetails) => {
                                return <>
                                    <div>
                                        {items.title}
                                    </div>
                                </>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}