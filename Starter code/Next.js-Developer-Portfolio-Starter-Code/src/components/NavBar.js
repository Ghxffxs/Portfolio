import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {   FacebookIcon, GithubIcon,   InstagramIcon,   LinkedInIcon, MoonIcon, SunIcon, TwitterIcon,   } from './Icons'
import {motion} from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher'


const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    
    return(
      <Link href={href} className={`${className} relative group`}>
        {title}

            <span className={`
            h-[1px] inline-block  bg-dark
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-light `}
            
            >
              &nbsp;</span>
      </Link>
    );
};

 

const Navbar = () => {

  const [mode, setMode] = useThemeSwitcher();
  "4:26:25"

  return (
    <header
    className="w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light
    ">
<button className="flex flex-col justify-center items-center">
  <span className="bg-dark dark:bg-light block h-0.5 w-6 rounded-sm -translate-y-0.5"></span>
  <span className="bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5"></span>
  <span className="bg-dark dark:bg-light block h-0.5 w-6 rounded-sm translate-y-0.5"></span>
</button>

        <nav>
          <CustomLink href="/" title="Home" className='mr-4'/>
          <CustomLink href="/about"  title="About" className='mx-4' />
          <CustomLink href="/projects"  title="Projects" className='mx-4' />
          <CustomLink href="/articles"  title="Articles" className='ml-4' />

        </nav>
        
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a href="https://github.com/Ghxffxs" target={"_blank"}
          whileHover={{y:-2 }}
          whileTap={{scale:0.9}}
          className="w-6 mx-3"
          >
          <GithubIcon/>
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/gopinath-m-6107b8230/" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className="w-5 mx-3"
          >
          <LinkedInIcon/>
          </motion.a>
          <motion.a href="https://www.instagram.com/gojo._14/" target={"_blank"}
           whileHover={{y:-2 }}
           whileTap={{scale:0.9}}
           className="w-11 "
           >
          <InstagramIcon/>
          </motion.a>
          <motion.a href="https://www.facebook.com/gopi.murugan.9279" target={"_blank"}
           whileHover={{y:-2 }}
           whileTap={{scale:0.9}}
           className="w-6 mx-3"
           >
          <FacebookIcon/>
          </motion.a>
          <motion.a href="https://twitter.com/Ghxffxs_" target={"_blank"}
           whileHover={{y:-2 }}
           whileTap={{scale:0.9}}
           className="w-6 ml-3"
           >
          <TwitterIcon/>
          </motion.a>

      <button
      onClick={() => setMode(mode === "light" ? "dark" : "light")  }
      className="ml-3 flex items-center justify-center rounded-full p-1"
      >
        {
          mode === "dark" ?
          <SunIcon className={"fill-dark"} />
          : <MoonIcon className={"fill-dark"}/>
        }
      </button>    
          
          
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo />
        </div>
    </header>
  );
};

export default Navbar