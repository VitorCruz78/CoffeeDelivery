export function Loader() {
    return (
        <div className="h-[80vh] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="font-baloo text-purple text-2xl">Seu pedido está sendo preparado</h1>
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    )
}