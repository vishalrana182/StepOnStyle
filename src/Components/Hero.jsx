import background from '../assets/woman_white_sneakers.jpg'

export default function Hero() {

    return (
        <>
            <div className="relative left-1/2 -translate-x-1/2 w-[80vw] h-[90vh] overflow-hidden rounded-3xl">
                <img className="w-full h-full object-cover" src={background} alt="Vineyard" />
                <div className='absolute inset-0 bg-black opacity-45'></div>
                <div className='absolute bottom-18 left-6 z-10 flex flex-col gap-3'>
                    <h1 className="text-white text-4xl font-bold">Step into Style</h1>
                    <div>
                        <p className='font-normal text-white'>Discover the latest trends and timeless classics in</p>
                        <p className='font-normal text-white '>footwear. Find your perfect pair today.</p>
                    </div>
                </div>

            </div>
        </>
    )
}    