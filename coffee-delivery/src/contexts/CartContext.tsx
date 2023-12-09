import { ReactNode, createContext, useState, useEffect } from 'react'
import { ICoffeeDetails } from '../components/CoffeeCard'

interface CartContextType {
    // eslint-disable-next-line no-empty-pattern
    addToCart: ({ }) => void
    getRequests: () => void
    showCheckout: (show: boolean) => void
    showCart: boolean
    totalRequests: ICoffeeDetails[]
}

interface ChildrenProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: ChildrenProps) {
    const [data, setData] = useState<ICoffeeDetails[]>([])
    const [totalRequests, setTotalRequests] = useState<ICoffeeDetails[]>([])
    const [showCart, setShowCart] = useState<boolean>()

    useEffect(() => {
        if (data.length > 0) {
            localStorage.setItem("cdelivery", JSON.stringify(data))
        }

        getRequests()
    }, [data])

    function addToCart(value: ICoffeeDetails) {
        setData(state => [...state, value])
    }

    function getRequests() {
        const allRequests = localStorage.getItem("cdelivery")

        setTotalRequests(JSON.parse(allRequests as string))
    }

    function showCheckout(show: boolean) {
        setShowCart(show)
    }

    return (
        <CartContext.Provider value={{ addToCart, getRequests, showCheckout, showCart, totalRequests } as CartContextType}>
            {children}
        </CartContext.Provider>
    )
}