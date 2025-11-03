import React from 'react'
import Hero from '../Components/Hero'
import Shoe from '../Components/shoe-card'
export const Home = () => {
    return (
        <>
            <Hero />
            <div className="flex mt-10 flex-wrap justify-center">
                <h2 className="home_heading tracking-wider text-3xl">New Arrivals</h2>
            </div>
            <div className="md:w-[90vw] w-full md:mx-auto grid md:grid-cols-4 grid-cols-2 md:mt-4 md:gap-4 m-2 p-2 gap-4 justify-items-center">
                <Shoe
                    img={'https://www.enibbana.com/cdn/shop/files/A00866Cchuk70.jpg?v=1737991104&width=800'}
                    name="CONVERSE"
                    description="Chuck 70 Plus Unisex in Dark Raisin"
                    price="$100.00"
                />
                <Shoe
                    img={'https://www.enibbana.com/cdn/shop/files/Lake2.jpg?v=1737992355&width=800'}
                    name="APAIR"
                    description="Square String Heeled Sandals"
                    price="$120.00"
                />
                <Shoe
                    img={'https://m.media-amazon.com/images/I/61duOUp3usL._SY625_.jpg'}
                    name="NEW BALANCE"
                    description="530 unisex"
                    price="$150.00"
                />
                <Shoe
                    img={'https://nb.scene7.com/is/image/NB/u1906ren_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440'}
                    name="NEW BALANCE"
                    description="NEW BALANCE 1906R"
                    price="$154.00"
                />
                <Shoe
                    img={'https://www.enibbana.com/cdn/shop/files/MAchiblack_c7fe97b9-fd32-484e-827d-b16b27ecf984.jpg?v=1737990913&width=800'}
                    name="AKAADA"
                    description="MACHI BLACK LEATHER"
                    price="$360.00"
                />
                <Shoe
                    img={'https://nb.scene7.com/is/image/NB/ytravbw2_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440'}
                    name="NEW BALANCE"
                    description="Rave Run v2"
                    price="$54.00"
                />
            </div>
            <footer>
                <div className='w-full h-7 mt-4 bg-black flex justify-center'>
                    <h2>Made By Vishal with ❤️</h2>
                </div>
            </footer>
        </>
    )
}
