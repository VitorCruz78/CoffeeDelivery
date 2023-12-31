import { useContext, useEffect, useState } from "react";
import '../../styles/globals.css'
import { ICoffeeDetails } from "../../components/CoffeeCard";
import { CartContext } from "../../contexts/CartContext";
import { Clock, MapPin, Minus, Plus, Trash } from "phosphor-react"
import { CurrencyDollarSimple, MapPinLine } from "phosphor-react";
import { FaCreditCard } from "react-icons/fa";
import { PiBankFill } from "react-icons/pi";
import { IconType } from 'react-icons'
import { FaMoneyBill } from "react-icons/fa6";
import { AlertContext } from "../../contexts/AlertContext";
import ImageOrderCompleted from "../../assets/Imgs/conclused_request.png"
import { Loader } from "../../components/Loader";

interface IPaymentCondition {
    id: number
    Icon: IconType
    text: string
}

export function Checkout() {
    const { totalRequests, setTotalRequests, getRequests, setData, showCheckout } = useContext(CartContext)
    const { setTitle, setStatus, setShow } = useContext(AlertContext)
    const [selectedPaymentCondition, setSelectedPaymentCondition] = useState<number>()
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [loadingOrder, setLoadingOrder] = useState<boolean>(false)
    const [orderCompleted, setOrderCompleted] = useState<boolean>(false)

    const [cep, setCep] = useState<string>()
    const [street, setStreet] = useState<string>()
    const [number, setNumber] = useState<string>()
    const [complement, setComplement] = useState<string>()
    const [neighborhood, setNeighborhood] = useState<string>()
    const [city, setCity] = useState<string>()
    const [uf, setUF] = useState<string>()

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

    useEffect(() => {
        if (totalRequests?.length > 0) {
            setTotalPrice(totalRequests.reduce((accumulator, currentValue) => accumulator + ((currentValue.price * currentValue.quantity)), 0))
        }
    }, [totalRequests])

    function handlePaymentCondition(id: number) {
        setSelectedPaymentCondition(id)
    }

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
        setData(newTotalRequests)
        getRequests()
    }

    function handleSubmitRequest() {
        const inputStreet = document.getElementById('street')?.style
        const inputNumber = document.getElementById('number')?.style
        const inputNeighborhood = document.getElementById('neighborhood')?.style
        const inputCity = document.getElementById('city')?.style

        if (!street || !number || !neighborhood || !city) {
            setTitle('Preencha os campos em vermelho!')
            setStatus('error')
            setShow(true)
        }
        if (!street) {
            if (inputStreet) {
                inputStreet.border = '1px solid red'
            }
        } else {
            if (inputStreet) {
                inputStreet.border = '0px solid'
            }
        }
        if (!number) {
            if (inputNumber) {
                inputNumber.border = '1px solid red'
            }
        } else {
            if (inputNumber) {
                inputNumber.border = '0px solid'
            }
        }
        if (!neighborhood) {
            if (inputNeighborhood) {
                inputNeighborhood.border = '1px solid red'
            }
        } else {
            if (inputNeighborhood) {
                inputNeighborhood.border = '0px solid'
            }
        }
        if (!city) {
            if (inputCity) {
                inputCity.border = '1px solid red'
            }
        } else {
            if (inputCity) {
                inputCity.border = '0px solid'
            }
        }
        if (street && number && neighborhood && city) {
            if (!selectedPaymentCondition) {
                setTitle('Selecione uma forma de pagamento!')
                setStatus('error')
                setShow(true)
            } else {
                localStorage.removeItem('cdelivery')
                setTotalRequests([])
                loadingForOrderCompleted()
            }
        }
    }

    async function loadingForOrderCompleted() {
        setLoadingOrder(true)

        await new Promise(res => setTimeout(res, 1500))
        setOrderCompleted(true)
        setLoadingOrder(false)
    }

    async function autocompleteCep() {
        const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)

        if (!response.ok) {
            throw new Error('Erro ao buscar CEP')
        } else {
            const detailsCep = await response.json()

            setCity(detailsCep?.city)
            setNeighborhood(detailsCep?.neighborhood)
            setStreet(detailsCep?.street)
        }
    }

    if (cep?.length === 8) {
        autocompleteCep()
    }

    return (
        <>
            {
                loadingOrder
                    ?
                    <Loader />
                    :
                    orderCompleted
                        ?
                        <div className="flex flex-col justify-center items-center">
                            <div className="max-w-[80rem] w-full h-[80vh] flex flex-col justify-center">
                                <div className="px-4 md:px-0 mt-28 md:mt-0 flex flex-col justify-center lg:flex lg:flex-row lg:justify-around items-center">
                                    <div className="flex flex-col justify-center items-start">
                                        <h1 className="font-baloo text-yellow-dark text-2xl lg:text-3xl">Uhu! Pedido confirmado</h1>
                                        <p className="text-base-subtitle font-medium">Agora é só aguardar que logo o café chegará até você</p>
                                        <div className="h-60 mb-10 md:mb-0 mt-10 w-[18rem] md:w-[28rem] rounded-md bg-gradient-to-r from-yellow via-yellow-dark to-purple-dark p-[1.5px] rounded-tr-3xl rounded-bl-3xl">
                                            <div className="h-full w-full bg-white flex flex-col justify-center items-start gap-4 px-5">
                                                <div className="flex items-center gap-2">
                                                    <circle className="bg-purple-dark p-3 rounded-full">
                                                        <MapPin weight="fill" color="#FFF" />
                                                    </circle>
                                                    <div className="flex flex-col items-start text-base-text">
                                                        <p>Entrega em <span className="font-semibold">{street}</span>, <span className="font-semibold">{number}</span> {neighborhood} - {city} {uf && <span>,</span>} <span className="uppercase">{uf}</span></p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <circle className="bg-yellow p-3 rounded-full">
                                                        <Clock weight="fill" color="#FFF" />
                                                    </circle>
                                                    <div className="flex flex-col gap items-start text-base-text">
                                                        <p>Previsão de entrega</p>
                                                        <p className="font-semibold">20 min - 30 min</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <circle className="bg-yellow-dark p-3 rounded-full">
                                                        <CurrencyDollarSimple weight="fill" color="#FFF" />
                                                    </circle>
                                                    <div className="flex flex-col items-start text-base-text">
                                                        <p>Pagamento na entrega</p>
                                                        {
                                                            selectedPaymentCondition === 1
                                                                ?
                                                                <p className="font-semibold">Cartão de crédito</p>
                                                                :
                                                                selectedPaymentCondition === 2
                                                                    ?
                                                                    <p className="font-semibold">Cartão de débito</p>
                                                                    :
                                                                    <p className="font-semibold">Dinheiro</p>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={ImageOrderCompleted} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <>
                            <div className="m-auto max-w-[80rem] mt-5 px-4 md:px-0">
                                <button onClick={() => showCheckout(false)} className="bg-purple text-white text-center rounded-md p-2">Voltar</button>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="flex flex-col justify-start items-start px-4 md:px-0 gap-36 md:gap-0 md:grid md:grid-cols-2 max-w-[80rem] w-full">
                                    <div>
                                        <div className="flex flex-col justify-start items-start pt-20">
                                            <div className="w-fit md:max-w-[60rem] md:w-full h-full lg:h-[30rem]">
                                                <p className="font-baloo font-semibold text-xl text-base-title mb-4">Complete seu pedido</p>
                                                <div className="bg-base-card h-full rounded-md">
                                                    <div className="px-14 py-10">
                                                        <p><span className="flex items-center gap-2 text-base-title text-lg"><MapPinLine size={20} weight="regular" color="#C47F17" />Endereço de entrega</span></p>
                                                        <p className="text-base-subtitle ml-7 text-md">Informe o endereço onde deseja receber seu pedido</p>
                                                        <form className="mt-10 flex flex-col justify-center items-start gap-3">
                                                            <input onChange={(e) => setCep(e.target.value)} value={cep} className="outline-none border bg-base-input p-3 rounded-md w-[12rem] text-base-title" placeholder="CEP" type="number" />
                                                            <input id="street" onChange={(e) => setStreet(e.target.value)} value={street} className="outline-none border bg-base-input p-3 rounded-md w-full" placeholder="Rua" type="text" />
                                                            <div className="flex flex-col items-start md:flex md:flex-row md:items-center gap-[0.75rem]">
                                                                <input id="number" onChange={(e) => setNumber(e.target.value)} value={number} className="outline-none border bg-base-input p-3 rounded-md w-[12rem] text-base-title" placeholder="Número" type="number" />
                                                                <input onChange={(e) => setComplement(e.target.value)} value={complement} className="outline-none border bg-base-input p-3 rounded-md w-[20rem] text-base-title" placeholder="Complemento" type="text" />
                                                            </div>
                                                            <div className="flex flex-col items-start md:flex md:flex-row md:items-center gap-[0.75rem]">
                                                                <input id="neighborhood" onChange={(e) => setNeighborhood(e.target.value)} value={neighborhood} className="outline-none border bg-base-input p-3 rounded-md w-[12rem] text-base-title" placeholder="Bairro" type="text" />
                                                                <input id="city" onChange={(e) => setCity(e.target.value)} value={city} className="outline-none border bg-base-input p-3 rounded-md w-[15.2rem] text-base-title" placeholder="Cidade" type="text" />
                                                                <input onChange={(e) => setUF(e.target.value)} value={uf} className="outline-none border bg-base-input p-3 rounded-md w-[4rem] text-base-title uppercase" placeholder="UF" type="text" maxLength={2} />
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="flex flex-col justify-center items-start px-14 py-10 bg-base-card mt-5">
                                                        <p><span className="flex items-center gap-2 text-base-title text-lg"><CurrencyDollarSimple size={20} weight="regular" color="#4B2995" />Pagamento</span></p>
                                                        <p className="text-base-subtitle ml-7 text-md">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                                                        <div className="flex flex-col items-start md:flex md:flex-row md:items-center gap-3 mt-6">
                                                            {
                                                                paymentCondition.map(items => {
                                                                    const { Icon } = items
                                                                    return <p key={items.id} onClick={() => handlePaymentCondition(items.id)} className={`hover:cursor-pointer flex items-center gap-3 bg-base-input rounded-md p-3 uppercase text-sm border ${selectedPaymentCondition === items.id && 'border border-purple-dark'}`}><span><Icon color="#4B2995" /></span>{items.text}</p>
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex flex-col justify-center items-center md:justify-end md:items-end md:pt-20'>
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
                                                                            <div key={items.id} className="flex justify-around items-start w-full h-[10rem] pt-10 rounded-tr-md rounded-tl-md bg-base-card">
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
                                                                    <button onClick={() => handleSubmitRequest()} className="uppercase mt-5 bg-yellow p-4 rounded-md font-semibold text-base-button w-full">Confirmar pedido</button>
                                                                </div>
                                                            </>
                                                            :
                                                            <div>
                                                                <h1 className="font-medium text-purple p-1">Não há nada em seu carrinho.</h1>
                                                            </div>
                                                    }
                                                </div>
                                            </div>
                                        </div >
                                    </div>
                                </div>
                            </div>
                        </>
            }
        </>
    )
}