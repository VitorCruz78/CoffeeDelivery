import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { ICoffeeDetails } from "../CoffeeCard"
import { Minus, Plus, Trash } from "phosphor-react"
import '../../styles/globals.css'

export function SelectedCoffees() {
    const { totalRequests } = useContext(CartContext)

    return (
        <div className='flex flex-col justify-center items-center md:justify-end md:items-end pt-20'>
            <div className="max-w-[30rem] w-full h-[30rem]">
                <p className="font-baloo font-semibold text-xl text-base-title">Cafés selecionados</p>
                <div className={`flex flex-col justify-start mt-5 gap-4 bg-background h-full rounded-md mr-10 ${totalRequests?.length > 4 && 'overflow-auto'}`}>
                    {
                        totalRequests
                            ?
                            totalRequests.map((items: ICoffeeDetails) => {
                                return <>
                                    <div className="flex justify-around items-start w-full h-[10rem] pt-10 rounded-md bg-base-card">
                                        <img src={items.img} alt="Imagem de café escolhido" width={80} className="-translate-y-2" />
                                        <div className="flex flex-col justify-center items-start">
                                            <h1 className="font-medium text-base-subtitle">{items.title}</h1>
                                            <div className="flex justify-center items-center gap-2">
                                                <p className='bg-base-button text-base-text p-2 rounded-md flex items-center justify-center gap-2'>
                                                    <span className='hover:cursor-pointer' /*onClick={() => handleMinusQuantity(details.id)}*/><Minus size={12} color='#8047F8' />
                                                    </span>
                                                    <p>{items.quantity}</p>
                                                    <span className='hover:cursor-pointer' /*onClick={() => handlePlusQuantity(details.id)}*/><Plus size={12} color='#8047F8' />
                                                    </span>
                                                </p>
                                                <p className='bg-base-button text-base-text p-2 rounded-md flex items-center justify-center gap-2'>
                                                    <span><Trash size={16} color="#8047F8" /></span>
                                                    <p className="text-purple text-md">Remover</p>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="font-medium text-base-text">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(items.price * items.quantity)}</p>
                                    </div>
                                </>
                            })
                            :
                            <div>
                                <h1 className="font-medium text-purple">Não há nada em seu carrinho.</h1>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}