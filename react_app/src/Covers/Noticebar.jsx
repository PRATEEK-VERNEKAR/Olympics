import React from 'react'
import {motion} from 'framer-motion';


const Noticebar = () => {
  return (
    <>
        <div className='max-w-screen h-8 bg-orange-200 flex justify-center items-center '>
            <div className='w-1/6 text-end pr-3'>Alert:</div>
            <div className='w-2/3 h-full bg-red-300 overflow-hidden'>
                <motion.div initial={{x:1000}} animate={{x:-2000}} transition={{duration:10,repeat:Infinity}}>
                <span className='whitespace-nowrap'>
                  To give test means you are probably a teacher and you are giving a test to students. To take test means you are a student and are appearing for some exam.
                </span>
                </motion.div>
            </div>
            <div className='w-1/6'></div>
        </div>
    </>
  )
}

export default Noticebar; 