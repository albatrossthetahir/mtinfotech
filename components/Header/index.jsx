'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "../../public/logo.svg"
import { cn } from "@/lib/utils";

export default function Header({id}) {
    const navLinks = [
        { name: "Home", link: "/" },
        { name: "About me", link: "/about" },
        { name: "skills", link: "/" },
        { name: "Projects", link: "/" },
        { name: "Contact Me", link: "/contact" },
    ];
    const [optionalLink, setoptionalLink] = useState(false);
    const ulref = useRef(null);

    const openMenu = ()=>{
        optionalLink? document.body.classList.remove('overflow-hidden') : document.body.classList.add('overflow-hidden')
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (ulref.current && !ulref.current.contains(event.target) && optionalLink) {
            setoptionalLink(false);
            document.body.classList.remove('overflow-hidden')
          }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => {
          document.removeEventListener("click", handleOutsideClick);
        };
    }, [optionalLink]);
    

    return (
        <header className="site-header relative lg:sticky w-full lg:top-10 z-20 lg:z-50 transition-all duration-300 ease-linear">
            <div className="container mx-auto w-full py-3 lg:py-5 px-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] bg-[#000000]/5 backdrop-blur-lg rounded-xl">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href={'/'} className="text-xl font-bold text-white">Tahir's Art</Link>

                    {/* Menu Items */}
                    <ul ref={ulref} className={cn("flex flex-col lg:items-center lg:flex-row fixed lg:relative top-0 lg:top-auto lg:left-auto lg:bg-transparent bg-[#1b1b1b] lg:space-x-4 ml-auto w-80 z-50 h-screen lg:h-auto lg:w-auto p-8 lg:p-0 shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] lg:shadow-none xl:rounded-xl rounded-tr-xl rounded-br-xl transition-all duration-300 ease-in-out", optionalLink ? "left-0 opacity-100" : "-left-full opacity-0 lg:opacity-100")}>
                        {
                            navLinks.map((Links) => (
                                <li key={Links.name}>
                                    <Link href={Links.link} className="text-white block hover:opacity-50 transition-all duration-300 capitalize">{Links.name}</Link>
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
