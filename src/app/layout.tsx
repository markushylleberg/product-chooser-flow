import type { Metadata } from 'next'
import './globals.css'

import { Navigation } from '@/components/Navigation/Navigation'

export const metadata: Metadata = {
  title: 'Clever | ProduktVælger',
  description: 'Find din Clever-løsning, som passer til dit behov',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
