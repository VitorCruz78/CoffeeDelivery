import { Banner } from "../../components/Banner"
import { CoffeeCard } from "../../components/CoffeeCard/CoffeeCard"
import { Header } from "../../components/Header"

export function Home() {
    return (
        <>
            <Header />
            <Banner />

            <div id="coffeeList" className="flex justify-center items-center">
                <div className="max-w-[80rem] w-full">
                    <p className="text-2xl font-baloo font-bold text-base-subtitle">Nossos cafés</p>
                    <div className="pt-8">
                        <CoffeeCard />
                    </div>
                </div>
            </div>
        </>
    )
}