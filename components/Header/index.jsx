'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const navLinks = [
        { name: "Home", link: "/" },
        { name: "About me", link: "/" },
        { name: "skills", link: "/" },
        { name: "Projects", link: "/" },
        { name: "Contact Me", link: "/" },
    ];
    const [optionalLink, setoptionalLink] = useState(false);

    const openMenu = ()=>{
        optionalLink? document.body.classList.remove('overflow-hidden') : document.body.classList.add('overflow-hidden')
    }

    return (
        <header className="w-full py-3 lg:py-5 px-8 shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl">
            <div className="mx-auto">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href={'/'} className="text-xl font-bold">
                        <Image src="https://flowbite.com/docs/images/logo.svg" width={50} height={52} className="max-w-full" alt="Logo" />
                    </Link>

                    {/* Menu Items */}
                    <ul className={`flex flex-col lg:flex-row fixed lg:relative top-0 left-0 lg:top-auto lg:left-auto bg-[#1b1b1b] lg:space-x-4 ml-auto w-80 z-50 h-screen lg:h-auto lg:w-auto p-8 lg:p-0 shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] lg:shadow-none rounded-xl transition-all duration-300 ease-in-out ${optionalLink ? "left-0 opacity-100" : "-left-full lg:left-auto opacity-0 lg:opacity-100"}`}>
                        {
                            navLinks.map((Links) => (
                                <li key={Links.name}>
                                    <Link href={Links.name} className="text-white block hover:opacity-50 transition-all duration-300 capitalize">{Links.name}</Link>
                                </li>
                            ))
                        }
                    </ul>

                    {/* CTA Buttons */}
                    <div className={optionalLink ? "flex lg:hidden space-x-4" : "lg:hidden"} onClick={()=>{setoptionalLink(!optionalLink); openMenu()}}>
                        <button className="bg-[#242424] text-white p-3 rounded-full cursor-pointer transition-all duration-300 ease-in-out">
                            {optionalLink ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                </svg>
                            ) }
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
