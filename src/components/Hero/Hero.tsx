'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="relative w-full h-full min-h-[800px]">
      <motion.div
        className="w-full h-screen absolute inset-0 before:absolute before:w-full before:h-[8rem] before:bg-gradient-to-b from-black/40 before:z-hero-overlay"
        initial={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Image
          src="/home-image.png"
          className="object-cover h-[600px]"
          alt=""
          fill={true}
          priority
        />
      </motion.div>
      <div className="relative z-10 h-full top-[68vh] border-t w-full before:absolute before:top-[-250px] before:bg-gradient-to-t before:via-clever-green/60 before:from-clever-green before:w-full before:h-[250px]">
        <div className="bg-clever-green pb-20 h-[60vh]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center text-center pt-4 px-4"
          >
            <h1 className="label-text text-white">Produktvælger</h1>
            <p className="mt-2 headline-lg-text max-w-[664px] text-white">
              Lad os hjælpe dig med at finde rigtig ladeløsning
            </p>
            <p className="mt-4 body-text max-w-[664px] opacity-[0.8] text-white">
              Svar på spørgsmålene og find ud af hvilken Clever løsning der passer bedst til dine
              behov
            </p>
            <Link
              href="/product-chooser-flow?step=1"
              className="mt-8 bg-white text-clever-green px-8 py-2"
            >
              Tag testen her
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
