import { ReactNode, createContext, useState, useEffect } from 'react'
import { ICoffeeDetails } from '../components/CoffeeCard'

interface CartContextType {
    // eslint-disable-next-line no-empty-pattern
    addToCart: ({ }) => void
    items: string
}

interface ChildrenProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: ChildrenProps) {
    const dataRequests = [] as ICoffeeDetails[]
    const [data, setData] = useState<ICoffeeDetails[]>([])

    useEffect(() => {
        if (data.length > 0) {
            localStorage.setItem("cdelivery", JSON.stringify(data))
        }
    }, [data])

    function addToCart(value: ICoffeeDetails) {
        dataRequests.push(value)

        setData(state => [...state, ...dataRequests])
    }

    return (
        <CartContext.Provider value={{ addToCart } as CartContextType}>
            {children}
        </CartContext.Provider>
    )
}