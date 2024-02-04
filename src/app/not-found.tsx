import Button from '@/components/Button/Button'
import Icon from '@/components/shared/Icon/Icon'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <main className="relative pb-32 h-screen flex items-center justify-center flex-col">
      <h1 className="headline-lg-text text-white">Siden blev ikke fundet</h1>
      <span className="body-text text-white mt-4">
        Beklager, vi kan ikke finde den side, du leder efter
      </span>
      <Link href="/" className="group mt-16">
        <Button style="secondary">
          <span className="flex items-center space-x-2">
            <span className="body-text">Gå til forsiden</span>
            <Icon
              name="arrow-link"
              className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300 text-black"
            />
          </span>
        </Button>
      </Link>
    </main>
  )
}
