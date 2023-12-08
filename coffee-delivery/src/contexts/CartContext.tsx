import { ReactNode, createContext, useState, useEffect } from 'react'
import { ICoffeeDetails } from '../components/CoffeeCard'

interface CartContextType {
    addToCart: ({ }) => void
    totalRequests: ICoffeeDetails[]
}

interface ChildrenProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: ChildrenProps) {
    const dataRequests = [] as ICoffeeDetails[]
    const [data, setData] = useState<ICoffeeDetails[]>([])
    const [totalRequests, setTotalRequests] = useState<ICoffeeDetails[]>()

    useEffect(() => {
        if (data.length > 0) {
            localStorage.setItem("cdelivery", JSON.stringify(data))
        }
        getRequests()
    }, [data])

    function addToCart(value: ICoffeeDetails) {
        dataRequests.push(value)

        setData(state => [...state, ...dataRequests])
    }

    function getRequests() {
        const allRequests = localStorage.getItem("cdelivery")

        setTotalRequests(JSON.parse(allRequests as string))
    }

    return (
        <CartContext.Provider value={{ addToCart, totalRequests } as CartContextType}>
            {children}
        </CartContext.Provider>
    )
}