import React from 'react'
import IconButton from '../buttons.js/iconButton'
import { usePathname } from 'next/navigation';

const MobileMenu = ({ setMobileMenu }) => {
    const pathname = usePathname()


    const background = pathname.includes("blogs") ? "bg-black" : ""

    const NavItem = ({ href, children, expandable }) => {
        const isActive = pathname === href;
        const activeClass = isActive ? "text-yellow-300" : "text-white";
        return (
            <a
                href={href}
                className={`py-3 px-4 border-b border-[#5d7855] flex justify-between items-center ${activeClass}`}
            >
                {children}
                {expandable && <span className="text-sm" background={`${background}`}>▼</span>}
            </a>
        );
    };


    return (
        <div className="bg-[#4C6444] top-0 left-0 z-20 h-screen w-[70%] absolute">
            <div className='py-4 px-4 bg-[#DCD1BF] flex justify-between items-center'>
                <span className="text-[#4C6444] text-xl font-bold">Narikela</span>
                <button
                    onClick={() => setMobileMenu(false)}
                    className="text-[#4C6444] text-xl"
                >
                    ✕
                </button>
            </div>

            <div className="flex flex-col text-lg">
                <NavItem href='/' className={`${background}`}>Home</NavItem>
                <NavItem href='/about'>About Us</NavItem>
                <NavItem href='/plp' >Products</NavItem>
                <NavItem href='/blogs' >Blogs</NavItem>
                <NavItem href='/contact'>Contact Us</NavItem>
            </div>
        </div>
    );
};

export default MobileMenu;