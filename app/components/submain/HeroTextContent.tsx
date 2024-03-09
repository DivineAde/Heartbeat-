"use client"

import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion"
import {motion} from "framer-motion"
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type Props = {}

export default function HeroTextContent({}: Props) {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-col md:flex-row items-center justify-center px-10 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
      <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-white font-bold">
            Welcome to my Portfolio, <span>E&apos;Kabo</span> 
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col gap-6 mt-6 text-6xl text-white max-w-[600px] font-bold w-auto h-auto"
        >
          <span>
            Providing
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"> the best </span>
            website for you!
          </span>
          <motion.p
           variants={slideInFromLeft(0.5)}
           className=" text-gray-500 text-lg max-w-[600px]"
          >I&apos;m a Frontend developer with four years experience in web development building web applications 
          </motion.p>
          <motion.a
          variants={slideInFromRight(1)}
          className="py-2 text-center button-primary max-w-[200px] text-base text-white cursor-pointer rounded-md"
          >
            Learn more
          </motion.a>
        </motion.div>
      </div>

      <div>
        <div className="blob">
          
        </div>
      </div>
    </motion.div>
  )
}