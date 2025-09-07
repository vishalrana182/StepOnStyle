
function Navbar() {

    const links = [
        { name: "Our Wines", href: "#" },
        { name: "Visit Us", href: "#" },
        { name: " Events", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Shop", href: "#" },
    ];



    return (
        <>
            <nav className="flex justify-center font-medium bg-zinc-900 text-lime-50 p-3 gap-17">
                {
                    links.map((link) => (
                        <a
                            key = {link.name}
                            href ={link.href}
                        >
                            {link.name}
                        </a>
                    ))
                }
            </nav>
        </>

    )
}

export default Navbar;