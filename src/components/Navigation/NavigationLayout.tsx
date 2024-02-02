'use client'

import Link from 'next/link'

import Icon from '@/components/shared/Icon/Icon'
import { NavigationDataType } from '@/components/Navigation/Navigation'

import { useWindowScroll } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'

export default function NavigationLayout({ navigationItems, contactItem }: NavigationDataType) {
  const [isUsingWhiteBackground, setIsUsingWhiteBackground] = useState(false)

  const [{ y: scrollYPostiion }] = useWindowScroll()

  useEffect(() => {
    if (typeof scrollYPostiion == 'number') {
      const hasScrolled = scrollYPostiion > 0
      setIsUsingWhiteBackground(hasScrolled)
    }
  }, [scrollYPostiion])

  return (
    <nav
      className={`fixed top-0 z-navigation w-full h-navigation-height transition-colors duration-300 ${
        isUsingWhiteBackground ? 'text-clever-green bg-white' : 'text-white'
      }`}
    >
      <div className="flex justify-center items-start py-6 px-12">
        <ul className="flex space-x-9 w-full">
          {navigationItems.map(({ title, slug }) => {
            return (
              <li>
                <Link href={slug}>{title}</Link>
              </li>
            )
          })}
        </ul>
        <div className="min-w-[129px] h-[24px] mx-2.5 flex items-center justify-center">
          <Link href={'/'}>
            <Icon name="clever-logo" className="w-[129px] h-[24px] pt-1" />
          </Link>
        </div>
        <div className="justify-end flex w-full">
          <Link className="flex items-center justify-center" href={contactItem.slug}>
            {contactItem.icon ? <Icon name="light-bulb" className="w-[24px] h-[24px]" /> : null}
            {contactItem.title}
          </Link>
        </div>
      </div>
    </nav>
  )
}
