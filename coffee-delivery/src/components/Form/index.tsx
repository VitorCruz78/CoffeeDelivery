import { useState } from "react";
import { CurrencyDollarSimple, MapPinLine } from "phosphor-react";
import { FaCreditCard } from "react-icons/fa";
import { PiBankFill } from "react-icons/pi";
import { IconType } from 'react-icons'
import { FaMoneyBill } from "react-icons/fa6";

interface IPaymentCondition {
    id: number
    Icon: IconType
    text: string
}

export function Form() {

    const [selectedPaymentCondition, setSelectedPaymentCondition] = useState<number>()
    const paymentCondition: IPaymentCondition[] = [
        {
            id: 1,
            Icon: FaCreditCard,
            text: 'Cartão de crédito'
        },
        {
            id: 2,
            Icon: PiBankFill,
            text: 'Cartão de débito'
        },
        {
            id: 3,
            Icon: FaMoneyBill,
            text: 'Dinheiro'
        }
    ]

    function handlePaymentCondition(id: number) {
        setSelectedPaymentCondition(id)
    }

    return (
        <>
            <div className="flex flex-col justify-start items-start pt-20">
                <div className="max-w-[60rem] w-full h-[30rem]">
                    <p className="font-baloo font-semibold text-xl text-base-title">Complete seu pedido</p>
                    <div className="bg-base-card h-full rounded-md">
                        <div className="px-14 py-10">
                            <p><span className="flex items-center gap-2 text-base-title text-lg"><MapPinLine size={20} weight="regular" color="#C47F17" />Endereço de entrega</span></p>
                            <p className="text-base-subtitle ml-7 text-md">Informe o endereço onde deseja receber seu pedido</p>
                            <form className="mt-10 flex flex-col justify-center items-start gap-3">
                                <input className="outline-none bg-base-input p-3 rounded-md w-[12rem]" placeholder="CEP" type="text" />
                                <input className="outline-none bg-base-input p-3 rounded-md w-full" placeholder="Rua" type="text" />
                                <div className="flex items-center gap-[0.75rem]">
                                    <input className="outline-none bg-base-input p-3 rounded-md w-[12rem]" placeholder="Número" type="text" />
                                    <input className="outline-none bg-base-input p-3 rounded-md w-[20rem]" placeholder="Complemento" type="text" />
                                </div>
                                <div className="flex items-center gap-[0.75rem]">
                                    <input className="outline-none bg-base-input p-3 rounded-md w-[12rem]" placeholder="Bairro" type="text" />
                                    <input className="outline-none bg-base-input p-3 rounded-md w-[15.2rem]" placeholder="Cidade" type="text" />
                                    <input className="outline-none bg-base-input p-3 rounded-md w-[4rem]" placeholder="UF" type="text" />
                                </div>
                            </form>
                        </div>
                        <div className="flex flex-col justify-center items-start px-14 py-10 bg-base-card mt-5">
                            <p><span className="flex items-center gap-2 text-base-title text-lg"><CurrencyDollarSimple size={20} weight="regular" color="#4B2995" />Pagamento</span></p>
                            <p className="text-base-subtitle ml-7 text-md">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            <div className="flex items-center gap-3 mt-6">
                                {
                                    paymentCondition.map(items => {
                                        const { Icon } = items
                                        return <p key={items.id} onClick={() => handlePaymentCondition(items.id)} className={`hover:cursor-pointer flex items-center gap-3 bg-base-input rounded-md p-3 uppercase text-sm ${selectedPaymentCondition === items.id && 'border border-purple-dark'}`}><span><Icon color="#4B2995" /></span>{items.text}</p>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}