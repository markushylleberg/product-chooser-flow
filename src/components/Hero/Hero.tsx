'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="relative w-full h-screen min-h-[800px] before:absolute before:w-full before:h-[8rem] before:bg-gradient-to-b from-black/40 before:z-hero-overlay">
      <motion.div
        className="w-full h-full"
        initial={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        animate={{ y: -20, opacity: 1 }}
      >
        <Image
          src="/home-image.png"
          className="object-cover h-[600px] overflow-hidden"
          alt=""
          fill={true}
          priority
        />
      </motion.div>
      {/* We want to position the text content on top of the image, and move
          it 45% down the screen + space for the transparent/green gradient */}
      <div className="absolute h-[600px] top-[calc(45vh+205px)] border-t w-full before:absolute before:top-[-250px] before:bg-gradient-to-t before:from-clever-green before:w-full before:h-[250px]">
        <div className="h-[400px] bg-clever-green">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center text-center pt-4"
          >
            <h1 className="font-semibold text-white text-[15px]">Produktvælger</h1>
            <p className="mt-2 text-[52px] max-w-[664px] font-light text-white">
              Lad os hjælpe dig med at finde rigtig ladeløsning
            </p>
            <p className="mt-4 font-normal max-w-[664px] opacity-[0.8] text-white text-[15px]">
              Svar på spørgsmålene og find ud af hvilken Clever løsning der passer bedst til dine
              behov
            </p>
            <Link href="/product-chooser-flow?step=1">
              <button className="mt-8 bg-white text-clever-green px-8 py-2">Tag testen her</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
