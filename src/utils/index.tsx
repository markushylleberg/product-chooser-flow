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
    backgroundElements: [
      {
        source: 'scene-hedge',
        left: '10vw',
        exitLeft: '0vw',
        bottom: '-0.5rem',
        width: '80%',
      },
      {
        source: 'scene-house-one',
        left: '8vw',
        exitLeft: '0vw',
        bottom: '-1.5rem',
        width: '80%',
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
    backgroundElements: [
      {
        source: 'scene-hedge',
        left: '12.5vw',
        exitLeft: '0vw',
        bottom: '-0.5rem',
        width: '80%',
      },
      {
        source: 'scene-house-two',
        left: '85vw',
        exitLeft: '100vw',
        bottom: '-0.5rem',
        width: '15%',
      },
      {
        source: 'scene-station',
        left: '-70vw',
        exitLeft: '-100vw',
        bottom: '-1.3rem',
        width: '100%',
      },
      {
        source: 'scene-charging-stand',
        left: '11vw',
        exitLeft: '0vw',
        bottom: '-1.4rem',
        width: '5%',
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
    backgroundElements: [],
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
    backgroundElements: [],
  },
]
