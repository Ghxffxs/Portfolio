import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({position, company, companyLink, time, address, work}) => {
   const ref = useRef(null);
return (<li ref={ref} className='my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
   
   <LiIcon reference={ref}/>
   
    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:"spring"}}
    >
        <h3 className='capitalize font-bold text-2xl'>
            {position}&nbsp;<a 
            href={companyLink}
            target="_blank"
            className='text-primary dark:text-primaryDark capitalize'
            >
              {company}
              </a>
              </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>

                {time}  {address}
            </span>
            <p className='font-medium w-full' >
                {work}
            </p>
    </motion.div>
</li>
);
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end","center start"]
         }
    )
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
      </h2>

    <div ref={ref} className='w-[75%] mx-auto relative'>
      <motion.div
      style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"  />

           <ul className="w-full flex flex-col items-start justify-between ml-4">
               <Details 

                position="Fresher"
                work=" An aspiring developer who is passionate about developing fantastic, functional, and unique digital experiences. Despite my lack of expertise in the field,
                 I am constantly on the lookout for new and innovative ways to make my clients' visions a reality."
               />
            </ul>

        </div>

    </div>
  );
};

export default Experience;



