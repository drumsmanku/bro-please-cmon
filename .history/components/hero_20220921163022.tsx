import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundComponents from './backgroundComponents';
type Props = {}

export default function Hero({}: Props) {
  const [text, count]=useTypewriter({
    words : ["Hi! My name is Mayank","Guy who loves to learn new things", "Loves to eat as well"],loop:true,
    delaySpeed:2000
  });
  
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
       <BackgroundComponents  />
       <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src="https://drive.google.com/uc?export=view&id=17bjZbVB0rbiPWcWKHMTVTDrIeTBbIbKk" alt="nothing" />

       <div className='z-20'>
         <h2 className=' text-sm uppercase text-gray-500 tracking-[15px]'>Aspiring Software Engineer</h2>
       
         <h1 className=' text-4xl lg:text-5xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='yellow'/>
        </h1>

         <div className='pt-5'>
           <Link href="#about">
           <button className='px-6 py-2 border border-gray-800 rounded-full uppercase text-xs tracking-widest text-gray-500 hover:border-[#F7AB0A]/40  hover:text-[#F7AB0A]/40'>About  </button>
        
           </Link>
           <Link href="#experience">
           <button className='px-6 py-2 border border-gray-800 rounded-full uppercase text-xs tracking-widest text-gray-500 hover:border-[#F7AB0A]/40  hover:text-[#F7AB0A]/40'>Experience  </button>
        
           </Link>
            <Link href="#skills">
            <button className='px-6 py-2 border border-gray-800 rounded-full uppercase text-xs tracking-widest text-gray-500 hover:border-[#F7AB0A]/40  hover:text-[#F7AB0A]/40'>Skills  </button>
        
            </Link>
            <Link href="#project">
            <button className='px-6 py-2 border border-gray-800 rounded-full uppercase text-xs tracking-widest text-gray-500 hover:border-[#F7AB0A]/40  hover:text-[#F7AB0A]/40'>Projects  </button>
        
            </Link>
        
        
           </div>
       </div>
       
      
    </div>
  )
}