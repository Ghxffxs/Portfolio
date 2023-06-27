import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const articles = () => {
  return (
    <>
    <Head>
            <title>Gopinath | Articles Page</title>
            <meta name="description" content="Anything I wanna describe about me " />
    </Head>

     <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText text="words Can Change &nbsp; &nbsp; The World !"className='mb-20'/>

            <div className='flex items-center justify-center'>
                   <div>
                   <h2 className=' mb-20 text-lg font-bold uppercase text-dark/75 dark:text-light'>Sorry for inconvenience</h2>
                    <p className=' font-medium dark:text-light'>
                        Articles Will Be Updated Soon,
                    </p>
                    <p className='font-medium dark:text-light'>
                        We Hope You Understand. 
                    </p>
                   </div>
            </div>

        </Layout>
     </main>   
    </>
  )
}

export default articles
"3:02:15"