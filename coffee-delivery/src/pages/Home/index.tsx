import { useContext } from "react"
import { Banner } from "../../components/Banner"
import { CoffeeCard } from "../../components/CoffeeCard"
import { Header } from "../../components/Header"
import { CartContext } from "../../contexts/CartContext"
import { Checkout } from "../Checkout"

export function Home() {
    const { showCart } = useContext(CartContext)

    return (
        <>
            <Header />
            {
                !showCart
                    ?
                    <>
                        <Banner />
                        <div id="coffeeList" className="flex justify-center items-center mt-20 px-4 md:mt-0 md:px-0">
                            <div className="max-w-[80rem] w-full">
                                <p className="text-2xl font-baloo font-bold text-base-subtitle">Nossos cafés</p>
                                <div className="pt-8">
                                    <CoffeeCard />
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <Checkout />
            }
        </>
    )
}