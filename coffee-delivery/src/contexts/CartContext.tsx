import { ReactNode, createContext, useState } from 'react'
import { ICoffeeDetails } from '../components/CoffeeCard'

interface CartContextType {
    // eslint-disable-next-line no-empty-pattern
    addToCart: ({ }) => void
    getFromCart: () => void
    items: string
}

interface ChildrenProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: ChildrenProps) {
    const [keyStorage, setKeyStorage] = useState<string>('')
    const [items, setItems] = useState<string | null>()

    function addToCart(value: ICoffeeDetails) {
        localStorage.setItem(value.title, JSON.stringify(value))

        setKeyStorage(value.title)
    }

    function getFromCart() {
        const itemsLocal = localStorage.getItem(keyStorage)

        setItems(itemsLocal)
    }

    return (
        <CartContext.Provider value={{ addToCart, getFromCart, items } as CartContextType}>
            {children}
        </CartContext.Provider>
    )
}