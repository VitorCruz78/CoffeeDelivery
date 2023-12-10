import { useContext, useState } from 'react'
import c_americano from '../../assets/Imgs/Type=Americano.png'
import c_milk from '../../assets/Imgs/Type=Café com Leite.png'
import c_cold from '../../assets/Imgs/Type=Café Gelado.png'
import c_hot from '../../assets/Imgs/Type=Chocolate Quente.png'
import c_cubano from '../../assets/Imgs/Type=Cubano.png'
import c_capuccino from '../../assets/Imgs/Type=Capuccino.png'
import c_expressC from '../../assets/Imgs/Type=Expresso Cremoso.png'
import c_express from '../../assets/Imgs/Type=Expresso.png'
import c_havaino from '../../assets/Imgs/Type=Havaiano.png'
import c_latte from '../../assets/Imgs/Type=Latte.png'
import c_mochaccino from '../../assets/Imgs/Type=Mochaccino.png'
import c_irlandes from '../../assets/Imgs/Type=Irlandês.png'
import c_arabe from '../../assets/Imgs/Type=Árabe.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CartContext } from '../../contexts/CartContext'
import { AlertContext } from '../../contexts/AlertContext'

export interface ICoffeeDetails {
    id: number,
    img: string,
    detail: string,
    complement: undefined | string | string[],
    title: string,
    description: string,
    quantity: number,
    price: number
}

