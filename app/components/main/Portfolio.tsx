import { projects } from '@/app/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type Props = {
  title:string;
  description: string | undefined;
  imgSrc: string;
  url: string;
}

export default function Portfolio({title, description, imgSrc, url}: any) {
  return (
    <div id='projects' className="flex min-h-screen items-center justify-center bg-transparent">
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.map(item => (
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30" key={item.title}>
        <div className="h-96 w-72">
          <Image width={700} height={700} className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={item.imgSrc} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">{item.title}</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{item.description}.</p>
          <Link href={item.url} target='_blank' className="rounded-full bg-neutral-900 py-2 px-4 font-com text-sm capitalize text-white shadow shadow-black/60">Live</Link>
        </div>
      </div>
      ))}
      
      
    </div>
  </div>
  
  )
}