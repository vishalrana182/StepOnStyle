import { useNavigate } from 'react-router-dom'
import background from '../assets/woman_white_sneakers.jpg'
import { MoveUpRight } from 'lucide-react';

export default function Hero() {

    const navigate = useNavigate();

    return (
        <>
            <div className="relative left-1/2 -translate-x-1/2 w-[80vw] h-[90vh] overflow-hidden rounded-3xl mt-15">
                <img className="w-full h-full object-cover" src={background} alt="Vineyard" />
                <div className='absolute inset-0 bg-black opacity-45'></div>
                <div className='absolute bottom-18 left-6 z-10 flex flex-col gap-3'>
                    <h1 className="text-white text-4xl md:text-6xl font-bold font-hourglass">Step into Style</h1>
                    <div>
                        <p className='font-normal text-white'>Discover the latest trends and timeless classics in</p>
                        <p className='font-normal text-white '>footwear. Find your perfect pair today.</p>
                    </div>
                    <button
                        className="relative group bg-white text-black px-4 py-2 rounded-full w-40 mt-4 
             hover:bg-gray-200 cursor-pointer flex items-center justify-center"
                        onClick={() => navigate('/New')}
                    >
                        <span className="transition-all duration-300 group-hover:pr-6">
                            Shop Now
                        </span>
                        <MoveUpRight
                            className="absolute right-4 opacity-0 group-hover:opacity-100 
               transition-opacity duration-300 w-5 h-5"
                        />
                    </button>

                </div>

            </div>
        </>
    )
}