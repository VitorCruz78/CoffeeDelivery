import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../contexts/CartContext"
import { ICoffeeDetails } from "../CoffeeCard"
import { Minus, Plus, Trash } from "phosphor-react"
import '../../styles/globals.css'

export function SelectedCoffees() {
    const { totalRequests, setTotalRequests, getRequests } = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState<number>(0)

    useEffect(() => {
        if (totalRequests?.length > 0) {
            setTotalPrice(totalRequests.reduce((accumulator, currentValue) => accumulator + ((currentValue.price * currentValue.quantity)), 0))
        }
    }, [totalRequests])

    function handleMinusQuantity(value: ICoffeeDetails) {
        if (value.quantity > 0) {
            setTotalRequests(prevList =>
                prevList.map(item =>
                    item.id === value.id ? { ...item, quantity: item.quantity - 1 } : item
                )
            )
        }
    }

    function handlePlusQuantity(id: number) {
        setTotalRequests(prevList =>
            prevList.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        )
    }

    function handleRemoveCoffee(id: number) {
        const newTotalRequests = totalRequests.filter(item => item.id !== id)

        localStorage.removeItem('cdelivery')
        localStorage.setItem('cdelivery', JSON.stringify(newTotalRequests))
        getRequests()
    }

    return (
        <div className='flex flex-col justify-center items-center md:justify-end md:items-end pt-20'>
            <div className="max-w-[30rem] w-full h-[30rem]">
                <p className="font-baloo font-semibold text-xl text-base-title">Cafés selecionados</p>
                <div className={`flex flex-col justify-start mt-5 gap-4 bg-background h-full rounded-md mr-10 ${totalRequests?.length >= 4 && 'overflow-auto'}`}>
                    {
                        totalRequests?.length > 0
                            ?
                            <>
                                {
                                    totalRequests.map((items: ICoffeeDetails) => {
                                        return <>
                                            <div className="flex justify-around items-start w-full h-[10rem] pt-10 rounded-tr-md rounded-tl-md bg-base-card">
                                                <img src={items.img} alt="Imagem de café escolhido" width={80} className="-translate-y-2" />
                                                <div className="flex flex-col justify-center items-start">
                                                    <h1 className="font-medium text-base-subtitle">{items.title}</h1>
                                                    <div className="flex justify-center items-center gap-2">
                                                        <p className='w-20 bg-base-button text-base-text p-2 rounded-md flex items-center justify-center gap-2'>
                                                            <span className='hover:cursor-pointer' onClick={() => handleMinusQuantity(items)}><Minus size={12} color='#8047F8' />
                                                            </span>
                                                            <p>{items.quantity}</p>
                                                            <span className='hover:cursor-pointer' onClick={() => handlePlusQuantity(items.id)}><Plus size={12} color='#8047F8' />
                                                            </span>
                                                        </p>
                                                        <p onClick={() => handleRemoveCoffee(items.id)} className='hover:cursor-pointer bg-base-button text-base-text p-2 rounded-md flex items-center justify-center gap-2'>
                                                            <span><Trash size={16} color="#8047F8" /></span>
                                                            <p className="text-purple text-md">Remover</p>
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="font-medium text-base-text text-end w-20">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(items.price * items.quantity)}</p>
                                            </div >
                                        </>
                                    })
                                }
                                <div className="bg-blue w-full h-[12rem] bg-base-card mt-[-1rem] flex flex-col items-center py-8 px-10">
                                    <div className="flex justify-between w-full">
                                        <div>
                                            <ul>
                                                <li className="font-medium text-base-text">Total de itens</li>
                                                <li className="font-medium text-base-text py-1">Entrega</li>
                                                <li className="font-bold text-base-subtitle">Total</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li className="font-medium text-base-text">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)}</li>
                                                <li className="font-medium text-base-text py-1">R$3,50</li>
                                                <li className="font-bold text-base-subtitle">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice + 3.5)}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button className="uppercase mt-5 bg-yellow p-4 rounded-md font-semibold text-base-button w-full">Confirmar pedido</button>
                                </div>
                            </>
                            :
                            <div>
                                <h1 className="font-medium text-purple">Não há nada em seu carrinho.</h1>
                            </div>
                    }
                </div>
            </div>
        </div >
    )
}