import React from 'react'
import{motion} from 'framer-motion';
import Skill1 from './Skill';
import { Skill  } from '../typings';

type Props = {
  skills:Skill[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
       initial={{opacity:0,}}
       whileInView={{opacity:1}}
       transition={{duration:1.5}}
       className=' flex relative flex-col text-center items-center md:text-left xl:flex-row justify-center max-w-[2000px] min-h-screen xl:px-10 xl:space-y-0 mx-auto'>
      <h3 className='absolute top-24  uppercase tracking-[18px] text-gray-400 text-2xl'>skills</h3>
      <h3 className='absolute top-36  uppercase tracking-[3px] text-gray-400 text-sm'>Hover over a skill for current Efficiency </h3>

      <div className='grid grid-cols-4 gap-5'>
        {skills?.map(skill=>(
          < Skill1 key={skill._id} skill={ skill }/>
        ))}
       
        
      </div>
    </motion.div>
  )
}