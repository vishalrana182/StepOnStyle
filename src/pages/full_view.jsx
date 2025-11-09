import React from 'react'
import { useLocation } from 'react-router-dom'

export default function FullView() {
    const location = useLocation();
    const { img, name, description, price } = location.state || {};
    return (
        <>
            <div className='flex'>
                <div className='w-2xl ml-10 mt-10 '>
                    <img className='w-[50vw] h-[55vh]' src={img} alt={name || "Shoe"} />
                </div>
                <div className='w-3xl ml-60 mt-10 '>
                    <h2 className='text-md font-medium text-[#585858]'>{name}</h2>
                    <h1 className='text-2xl font-bold'>{description}</h1>
                    <h1 className='text-4xl font-bold mt-10'>{price}</h1>

                    <div className='flex gap-5'>
                        <div className="btn mt-10 text-4xl">
                        <button className='px-15 py-5 bg-yellow-600 rounded-2xl cursor-pointer'>Buy</button>
                    </div>

                    <div className="btn mt-10 text-3xl">
                        <button className='px-15 py-5 bg-orange-600 rounded-2xl cursor-pointer'>Add To Card</button>
                    </div>
                    </div>

                    

                </div>

            </div>


        </>
    )
}
