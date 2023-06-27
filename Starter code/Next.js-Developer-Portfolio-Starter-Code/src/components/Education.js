import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({type, time, place, info}) => {
   const ref = useRef(null);
return (<li ref={ref} className='my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
   
   <LiIcon reference={ref}/>
   
    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:"spring"}}
    >
        <h3 className='capitalize font-bold text-2xl'>

            {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>

                {time} | {place}
            </span>
            <p className='font-medium w-full' >
                {info}
            </p>
    </motion.div>
</li>
);
};

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end", "center start"]
         }
    )
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Education
      </h2>

    <div ref={ref} className='w-[75%] mx-auto relative'>
      <motion.div
      style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"  />

           <ul className="w-full flex flex-col items-start justify-between ml-4">
               <Details 
                 type="Bachelor of Engineering in Computer Science."
                 time="2021-2025"
                 place="Christ the king engineering college"
                 info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                       Intelligence."
               />

                <Details 
                 type="12 Grade"
                 time="2020-2021"
                 place="Amrita vidyalayam senior secondary high school"
                 info="Relevant courses Biology, Mathematics, Physics, organic and inorganic Chemistry."
                 />
                 
                 <Details 
                 type="10 Grade"
                 time="2019-2020"
                 place="Brilliant grammar high school"
                 info="It's a Basic course and regular school with some basic sujects and also including Telugu and Hindi."
                 /> 


              
            </ul>

        </div>

    </div>
  );
};

export default Education;


