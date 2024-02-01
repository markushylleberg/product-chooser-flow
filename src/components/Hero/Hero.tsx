import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative w-full h-screen min-h-[800px]">
      <Image src="/home-image.png" className="object-cover" alt="" fill={true} priority />
      {/* We want to position the text content on top of the image, and move
          it halfway down the screen + space for the transparent/green gradient */}
      <div className="absolute top-[calc(50vh+205px)] border-t w-full before:absolute before:top-[-205px] before:bg-gradient-to-t before:from-clever-green before:w-full before:h-[205px]">
        <div className="h-[205px] bg-clever-green">text content</div>
      </div>
    </div>
  )
}
