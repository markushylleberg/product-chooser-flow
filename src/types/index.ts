export interface NavigationItemType {
  title: string
  slug: string
  icon: string | null
}

export interface MockDataPayload {
  questions: ProductChooserStepItem[]
  solutions: SolutionItem[]
}

export interface ProductChooserStepItem {
  id: number
  question: string
  answers: {
    text: string
    value: string
  }[]
  backgroundElements: {
    source: string
    left: string
    exitLeft: string
    bottom: string
    width: string
    delay?: number
  }[]
}

export interface SolutionItem {
  id: number
  title: string
  description: string
  questionnarieMatch: QuestionnaireMatchItem[]
}

export interface QuestionnaireMatchItem {
  id: number
  match: string[]
}

export interface QuestionnarieAnswer {
  id: number
  answer: string
}
