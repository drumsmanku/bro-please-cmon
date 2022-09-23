import React from 'react'
import{motion} from 'framer-motion';
import ExperienceCards from './ExperienceCards';

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div 
      initial={{opacity:0,}}
      whileInView={{opacity:1,}}
      transition={{duration:1.5}}
      className='relative flex h-screen overflow-hidden flex-col md:flex-row justify-evenly items-center max-w-full px-10 mx-auto'>
      <h3 className=' absolute top-20 xl:top-14 uppercase tracking-[18px] text-gray-400 text-2xl '>Experience </h3>
      <div className='w-full flex p-10 space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar  scrollbar-track-gray-400/40 scrollbar-thumb-[#F7AB0A] '>
        <ExperienceCards />
        <ExperienceCards />
        <ExperienceCards />
        
      </div>
    </motion.div>
  )
}