import React from 'react'
import{motion} from 'framer-motion';
type Props = {directionLeft?: boolean;}

export default function Skill1({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
            x:directionLeft? -200:200,
            opacity:0
        }}
        whileInView={{
          x:0,
          opacity:1,
        }}
        transition={{
          duration:1
        }}
        viewport={{
          once:true
        }}
        className='h-16 w-16 rounded-full object-contain border border-gray-500 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out' 
        src="https://drive.google.com/uc?export=view&id=1rmpRaoed1nMJlhWQe2IYO2rrU_ldcCV-" alt="" />
        
        <div className='absolute opacity-0 group-hover:opacity-80 tansition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-28 md:h-28 rounded-full z-0'>
         
          <div className='flex h-full items-center justify-center'>
            
            <p className='text-xl md:text-2xl font-bold text-black opacity-100'>100%</p>
          </div>
        </div>
    </div>
  )
}