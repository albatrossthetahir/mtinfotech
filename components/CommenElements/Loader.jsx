"use client"
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { slideUp } from './anim';


const Loader = () => {
    
    const [index, setIndex] = useState(0);
    const words = ['Hello', 'Bonjour', 'स्वागत हे', 'Ciao', 'Olá', 'おい', 'Hallå','Hola','Guten tag','Hallo','Home','Work','TWICE','The Damai','FABRIC™','Aanstekelijk','Base Create','AVVR','GraphicHunters','Future Goals','Atypikal','One:Nil','Andy Hardy','About','Contact','Success','Archive','Error','Styleguide',]

    useEffect(() => {
        if(index == words.length - 1) return;
        setTimeout( ()=>{
            setIndex(index + 1);
        }, index == 0 ? 600 : 150)
       
    }, [index]);

    return (
        <motion.div variants={slideUp} initial="initial" exit={"exit"} className="fixed top-0 left-0 z-50 h-screen w-screen bg-black text-white grid place-items-center">
            {/* <ul className='flex items-center gap-6'>
                {
                    helloList?.map((res, i) => <li key={i} className={`text-xl text-white font-bold whitespace-nowrap ${isHelloList ? "block" : "hidden"}`}>{res.helloEl}</li>
                    )
                }
            </ul> */}
            <p className='text-3xl xl:text-4xl 2xl:text-6xl text-white font-bold whitespace-nowrap'>{words[index]}</p>
        </motion.div>
    )
}

export default Loader;