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
        <motion.div variants={slideUp} initial="initial" exit={"exit"} className="fixed top-0 left-0 z-50 h-[100dvh] w-[100dvw] bg-black text-white flex items-center justify-center">
            <p className='text-3xl xl:text-4xl 2xl:text-6xl text-white font-bold whitespace-nowrap'>{words[index]}</p>
        </motion.div>
    )
}

export default Loader;