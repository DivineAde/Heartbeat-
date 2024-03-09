"use client";

import Image from "next/image";
import React from "react";
import Hero from "./components/main/Hero";
import Navbar from "./components/main/NavMenu";
import Skills from "./components/main/SkillSection";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Portfolio from "./components/main/Portfolio";
import Footer from "./components/main/Footer";
import { LampContainer } from "./components/ui/lamp";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Navbar />
      <div className="w-full flex flex-col">
        <Hero />
        <Skills />

        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            My <br /> Projects
          </motion.h1>
        </LampContainer>
        <Portfolio />
        <Footer />
      </div>
    </main>
  );
}
