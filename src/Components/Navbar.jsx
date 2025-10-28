import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//navbar shows sticky behaviour only when scrolling up

export const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < lastScrollY) {
                setShow(true); // Scrolling up
            } else {
                setShow(false); // Scrolling down
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`sticky top-0 bg-[#18181B] z-50 border-b border-gray-600 pb-4 transition-transform duration-300 ${
                show ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <ul className='flex justify-center items-center text-xl md:gap-10 gap-6 m-4'>
                <li><Link to="/New">New Arrivals</Link></li>
                <li><Link to="/Men">Men</Link></li>
                <li><Link to="/Women">Women</Link></li>
                <li><Link to="/Kids">Kids</Link></li>
            </ul>
        </nav>
    );
}
