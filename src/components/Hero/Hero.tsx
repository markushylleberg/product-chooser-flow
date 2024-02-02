import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative w-full h-screen min-h-[800px]">
      <Image src="/home-image.png" className="object-cover h-[600px]" alt="" fill={true} priority />
      {/* We want to position the text content on top of the image, and move
          it 45% down the screen + space for the transparent/green gradient */}
      <div className="absolute top-[calc(45vh+205px)] border-t w-full before:absolute before:top-[-250px] before:bg-gradient-to-t before:from-clever-green before:w-full before:h-[250px]">
        <div className="h-[400px] bg-clever-green flex flex-col items-center text-center pt-4">
          <h1 className="font-semibold text-white text-[15px]">Produktvælger</h1>
          <p className="mt-2 text-[52px] max-w-[664px] font-light text-white">
            Lad os hjælpe dig med at finde rigtig ladeløsning
          </p>
          <p className="mt-4 font-normal max-w-[664px] opacity-[0.8] text-white text-[15px]">
            Svar på spørgsmålene og find ud af hvilken Clever løsning der passer bedst til dine
            behov
          </p>
          <button className="mt-8 bg-white text-black px-8 py-2">Tag testen her</button>
        </div>
      </div>
    </div>
  )
}
