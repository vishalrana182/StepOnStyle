export default function shoe({img, name, description, price}) {
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
                <button className="text-white p-4 bg-black cursor-pointer rounded-2xl hover:bg-blue-500">
                    QUICK VIEW
                </button>
            </div>
        </div>
    )
}