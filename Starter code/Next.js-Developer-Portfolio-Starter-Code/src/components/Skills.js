import React from 'react'
import {motion} from "framer-motion"


const Skill = ({name, x, y}) => {

  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
      py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light/90
      '
      whileHover={{scale:1.05}}
      initial={{x:0,y:0}}
      whileInView={{x:x, y: y, transition: {duration: 1.5} }}
      viewport={{once: true}}
      >
       {name}
      </motion.div>
  )
}

const Skills = () => {
  return (
   <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>

      <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
      p-4 shadow-dark cursor-pointer dark:text-dark dark:bg-light/90
      '
      whileHover={{scale:1.05}}
      >
       Problem-Solving
      </motion.div>

      <Skill name="JAVA" x="-19vw" y="2vw"/>
      <Skill name="GitHub" x="-6vw" y="-11vw"/>
      <Skill name="Web Design" x="32vw" y="0vw"/>
      <Skill name="NextJS" x="0vw" y="12vw"/>
      <Skill name="Creativity" x="-20vw" y="-15vw"/>
      <Skill name="Teamwork" x="15vw" y="-12vw"/>
      <Skill name="Effective Communication" x="0vw" y="22vw"/>
      <Skill name="Adaptibility" x="0vw" y="-23vw"/>
      <Skill name="Research" x="-38vw" y="0vw"/>
      


    </div>
   </>
  )
}

export default Skills
