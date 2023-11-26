import { MapPinLine } from "phosphor-react";

export function Form() {
    return (
        <>
            <div className="flex flex-col justify-start items-start pt-20">
                <div className="max-w-[60rem] w-full h-[30rem]">
                    <p className="font-baloo font-semibold text-xl text-base-title">Complete seu pedido</p>
                    <div className="bg-background h-full rounded-md border-2 border-red-500">
                        <div className="px-14 py-10">
                            <p><span className="flex items-center gap-2 text-base-title text-lg"><MapPinLine size={20} weight="regular" color="#C47F17" />Endereço de entrega</span></p>
                            <p className="text-base-subtitle ml-7 text-md">Informe o endereço onde deseja receber seu pedido</p>

                            <form className="mt-10 flex flex-col justify-center items-start gap-3">
                                <input className="outline-none bg-base-input p-3 rounded-md w-[12rem]" placeholder="CEP" type="text" />
                                <input className="outline-none bg-base-input p-3 rounded-md w-full" placeholder="Rua" type="text" />
                                <div className="flex items-center gap-[0.75rem]">
                                    <input className="outline-none bg-base-input p-3 rounded-md w-[12rem]" placeholder="Número" type="text" />
                                    <input className="outline-none bg-base-input p-3 rounded-md w-[20rem]" placeholder="Complemento" type="text" />
                                </div>
                                <div className="flex items-center gap-[0.75rem]">
                                    <input className="outline-none bg-base-input p-3 rounded-md w-[12rem]" placeholder="Bairro" type="text" />
                                    <input className="outline-none bg-base-input p-3 rounded-md w-[15.2rem]" placeholder="Cidade" type="text" />
                                    <input className="outline-none bg-base-input p-3 rounded-md w-[4rem]" placeholder="UF" type="text" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}