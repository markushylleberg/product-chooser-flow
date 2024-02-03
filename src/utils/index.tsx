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
        exitLeft: '10vw',
        bottom: '0',
        delay: 2,
        width: '80%',
      },
      {
        source: 'scene-house-one',
        left: '30vw',
        exitLeft: '20vw',
        bottom: '-0.1vw',
        delay: 2.7,
        width: '40%',
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
        exitLeft: '12.5vw',
        bottom: '0',
        width: '80%',
      },
      {
        source: 'scene-house-two',
        left: '85vw',
        exitLeft: '100vw',
        bottom: '0',
        width: '15%',
      },
      {
        source: 'scene-station',
        left: '-70vw',
        exitLeft: '-100vw',
        bottom: '-1vw',
        width: '100%',
      },
      {
        source: 'scene-charging-stand',
        left: '11vw',
        exitLeft: '0vw',
        bottom: '-1vw',
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
    backgroundElements: [
      {
        source: 'scene-hedge',
        left: '12.5vw',
        exitLeft: '12.5vw',
        bottom: '0',
        width: '80%',
      },
      {
        source: 'scene-grid',
        left: '80vw',
        exitLeft: '100vw',
        bottom: '0',
        width: '20%',
      },
      {
        source: 'scene-charging-stand-two',
        left: '11vw',
        exitLeft: '0vw',
        bottom: '-1px',
        width: '3%',
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
    backgroundElements: [
      {
        source: 'scene-bars',
        left: '30vw',
        exitLeft: '30vw',
        bottom: '0',
        width: '40%',
      },
      {
        source: 'scene-bars-line',
        left: '25vw',
        exitLeft: '0vw',
        delay: 2.5,
        bottom: '5.5vw',
        width: '50%',
      },
    ],
  },
]
