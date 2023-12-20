import { ReactNode, createContext, useState, useEffect, Dispatch, SetStateAction } from 'react'
import { ICoffeeDetails } from '../components/CoffeeCard'
import { Loader } from '../components/Loader'

interface CartContextType {
    // eslint-disable-next-line no-empty-pattern
    addToCart: ({ }) => void
    getRequests: () => void
    showCheckout: (show: boolean) => void
    showCart: boolean
    totalRequests: ICoffeeDetails[]
    setTotalRequests: Dispatch<SetStateAction<ICoffeeDetails[] | []>>
    setData: Dispatch<SetStateAction<ICoffeeDetails[] | []>>
}

export interface ChildrenProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: ChildrenProps) {
    const [loading, setLoading] = useState<boolean>(false)
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
        setLoading(false)
    }

    function showCheckout(show: boolean) {
        setShowCart(show)

        if (!show) {
            setLoading(true)
            getRequests()
        }
    }

    return (
        loading
            ?
            <Loader />
            :
            <CartContext.Provider value={{ addToCart, getRequests, showCheckout, showCart, totalRequests, setTotalRequests, setData } as CartContextType}>
                {children}
            </CartContext.Provider>
    )
}