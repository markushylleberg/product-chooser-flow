import { NavigationItemType } from '@/types'
import NavigationLayout from '@/components/Navigation/NavigationLayout'

export interface NavigationDataType {
  navigationItems: NavigationItemType[]
  contactItem: NavigationItemType
}

export function Navigation() {
  // TODO:
  // Fetch navigation settings here, for now it is going to be
  // hardcoded navigation items to be rendered in our HeaderLayout.

  const navigationData: NavigationDataType = {
    navigationItems: [
      {
        title: 'Privatkørsel',
        slug: '/privatkorsel',
        icon: null,
      },
      {
        title: 'Erhverv',
        slug: '/erhverv',
        icon: null,
      },
      {
        title: 'Boligforeninger',
        slug: '/boligforeninger',
        icon: null,
      },
    ],
    contactItem: {
      title: 'Spørgsmål og svar',
      slug: '/sporgsmal-og-svar',
      icon: 'light-bulb',
    },
  }

  return (
    <NavigationLayout
      navigationItems={navigationData.navigationItems}
      contactItem={navigationData.contactItem}
    />
  )
}
