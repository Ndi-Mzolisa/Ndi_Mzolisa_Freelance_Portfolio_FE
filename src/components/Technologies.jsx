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
    <div id="skills" className="border-b border-neutral-800 pb-24">
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
            className="flex flex-wrap items-center justify-center gap-4"
        >
            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 bg-[#ff4040] p-4"
            >
                <RiHtml5Fill className="text-7xl fill-slate-100 bg-transparent" />
            </motion.div>

            <motion.div 
                variants={iconVariants(3.6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 bg-[#4040cc] p-4"
            >
                <RiCss3Fill className="text-7xl text-slate-100" />
            </motion.div>

            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 bg-slate-300"
            >
                <SiTailwindcss className="text-7xl text-cyan-700" />
            </motion.div>

            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <RiJavascriptFill className="text-7xl text-yellow-400" />
            </motion.div>

            <motion.div 
                variants={iconVariants(2.8)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <RiReactjsFill className="text-7xl text-cyan-400" />
            </motion.div>

            <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <SiGithub className="text-7xl text-green-500" />
            </motion.div>

            <motion.div 
                variants={iconVariants(2.8)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <SiFigma className="text-7xl text-cyan-400" />
            </motion.div>

            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <SiWordpress className="text-7xl text-slate-100" />
            </motion.div>

            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <SiOpenai className="text-7xl bg-cyan-600 text-slate-100 p-2 rounded-md" />
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies