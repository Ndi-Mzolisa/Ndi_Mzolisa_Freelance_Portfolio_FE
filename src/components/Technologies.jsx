import {RiReactjsFill, RiHtml5Fill, RiCss3Fill, RiJavascriptFill,} from "react-icons/ri";
import {TbBrandGithub} from "react-icons/tb";
import {SiGithub, SiTailwindcss, SiFigma, SiWordpress, SiOpenai} from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div id="skills" className="border-b border-b-neutral-800 pb-24 z-10">
        <motion.h2
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}} 
            transition={{duration: 1.5}}
            className="my-20 text-center text-4xl">
            Technologies
        </motion.h2>
        <motion.div 
            whileInView={{opacity: 1, x: 0}} 
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-8"
        >
        
                <RiHtml5Fill className="text-7xl text-[#e34c26]" />

                <RiCss3Fill className="text-7xl text-[#264de4]" />

                <SiTailwindcss className="text-7xl text-cyan-700" />

                <RiJavascriptFill className="text-7xl text-yellow-400" />

                <RiReactjsFill className="text-7xl text-cyan-400" />

                <SiGithub className="text-7xl text-green-500" />

                <SiFigma className="text-7xl text-cyan-400" />

                <SiWordpress className="text-7xl text-slate-100" />

                <SiOpenai className="text-7xl text-[#74AA9C]" />

        </motion.div>
    </div>
  )
}

export default Technologies