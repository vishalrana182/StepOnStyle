import React from 'react'
import { useLocation } from 'react-router-dom'

export default function FullView() {
    const location = useLocation();
    const { img, name, description, price } = location.state || {};
    return (
        <>
            <div className='flex'>
                <div className='w-2xl ml-10 mt-10 '>
                    <img className='w-[28vw] h-[55vh]' src={img} alt={name || "Shoe"} />
                </div>
                <div className='w-3xl ml-10 mt-10 '>
                    <h2 className='text-md font-medium text-[#585858]'>{name}</h2>
                    <h1 className='text-2xl font-bold'>{description}</h1>
                    <h1 className='text-4xl font-bold mt-10'>{price}</h1>
                </div>
            </div>

        </>
    )
}
