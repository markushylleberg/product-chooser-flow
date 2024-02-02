import { ProductChooserStepItem } from '@/types'

export const NavigationFlowRoutes: string[] = ['/product-chooser-flow']

export const ProductChooseMockData: ProductChooserStepItem[] = [
  {
    id: 1,
    question: 'Har du mulighed for at få en ladeboks derhjemme?',
    answers: [
      {
        text: 'Ja, det har jeg',
        value: 'ja',
      },
      {
        text: 'Nej, det har jeg ikke',
        value: 'nej',
      },
    ],
  },
  {
    id: 2,
    question: 'Hvor forventer du at lade mest?',
    answers: [
      {
        text: 'Primært hjemme',
        value: 'hjemme',
      },
      {
        text: 'Mest på farten',
        value: 'farten',
      },
      {
        text: 'Både ude og hjemme',
        value: 'ude-og-hjemme',
      },
    ],
  },
  {
    id: 3,
    question: 'Har du muligheden for at lade på dit arbejde?',
    answers: [
      {
        text: 'Ja',
        value: 'ja',
      },
      {
        text: 'Nej',
        value: 'nej',
      },
    ],
  },
  {
    id: 4,
    question: 'Hvordan ønsker du at betale?',
    answers: [
      {
        text: 'Fast beløb',
        value: 'fast-belob',
      },
      {
        text: 'Forbrugsafregnet',
        value: 'forbrugsafregnet',
      },
    ],
  },
]
