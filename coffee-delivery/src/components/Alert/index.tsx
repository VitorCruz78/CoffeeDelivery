import { useContext, useEffect } from "react"
import { AlertContext } from "../../contexts/AlertContext"

export function Alert() {
    const { title, status, setShow } = useContext(AlertContext)

    useEffect(() => {
        async function hiddenAlert() {
            await new Promise(resolve => setTimeout(resolve, 2200))
            setShow(false)
        }

        hiddenAlert()
    }, [setShow])

    return (
        <div className='fixed top-2 right-4 overflow-auto z-[1]'>
            <p className={`${status === 'success' ? 'bg-green-400' : 'bg-red-400'} p-4 rounded-md text-white font-baloo`}>{title}</p>
        </div>
    )
}