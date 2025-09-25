import React from 'react'

export const Navbar = () => {
    return (
        <div className=''>
            <nav>
                <ul className='flex justify-center text-xl gap-6 m-2'>
                    <a href="#"><li>New Arrivals</li></a>                 
                    <a href="#"><li>Men</li></a>                    
                    <a href="#"><li>Women</li></a>                    
                    <a href="#"><li>Kids</li></a>                    
                </ul>
            </nav>
        </div>
    )
}
