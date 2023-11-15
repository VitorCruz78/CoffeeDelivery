import { ShoppingCart, Package, Clock, Coffee } from 'phosphor-react'
import ImgBanner from '../../assets/Imgs/Imagem.png'

export function Banner() {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="max-w-[80rem] w-full h-[30rem]">
                    <div className="flex flex-col md:grid md:grid-cols-2 h-full">
                        <div className="flex flex-col justify-start gap-10 pt-10 md:pt-20">
                            <div className='flex flex-col gap-4'>
                                <h1 className="text-3xl md:text-5xl tracking-wider text-base-title font-baloo font-bold">Encontre o café perfeito para qualquer hora do dia</h1>
                                <h2 className="text-md md:text-lg text-base-title">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
                            </div>
                            <div className='grid grid-cols-2 gap-2 md:gap-4 pb-8 md:pb-0'>
                                <p className='flex items-center text-base-subtitle text-sm md:text-md gap-2'><span className='bg-yellow-dark w-6 h-6 rounded-full flex flex-col justify-center items-center'><ShoppingCart size={14} weight="fill" color='#FFF' /></span>Compra simples e segura</p>
                                <p className='flex items-center text-base-subtitle text-sm md:text-md gap-2'><span className='bg-base-text w-6 h-6 rounded-full flex flex-col justify-center items-center'><Package size={14} weight="fill" color='#FFF' /></span>Embalagem mantém o café intacto</p>
                                <p className='flex items-center text-base-subtitle text-sm md:text-md gap-2'><span className='bg-yellow w-6 h-6 rounded-full flex flex-col justify-center items-center'><Clock size={14} weight="fill" color='#FFF' /></span>Entrega rápida e rastreada</p>
                                <p className='flex items-center text-base-subtitle text-sm md:text-md gap-2'><span className='bg-purple-dark w-6 h-6 rounded-full flex flex-col justify-center items-center'><Coffee size={14} weight="fill" color='#FFF' /></span>O café chega fresquinho até você</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className='w-[15rem] md:w-[30rem]' src={ImgBanner}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}