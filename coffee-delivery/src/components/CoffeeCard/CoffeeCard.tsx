import c_americano from '../../assets/Imgs/Type=Americano.png'
import c_milk from '../../assets/Imgs/Type=Café com Leite.png'
import c_cold from '../../assets/Imgs/Type=Café Gelado.png'
import c_hot from '../../assets/Imgs/Type=Chocolate Quente.png'
import c_cubano from '../../assets/Imgs/Type=Cubano.png'
import c_capuccino from '../../assets/Imgs/Type=Capuccino.png'
import c_expressC from '../../assets/Imgs/Type=Expresso Cremoso.png'
import c_express from '../../assets/Imgs/Type=Expresso.png'
import c_havaino from '../../assets/Imgs/Type=Havaiano.png'
import c_latte from '../../assets/Imgs/Type=Latte.png'
import c_mochaccino from '../../assets/Imgs/Type=Mochaccino.png'
import c_irlandes from '../../assets/Imgs/Type=Irlandês.png'
import c_arabe from '../../assets/Imgs/Type=Árabe.png'

interface ICoffeeDetails {
    id: number,
    img: string,
    detail: string,
    complement: undefined | string | string[],
    title: string,
    description: string,
    price: number
}

export function CoffeeCard() {

    const listOfCoffee = [
        {
            id: 1,
            img: c_americano,
            detail: 'TRADICIONAL',
            complement: undefined,
            title: 'Expresso TRADICIONAL',
            description: 'O TRADICIONAL café feito com água quente e grãos moídos',
            price: 9.90
        },
        {
            id: 2,
            img: c_express,
            detail: 'TRADICIONAL',
            complement: undefined,
            title: 'Expresso Americano',
            description: 'Expresso diluído, menos intenso que o TRADICIONAL',
            price: 10.90
        },

        {
            id: 3,
            img: c_expressC,
            detail: 'TRADICIONAL',
            complement: undefined,
            title: 'Expresso Cremoso',
            description: 'Café expresso TRADICIONAL com espuma cremosa',
            price: 11.90
        },
        {
            id: 4,
            img: c_cold,
            detail: 'TRADICIONAL',
            complement: 'GELADO',
            title: 'Expresso Gelado',
            description: 'Bebida preparada com café expresso e cubos de gelo',
            price: 12.90
        },
        {
            id: 5,
            img: c_milk,
            detail: 'TRADICIONAL',
            complement: 'COM LEITE',
            title: 'Café com Leite',
            description: 'Meio a meio de expresso tradicional com leite vaporizado',
            price: 13.90
        },
        {
            id: 6,
            img: c_latte,
            detail: 'TRADICIONAL',
            complement: 'COM LEITE',
            title: 'Latte',
            description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
            price: 14.90
        },

        {
            id: 7,
            img: c_capuccino,
            detail: 'TRADICIONAL',
            complement: 'COM LEITE',
            title: 'Capuccino',
            description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
            price: 15.90
        },
        {
            id: 8,
            img: c_mochaccino,
            detail: 'TRADICIONAL',
            complement: 'COM LEITE',
            title: 'Macchiato',
            description: 'Café expresso misturado com um pouco de leite quente e espuma',
            price: 16.90
        },
        {
            id: 9,
            img: c_mochaccino,
            detail: 'TRADICIONAL',
            complement: 'COM LEITE',
            title: 'Mocaccino',
            description: 'Café expresso com calda de chocolate, pouco leite e espuma',
            price: 17.90
        },
        {
            id: 10,
            img: c_hot,
            detail: 'ESPECIAL',
            complement: 'COM LEITE',
            title: 'Chocolate Quente',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: 18.90
        },

        {
            id: 11,
            img: c_cubano,
            detail: 'TRADICIONAL',
            complement: ['ALCOÓLICO', 'GELADO'],
            title: 'Cubano',
            description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
            price: 19.90
        },
        {
            id: 12,
            img: c_havaino,
            detail: 'ESPECIAL',
            complement: undefined,
            title: 'Havaino',
            description: 'Bebida adocicada preparada com café e leite de coco',
            price: 20.90
        },
        {
            id: 13,
            img: c_arabe,
            detail: 'ESPECIAL',
            complement: undefined,
            title: 'Árabe',
            description: 'Bebida preparada com grãos de café árabe e especiarias',
            price: 21.90
        },
        {
            id: 14,
            img: c_irlandes,
            detail: 'ESPECIAL',
            complement: 'ALCOÓLICO',
            title: 'Irlandês',
            description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
            price: 22.90
        },
    ]

    return (
        <>
            {
                listOfCoffee.map((details: ICoffeeDetails) => {
                    return <div className="h-[20rem] w-[16rem] bg-red-500 rounded-tr-3xl rounded-bl-3xl">
                        <p>{details.title}</p>
                    </div>
                })
            }
        </>
    )
}