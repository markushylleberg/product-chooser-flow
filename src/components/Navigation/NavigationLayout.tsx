'use client'

import Link from 'next/link'
import Image from 'next/image'

import { NavigationDataType } from '@/components/Navigation/Navigation'

export default function NavigationLayout({ navigationItems, contactItem }: NavigationDataType) {
  return (
    <nav className="fixed top-0 z-navigation w-full h-navigation-height before:absolute before:w-full before:h-[8rem] before:bg-gradient-to-b from-black/40 before:z-[-1]">
      <div className="flex justify-between items-center py-6 px-12 text-white">
        <ul className="flex space-x-8 w-full">
          {navigationItems.map(({ title, slug }) => {
            return (
              <li>
                <Link href={slug}>{title}</Link>
              </li>
            )
          })}
        </ul>
        <div className="min-w-[129px] mx-2.5">
          <Link href={'/'}>
            <Image src="/clever-logo.svg" alt="Clever Logo" width={130} height={24} priority />
          </Link>
        </div>
        <div className="justify-end flex w-full">
          <Link className="flex items-center justify-center" href={contactItem.slug}>
            {contactItem.icon ? (
              <Image
                className="mr-1"
                src={`/${contactItem.icon}.svg`}
                alt=""
                width={24}
                height={24}
                priority
              />
            ) : null}
            {contactItem.title}
          </Link>
        </div>
      </div>
    </nav>
  )
}
