import { Hero } from '@/components/Hero/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative h-[130vh] overflow-hidden">
      <Hero />
    </main>
  )
}
