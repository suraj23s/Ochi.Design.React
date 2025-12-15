import { motion } from 'framer-motion'
import React from 'react'

function Marque() {
    
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className="text border-t-2 border-b-2 border-zinc-800 flex overflow-hidden whitespace-nowrap gap-10">
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear",repeat: Infinity, duration: 5}} className='text-[22vw] leading-none font-founders font-black uppercase pt-10 -mb-20'>we are Ochi</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear",repeat: Infinity, duration: 5}} className='text-[22vw] leading-none font-founders font-black uppercase pt-10 -mb-20'>we are Ochi</motion.h1>
        {/* <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear",repeat: Infinity, duration: 5}} className='text-[17vw] leading-none font-founders font-black uppercase pt-10 -mb-20'>we are Ochi</motion.h1> */}
      </div>
    </div>
  )
}

export default Marque
