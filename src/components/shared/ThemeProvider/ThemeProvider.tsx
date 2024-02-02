'use client'
import localFont from 'next/font/local'

const PPMori = localFont({
  src: [
    {
      path: '../../../fonts/No5-Extralight.otf',
      weight: '300',
    },
    {
      path: '../../../fonts/No5-Regular.otf',
      weight: '400',
    },
    {
      path: '../../../fonts/No5-Demibold.otf',
      weight: '500',
    },
    {
      path: '../../../fonts/No5-Bold.otf',
      weight: '600',
    },
  ],
  display: 'swap',
})

export default function ThemeProvider() {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-sans: ${PPMori.style.fontFamily}, sans-serif;
          }
        `}
      </style>
    </>
  )
}
