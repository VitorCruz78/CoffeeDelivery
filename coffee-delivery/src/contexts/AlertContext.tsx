import { Dispatch, SetStateAction, createContext, useState } from "react";
import { ChildrenProps } from "./CartContext";
import { Alert } from "../components/Alert";

interface IAlertContext {
    title: string
    setTitle: Dispatch<SetStateAction<string>>
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
    status: string
    setStatus: Dispatch<SetStateAction<string>>
}

export const AlertContext = createContext({} as IAlertContext)

export function AlertProvider({ children }: ChildrenProps) {
    const [title, setTitle] = useState<string>()
    const [show, setShow] = useState<boolean>()
    const [status, setStatus] = useState<"error" | "success">()

    return (
        <AlertContext.Provider value={{ title, setTitle, show, setShow, status, setStatus } as IAlertContext}>
            {
                show && <Alert />
            }
            {children}
        </AlertContext.Provider>
    )
}