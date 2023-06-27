import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, {  useEffect, useRef } from 'react'
import ProfilePic from "../../public/images/profile/developer-pic-3.jpg";
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'




const AnimatedNumbers =({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration: 3000})
const isInView = useInView(ref, {once: true});

useEffect(() => {
if(isInView){
    motionValue.set(value);

}
}, [isInView, value, motionValue] )

useEffect(() => {
    springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value ){
            ref.current.textContent = latest.toFixed(0);
        }
    })

}, [springValue, value, motionValue])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>Gopinath | About Page</title>
            <meta name="description" content="Anything I wanna describe about me " />
        </Head>
        <main className='flex w-full flex-col items-center justify-center dark:text-light '>
            <Layout className='pt-16'>
            <AnimatedText text="Be The Change!" className='mb-16'/>
            <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
            <p className='font-medium'>
            Hi, I&apos;m Gopinath, an aspiring developer who is passionate about developing fantastic, functional, and unique digital experiences. 
                Despite my lack of expertise in the field, I am constantly on the lookout for new and innovative ways to make my clients&apos; visions a reality.
            </p>   

            <p className='my-4 font-medium'>
               I believe that design is about more than just making things look pretty - it&apos;s about solving problems and 
               creating intuitive, enjoyable experiences for users. 
            </p>

            <p className='font-medium'>
            Whether I&apos;m working on a website, mobile app, or 
            other digital product, I bring my commitment to design excellence and user-centered thinking to 
            every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
            </p> 

            </div>


<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
bg-light p-8 dark:bg-dark dark:border-light
'>
<div  className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'   />
    <Image src={ProfilePic} alt="Gopi" className='w-full h-auto rounded-2xl'
    priority
    sizes="(max-width: 768px) 100vw,
    (max-width: 1200px) 50vw,
    33vw"
    />
</div>

<div className='col-span-2 flex flex-col items-end justify-between'>

<div className='flex flex-col items-end justify-center'>
    <span className='inline-block text-7xl font-bold'>
<AnimatedNumbers value={16} />+
    </span>
    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 '>personal projects </h2>
</div>

<div className='flex flex-col items-end justify-center'>
    <span className='inline-block text-7xl font-bold'>
    <AnimatedNumbers value={10} />+
    </span>
    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>successfull projects</h2>
</div>

<div className='flex flex-col items-end justify-center'>
    <span className='inline-block text-3xl font-bold'>
     Fresher   
    </span>
    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'></h2>
</div>

</div>

            </div>

            <Skills />
            <Education />
            <Experience />
            </Layout>
        </main>
    </>
  )
}

export default about
