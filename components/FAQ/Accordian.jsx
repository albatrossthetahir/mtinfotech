'use client';
import { useState } from "react";


export default function Accordian({title, answer}) {    
    const [accodianOpen, setAccordianOpen] = useState(false)
    return (
        <div className="p-4 sm:p-5 md:p-6 max-w-2xl w-full mx-auto shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] border-[1px_solid_#383838] bg-[#1b1b1b] rounded-xl outline-none">
            <button onClick={() => setAccordianOpen(!accodianOpen)} className="flex justify-between w-full cursor-pointer">
                <span className="text-white text-left font-medium text-sm sm:text-base md:text-lg lg:text-xl">{title}</span>
                {accodianOpen ? <span className="text-white text-base w-3 h-3">-</span> : <span className="text-white w-3 h-3 text-base">+</span>}
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white ${accodianOpen ? "grid-rows-[1fr] opacity-100 pt-4 sm:pt-5 mt:pt-6" : "grid-rows-[0fr] opacity-0"
                }`
            }>
                <p className="overflow-hidden font-normal text-sm sm:text-base md:text-lg lg:text-xl">{answer}</p>
            </div>
        </div>
    )
}
