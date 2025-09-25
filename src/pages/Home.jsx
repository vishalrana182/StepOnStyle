import React from 'react'
import Hero from '../Components/Hero'
import Shoe from '../Components/shoe-card'
export const Home = () => {
    return (
        <>
            <Hero />
            <div className="flex mt-10 flex-wrap justify-center">
                <h2 className="font-bold">New Arrivals</h2>
            </div>
            <div className="md:w-[90vw] w-full md:mx-auto grid md:grid-cols-4 grid-cols-2 md:mt-4 md:gap-4 m-2 p-2 gap-4 justify-items-center">
                <Shoe
                    img={'https://www.enibbana.com/cdn/shop/files/MAchiblack_c7fe97b9-fd32-484e-827d-b16b27ecf984.jpg?v=1737990913&width=800'}
                    name="AKAADA"
                    description="MACHI BLACK LEATHER"
                    price="$360.00"
                />
                <Shoe
                    img={'https://www.enibbana.com/cdn/shop/files/MAchiblack_c7fe97b9-fd32-484e-827d-b16b27ecf984.jpg?v=1737990913&width=800'}
                    name="AKAADA"
                    description="MACHI BLACK LEATHER"
                    price="$360.00"
                />
                <Shoe
                    img={'https://www.enibbana.com/cdn/shop/files/MAchiblack_c7fe97b9-fd32-484e-827d-b16b27ecf984.jpg?v=1737990913&width=800'}
                    name="AKAADA"
                    description="MACHI BLACK LEATHER"
                    price="$360.00"
                />
                <Shoe
                    img={'https://www.enibbana.com/cdn/shop/files/MAchiblack_c7fe97b9-fd32-484e-827d-b16b27ecf984.jpg?v=1737990913&width=800'}
                    name="AKAADA"
                    description="MACHI BLACK LEATHER"
                    price="$360.00"
                />
                <Shoe
                    img={'https://www.enibbana.com/cdn/shop/files/MAchiblack_c7fe97b9-fd32-484e-827d-b16b27ecf984.jpg?v=1737990913&width=800'}
                    name="AKAADA"
                    description="MACHI BLACK LEATHER"
                    price="$360.00"
                />
                <Shoe
                    img={'https://www.enibbana.com/cdn/shop/files/MAchiblack_c7fe97b9-fd32-484e-827d-b16b27ecf984.jpg?v=1737990913&width=800'}
                    name="AKAADA"
                    description="MACHI BLACK LEATHER"
                    price="$360.00"
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
