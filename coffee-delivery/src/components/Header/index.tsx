import Logo from '../../assets/Logos/Logo.png'
import { FaLocationDot } from 'react-icons/fa6'
import { FaShoppingCart } from 'react-icons/fa'

export function Header() {
    return (
        <>
            <div className="bg-background h-16 flex justify-center">
                <div className='max-w-[80rem] w-full flex items-center justify-between'>
                    <img src={Logo} alt='Logo da marca Coffe Delivery' className='h-8'></img>
                    <div className='flex items-center gap-4'>
                        <span className='flex items-center gap-2 text-purple-dark bg-purple-light p-2 rounded-md'><FaLocationDot /> Porto Alegre, RS</span>
                        <span className='text-yellow-dark bg-yellow-light p-3 rounded-md'><FaShoppingCart /></span>
                    </div>
                </div>
            </div>
        </>
    )
}