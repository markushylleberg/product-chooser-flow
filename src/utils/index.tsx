import { MockDataPayload } from '@/types'

export const NavigationFlowRoutes: string[] = ['/product-chooser-flow']

export const ProductChooserMockData: MockDataPayload = {
  questions: [
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
          delay: 1.1,
          width: '80%',
        },
        {
          source: 'scene-house-one',
          left: '30vw',
          exitLeft: '20vw',
          bottom: '-0.1vw',
          delay: 1.3,
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
          delay: 2,
          bottom: '5.5vw',
          width: '50%',
        },
      ],
    },
  ],
  solutions: [
    {
      id: 1,
      title: 'Clever One',
      description:
        'Start dagen med fuld energi fra Clever-ladeboksen hjemme, og lad frit på Danmarks største ladenetværk.',
      questionnarieMatch: [
        { id: 1, match: ['ja'] },
        { id: 2, match: ['ude-og-hjemme'] },
        { id: 3, match: ['nej'] },
        { id: 4, match: ['fast-belob'] },
      ],
    },
    {
      id: 2,
      title: 'Clever Box',
      description:
        'Til dig der lader derhjemme og ønsker en intelligent Clever-ladeboks i din indkørsel samt rabat på vores ladenetværk.',
      questionnarieMatch: [
        { id: 1, match: ['ja'] },
        { id: 2, match: ['hjemme'] },
        { id: 3, match: ['nej'] },
        { id: 4, match: ['forbrugsafregnet'] },
      ],
    },
    {
      id: 2,
      title: 'Clever Go',
      description:
        'Til dig der ønsker adgang til vores ladenetværk og betaling for den strøm du bruger.',
      questionnarieMatch: [
        { id: 1, match: ['nej'] },
        { id: 2, match: ['farten'] },
        { id: 3, match: ['ja'] },
        { id: 4, match: ['forbrugsafregnet'] },
      ],
    },
  ],
}
