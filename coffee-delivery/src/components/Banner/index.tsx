import ImgBanner from '../../assets/Imgs/Imagem.png'

export function Banner() {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="max-w-[80rem] w-full border-2 border-red-500 h-[30rem]">
                    <div className="grid grid-cols-2 h-full">
                        <div className="flex flex-col justify-center gap-5 border-2 border-blue-500">
                            <h1 className="text-3xl text-base-title">Encontre o café perfeito para qualquer hora do dia</h1>
                            <h2 className="text-lg text-base-subtitle">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
                        </div>
                        <div className="border-2 border-green-500">
                            <img src={ImgBanner}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}