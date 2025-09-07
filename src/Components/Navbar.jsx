
function Navbar() {

    const links = [
        { name: "New Arrivals", href: "#" },
        { name: "Men", href: "#" },
        { name: "Women", href: "#" },
        { name: "Kids", href: "#" },
    ];



    return (
        <>
            <div className="flex justify-center font-medium bg-zinc-900 text-lime-50 px-3 py-1 gap-17">
                {
                    links.map((link) => (
                        <a className=" hover:bg-rose-400 p-2 rounded-2xl"
                            key = {link.name}
                            href ={link.href}
                        >
                            {link.name}
                        </a>
                    ))
                }
            </div>
        </>

    )
}

export default Navbar;