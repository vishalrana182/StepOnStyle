import { useNavigate } from 'react-router-dom'
import { MoveUpRight } from 'lucide-react';

export default function shoe({img, name, description, price}) {
    const navigate = useNavigate();
    return (
        <div className="text-center">
            <div className="md:w-[20vw] w-[38vw] rounded-2xl">
                <img className="w-full h-full rounded-2xl" src={img} alt="Shoe" />
            </div>
            <div className="mt-3">
                {name}
            </div>
            <div className="font-mono">
                {description}
            </div>
            <div className="text-gray-500">
                {price}
            </div>
            <div className="mt-2">
                <button
                    className="group relative inline-flex items-center justify-center text-white p-4 bg-black cursor-pointer rounded-2xl hover:bg-[#8FABD4]"
                    onClick={() => navigate('/full_view', { state: { img, name, description, price } })}
                >
                    <span className="transition-all duration-300 group-hover:pr-6">QUICK VIEW</span>
                    <MoveUpRight className='absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </button>
            </div>
        </div>
    )
}