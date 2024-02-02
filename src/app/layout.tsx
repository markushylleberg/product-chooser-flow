import type { Metadata } from 'next'
import './globals.css'

import { Navigation } from '@/components/Navigation/Navigation'
import ThemeProvider from '@/components/shared/ThemeProvider/ThemeProvider'

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
        <ThemeProvider />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
