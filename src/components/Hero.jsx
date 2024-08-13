import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/ndiMzolisaProfile1Original2.3.png"
import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    }
})

const Hero = () => {
  return (
    <div id="home" className="border-b border-neutral-900 pb-4 lg:mb-36">
        <div className="flex flex-wrap px-0 md:px-[5rem] lg:px-[10rem] pt-[5rem]">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible" 
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                    >
                        Ndi Mzolisa
                    </motion.h1>

                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible" 
                        className="bg-gradient-to-r from-orange-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent font-semibold"
                    >
                        Front End Software Developer
                    </motion.span>

                    <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"  
                        className="my-2 max-w-xl py-6 font-light font-[verdana] text-neutral-400 tracking-widest leading-[2]"
                    >
                        {HERO_CONTENT}
                    </motion.p>

                    <motion.div
                        variants={container(1.5)}
                        initial="hidden"
                        animate="visible" 
                        className="mx-0 mt-3 mb-0 flex items-center justify-center gap-4 text-2xl pb-[3rem]"
                    >
                        <a href="https://www.linkedin.com/in/ndimande-mzolisa-507069197/" target="_blank" className="pointer-cursor transition-opacity duration-300 hover:opacity-100 opacity-[0.5]"><FaLinkedin /></a>
                        <a href="https://github.com/Ndi-Mzolisa" target="_blank" className="pointer-cursor transition-opacity duration-300 hover:opacity-100 opacity-[0.5]"><FaGithub /></a>
                    </motion.div>

                </div>
            </div>

            <div className="w-full lg:w-1/2 lg:p-8 ">
                <div className="flex justify-center">
                    <motion.img 
                        initial={{x: 100, opacity: 0}} 
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 1, delay: 1.2}}
                        src={profilePic} 
                        alt="Ndi Mzolisa" 
                        className="rounded-[33px]"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero