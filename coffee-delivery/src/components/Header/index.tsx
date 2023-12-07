import { useEffect } from 'react'
import Logo from '../../assets/Logos/Logo.png'
import { FaLocationDot } from 'react-icons/fa6'
import { FaShoppingCart } from 'react-icons/fa'

export function Header() {

    useEffect(() => {
        const test = localStorage.getItem("cdelivery")
        console.log(test)
    }, [])

    return (
        <>
            <div className="bg-background h-16 flex justify-center px-4 md:px-0">
                <div className='max-w-[80rem] w-full flex items-center justify-between'>
                    <a href='/'><img src={Logo} alt='Logo da marca Coffe Delivery' className='h-8'></img></a>
                    <div className='flex items-center gap-4'>
                        <span className='flex items-center gap-2 text-purple-dark bg-purple-light p-2 rounded-md'><FaLocationDot /> Santa Catarina, SC</span>
                        <div className='flex flex-col items-end'>
                            <span className='bg-yellow-dark h-[15px] w-[15px] inline-block rounded-[50%] absolute top-[6px] translate-x-1 text-xs text-white text-center font-semibold px-0 pb-4'>0</span>
                            <a href='/Checkout' className='text-yellow-dark bg-yellow-light p-3 rounded-md hover:cursor-pointer'>
                                <FaShoppingCart />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}