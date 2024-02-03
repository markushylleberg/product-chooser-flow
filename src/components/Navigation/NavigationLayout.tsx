'use client'

import Link from 'next/link'

import Icon from '@/components/shared/Icon/Icon'
import { NavigationDataType } from '@/components/Navigation/Navigation'

import { useWindowScroll } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { NavigationFlowRoutes } from '@/utils'

export default function NavigationLayout({ navigationItems, contactItem }: NavigationDataType) {
  const [isUsingWhiteBackground, setIsUsingWhiteBackground] = useState(false)
  const [isFlowRoute, setIsFlowRoute] = useState(false)

  const [{ y: scrollYPostiion }] = useWindowScroll()

  const pathname = usePathname()

  useEffect(() => {
    // If the user is navigating into a flow route,
    // we set setIsFlowRoute to true to ensure the navigation
    // appearance aligns with the flow page.
    if (NavigationFlowRoutes.includes(pathname)) {
      return setIsFlowRoute(true)
    }

    setIsFlowRoute(false)

    if (typeof scrollYPostiion == 'number') {
      const hasScrolled = scrollYPostiion > 0
      setIsUsingWhiteBackground(hasScrolled)
    }
  }, [scrollYPostiion, pathname])

  const getAppearanceClasses = () => {
    // The navigation appearance will have a transparent background,
    // along with green text if the user has navigated to a flow route.
    if (isFlowRoute) return 'text-clever-green'

    // If user is on a normal page and has scrolled, we have the
    // navigation turn white with green text.
    if (isUsingWhiteBackground) {
      return 'text-clever-green bg-white'
    } else {
      return 'text-white'
    }
  }

  return (
    <nav
      className={`fixed top-0 z-navigation w-full h-navigation-height transition-colors duration-300 ${getAppearanceClasses()}`}
    >
      <div className="flex justify-center items-start py-6 px-12">
        <ul className="flex space-x-9 w-full">
          {navigationItems.map(({ title, slug }, index) => {
            return (
              <li key={index}>
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