export function CoffeeCard() {
    const { addToCart } = useContext(CartContext)
    const { setTitle, setStatus, setShow } = useContext(AlertContext)

    const [listOfCoffee, setListOfCoffee] = useState<ICoffeeDetails[]>([
        {
            id: 1,
            img: c_americano,
            detail: 'TRADICIONAL',
            complement: undefined,
            title: 'Expresso Tradicional',
            description: 'O Tradicional café feito com água quente e grãos moídos',
            quantity: 0,
            price: 9.90
        },
        {
            id: 2,
            img: c_express,
            detail: 'TRADICIONAL',
            complement: undefined,
            title: 'Expresso Americano',
            description: 'Expresso diluído, menos intenso que o Tradicional',
            quantity: 0,
            price: 10.90
        },

        {
            id: 3,
            img: c_expressC,
            detail: 'TRADICIONAL',
            complement: undefined,
            title: 'Expresso Cremoso',
            description: 'Café expresso Tradicional com espuma cremosa',
            quantity: 0,
            price: 11.90
        },
        {
            id: 4,
            img: c_cold,
            detail: 'TRADICIONAL',
            complement: 'GELADO',
            title: 'Expresso Gelado',
            description: 'Bebida preparada com café expresso e cubos de gelo',
            quantity: 0,
            price: 12.90
        },
        {
            id: 5,
            img: c_milk,
            detail: 'TRADICIONAL',
            complement: 'COM LEITE',
            title: 'Café com Leite',
            description: 'Meio a meio de expresso Tradicional com leite vaporizado',
            quantity: 0,
            price: 13.90
        },
        {
            id: 6,
            img: c_latte,
            detail: 'TRADICIONAL',
            complement: 'COM LEITE',
            title: 'Latte',
            description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
            quantity: 0,
            price: 14.90
        },

        {
            id: 7,
            img: c_capuccino,
            detail: 'TRADICIONAL',
            complement: 'COM LEITE',
            title: 'Capuccino',
            description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
            quantity: 0,
            price: 15.90
        },
        {
            id: 8,
            img: c_mochaccino,
            detail: 'TRADICIONAL',
            complement: 'COM LEITE',
            title: 'Macchiato',
            description: 'Café expresso misturado com um pouco de leite quente e espuma',
            quantity: 0,
            price: 16.90
        },
        {
            id: 9,
            img: c_mochaccino,
            detail: 'TRADICIONAL',
            complement: 'COM LEITE',
            title: 'Mocaccino',
            description: 'Café expresso com calda de chocolate, pouco leite e espuma',
            quantity: 0,
            price: 17.90
        },
        {
            id: 10,
            img: c_hot,
            detail: 'ESPECIAL',
            complement: 'COM LEITE',
            title: 'Chocolate Quente',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            quantity: 0,
            price: 18.90
        },

        {
            id: 11,
            img: c_cubano,
            detail: 'TRADICIONAL',
            complement: ['ALCOÓLICO', 'GELADO'],
            title: 'Cubano',
            description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
            quantity: 0,
            price: 19.90
        },
        {
            id: 12,
            img: c_havaino,
            detail: 'ESPECIAL',
            complement: undefined,
            title: 'Havaino',
            description: 'Bebida adocicada preparada com café e leite de coco',
            quantity: 0,
            price: 20.90
        },
        {
            id: 13,
            img: c_arabe,
            detail: 'ESPECIAL',
            complement: undefined,
            title: 'Árabe',
            description: 'Bebida preparada com grãos de café árabe e especiarias',
            quantity: 0,
            price: 21.90
        },
        {
            id: 14,
            img: c_irlandes,
            detail: 'ESPECIAL',
            complement: 'ALCOÓLICO',
            title: 'Irlandês',
            description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
            quantity: 0,
            price: 22.90
        },
    ])

    function handleMinusQuantity(value: ICoffeeDetails) {
        if (value.quantity > 0) {
            setListOfCoffee(prevList =>
                prevList.map(item =>
                    item.id === value.id ? { ...item, quantity: item.quantity - 1 } : item
                )
            )
        }
    }

    function handlePlusQuantity(id: number) {
        setListOfCoffee(prevList =>
            prevList.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        )
    }

    function handleModalAddCart(value: ICoffeeDetails) {
        if (value.quantity > 0) {
            addToCart(value)
            setTitle('Adicionado ao carrinho!')
            setStatus('success')
            setShow(true)
        } else {
            setTitle('Selecione no mínimo uma quantidade')
            setStatus('error')
            setShow(true)
        }
    }

    return (
        <>
            <div className='max-w-[80rem] w-full flex flex-wrap gap-8'>
                {
                    listOfCoffee.map((details: ICoffeeDetails) => {
                        return <div key={details.id} className="h-[20rem] w-[16rem] bg-base-card rounded-tr-3xl rounded-bl-3xl">
                            <div className='flex flex-col items-center justify-center gap-2 px-4 py-2'>
                                <img src={details.img}></img>
                                <div className='flex items-center justify-center gap-2'>
                                    <p className='text-yellow-dark bg-yellow-light text-xs p-1 rounded-lg font-semibold'>{details.detail}</p>
                                    {
                                        typeof (details.complement) === 'object'
                                            ?
                                            details.complement.map(item => {
                                                return <p className='text-yellow-dark bg-yellow-light text-xs p-1 rounded-lg font-semibold'>{item}</p>
                                            })
                                            :
                                            <p className='text-yellow-dark bg-yellow-light text-xs p-1 rounded-lg font-semibold'>{details.complement}</p>
                                    }
                                </div>
                                <p className='font-baloo text-base-subtitle text-lg font-semibold'>{details.title}</p>
                                <p className='text-base-label text-sm text-center'>{details.description}</p>
                            </div>
                            <div className='flex items-center justify-center gap-2'>
                                <p className='bg-base-button text-base-text font-baloo rounded-md text-lg p-2'>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(details.price)}</p>
                                <p className='bg-base-button text-base-text p-2 rounded-md flex items-center justify-center gap-2'>
                                    <span className='hover:cursor-pointer' onClick={() => handleMinusQuantity(details)}><Minus size={12} color='#8047F8' />
                                    </span>
                                    <p>{details.quantity}</p>
                                    <span className='hover:cursor-pointer' onClick={() => handlePlusQuantity(details.id)}><Plus size={12} color='#8047F8' />
                                    </span>
                                </p>
                                <p className='bg-purple-dark p-2 rounded-md hover:cursor-pointer'>
                                    <span onClick={() => { handleModalAddCart(details) }}>
                                        <ShoppingCart size={20} weight='fill' color='#FFF' />
                                    </span>
                                </p>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}